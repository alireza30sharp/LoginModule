import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { AccountsService } from '@share/services';

@Injectable()
export class InterceptorService implements HttpInterceptor
{

  constructor(private _accountsService: AccountsService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {

    if (this._accountsService.isAuthenticate())
    {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this._accountsService.getToken().access_token}`
        }
      });
    }


    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) =>
      {
        if ([401].includes(error.status))
        {
          this._accountsService.logout();
        }
        return throwError([]);
      })
    ) as Observable<HttpEvent<any>>;


  }
}