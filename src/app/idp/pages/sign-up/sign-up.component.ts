import { Component, OnInit } from '@angular/core';
import * as _shareSvc from "@share/services";
import * as _shareMls from "@share/models";
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  faq = [];
  constructor(public readonly accountSvc: _shareSvc.AccountsService,
    public readonly _localStorageService: _shareSvc.LocalStorageService,
    private readonly router: Router,
    private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.queryParams
      .subscribe((params: any) => {
       
      }
      );
  }







}
export class model {
  id?: number;
  name?: string
}