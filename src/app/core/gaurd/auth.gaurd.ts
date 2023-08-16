import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import * as _svc from "@share/services";
import { Observable, of } from "rxjs";

@Injectable()
export class AuthGaurd
{

    constructor(private _accountsSvc: _svc.AccountsService) { }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
    {
        return this._accountsSvc.isAuthenticateObservable();
    }
}

@Injectable()
export class IsIDP
{

    constructor(
        private _localStorageSvc: _svc.LocalStorageService,
        private router: Router,
        private _accountsSvc: _svc.AccountsService) { }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
    {
        this._accountsSvc.isAuthenticateObservable().subscribe(flag =>
        {
            if (flag)
            {
                this.router.navigate(["app"]);
            } else
            {
                this._localStorageSvc.clearAll();
            }
        })

        return true;

    }

}
