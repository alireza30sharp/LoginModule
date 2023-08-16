import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import * as _svc from "@share/services";
import { Observable, of } from "rxjs";

@Injectable()
export class AuthFirstLogin implements CanActivate {

    constructor(private _accountsSvc: _svc.AccountsService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this._accountsSvc.isFirstLogin()) {
            this.router.navigate(['/auth/sign-up-in']);
            return true;
        } else {
            localStorage.setItem("firstLogin", "true");
            return true;
        }

    }




}
