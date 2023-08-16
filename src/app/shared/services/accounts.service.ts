import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as _shareMls from "@share/models";
import * as _shareSvc from "@share/services";
import { Observable, Observer, catchError, delay, map, mergeMap, of, timeout, timer } from 'rxjs';
import { APIURI } from 'app/api-uri';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountsService
{

  constructor(
    private localStorageSvc: _shareSvc.LocalStorageService,
    private router: Router,
    private http: HttpClient) { }

  public getOtpCode(phoneNumber: string, otpType: _shareMls.OtpTypes, oldPhoneNumber: string = '', pincode: string = '', isWhatsApp: boolean = false): Observable<_shareMls.OtpResponse>
  {
    let model = {
      requester: phoneNumber,
      code: 0,
      otpType: otpType,
      payload: {},
      isWhatsApp
    };

    let url: string = '';
    switch (otpType)
    {
      case _shareMls.OtpTypes.SignIn:
        url = APIURI.accounts.sendOtp;
        break;
      case _shareMls.OtpTypes.SignUp:
        url = APIURI.accounts.sendOtp;
        break;
      case _shareMls.OtpTypes.ResetPassword:
        url = APIURI.accounts.resetPasswword.otpSms;
        break;
      case _shareMls.OtpTypes.ChangePhoneNumber:
        url = APIURI.accounts.changePhoneNumber.otpSms;
        model = {
          requester: phoneNumber,
          code: 0,
          otpType: otpType,
          payload: {
            oldNumber: oldPhoneNumber,
            password: pincode
          },
          isWhatsApp
        }
        break;
    }

    return this.http.post<_shareMls.OtpResponse>(url, model);
  }

  public verifyCode(phoneNumber: string, code: string, otpType: _shareMls.OtpTypes): Observable<_shareMls.OtpResponse>
  {
    return this.http.post<_shareMls.OtpResponse>(APIURI.accounts.verifySms,
      {
        requester: phoneNumber,
        code: code,
        otpType: otpType,
        payload: null
      }
    );
  }

  public signup(model: _shareMls.ISignUp)
  {
    return this.http.post<_shareMls.OtpResponse>(APIURI.accounts.signUp.SignUpComplete, model);
  }
  public resetPassword(model: _shareMls.ChangePassword)
  {
    return this.http.post<any>(APIURI.accounts.resetPasswword.resetPassword, model);
  }
  public changePassword(model: _shareMls.ChangePassword)
  {
    return this.http.post<any>(APIURI.accounts.changePassword, model);
  }
  public signIn(model: _shareMls.OtpSignIn)
  {
    return this.http.post(APIURI.accounts.signIn.signIn, model).pipe(this.initToken(), this.setUsername(), this.errorHandle());
  }

  public logout()
  {
    const token: _shareMls.IToken = this.getToken();
    this.http.post<any>(APIURI.accounts.logout, { refreshToken: token.refresh_token }).subscribe();
    this.localStorageSvc.clearAll();
    this.router.navigate(['/auth/sign-up-in']);
  }

  setUserInfoToLocalStoreg(): Observable<boolean>
  {

    return of(true).pipe(timeout(500), mergeMap(flag =>
    {
      if (this.isAuthenticate())
      {
        return this.refreshToken().pipe(mergeMap(res =>
        {
          return this.http.get<_shareMls.Default<any>>(APIURI.accounts.users.accounts).pipe(mergeMap(res =>
          {
            this.localStorageSvc.set(_shareMls.localStorageEnum.userInfo, res.data.user);
            return of(flag);
          }))
        }))
      } else
      {
        this.localStorageSvc.clearAll();
        return of(flag);
      }
    }))

  }

  getToken(): _shareMls.IToken
  {
    return this.localStorageSvc.get<_shareMls.IToken>(_shareMls.localStorageEnum.token);
  }

  getSecurityQuestions()
  {
    return this.http.get<any>(APIURI.accounts.signUp.SecurityQuestions);
  }

  getUser(): _shareMls.IUser
  {
    return JSON.parse(localStorage.getItem(_shareMls.localStorageEnum.userInfo));
  }

  setUser(user: _shareMls.IUser)
  {
    return localStorage.setItem(_shareMls.localStorageEnum.userInfo, JSON.stringify(user));
  }

  updateUserLocalStorage(key: string, value: any): Observable<_shareMls.IUser>
  {
    return of(new _shareMls.IUser()).pipe(delay(250), mergeMap(x =>
    {
      const user: _shareMls.IUser = JSON.parse(localStorage.getItem(_shareMls.localStorageEnum.userInfo));
      user[key] = value;
      this.setUser(user);
      return this.getUserObservable();
    }));
  }

  getUserObservable(): Observable<_shareMls.IUser>
  {
    return of(new _shareMls.IUser()).pipe(delay(250), map(x =>
    {
      const user: _shareMls.IUser = JSON.parse(localStorage.getItem(_shareMls.localStorageEnum.userInfo));
      user.avatar = `${environment.origin}/gallery/Profile/${user.avatar}`;
      return user;
    }));
  }



  isFirstLogin(): boolean
  {
    return localStorage.getItem("firstLogin") ? true : false;
  }

  isAuthenticateObservable(): Observable<boolean>
  {
    return of(true).pipe(delay(250), map(flag => this.isAuthenticate()))
  }

  isAuthenticate(): boolean
  {
    return localStorage.getItem("token") ? true : false;
  }

  refreshToken()
  {
    const token: _shareMls.IToken = this.getToken();
    return this.http.post<any>(APIURI.accounts.refreshToken, { refreshToken: token.refresh_token }).pipe(this.initToken(), this.setUsername(), this.errorHandle());
  }

  initToken()
  {
    return map((res: _shareMls.Default<{ token: _shareMls.IToken }>) =>
    {
      if (res && res.data && res.data.token)
      {
        const token: _shareMls.IToken = JSON.parse(res.data.token.toString());
        this.localStorageSvc.set(_shareMls.localStorageEnum.token, token);
      }
    })
  }

  setUsername()
  {
    return mergeMap(p =>
    {
      return this.http.get<_shareMls.Default<any>>(APIURI.accounts.users.accounts).pipe(map(res =>
      {
        this.localStorageSvc.set(_shareMls.localStorageEnum.userInfo, res.data.user);
      }))
    })
  }

  errorHandle()
  {
    return catchError(val =>
    {
      this.logout();
      return of();
    })
  }

  updateAvatar(file: File)
  {
    const formData = new FormData();
    formData.append('File', file);

    return this.http.post(APIURI.accounts.updateAvatar, formData);
  }





}
