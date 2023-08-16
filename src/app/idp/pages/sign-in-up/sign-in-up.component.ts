import { Component, OnInit } from '@angular/core';
import * as _shareMls from '@share/models';
import * as _shareSvc from "@share/services";
@Component({
  selector: 'app-sign-in-up',
  templateUrl: './sign-in-up.component.html',
  styleUrls: ['./sign-in-up.component.scss']
})
export class SignInUpComponent implements OnInit
{


  constructor(private localStorageSvc: _shareSvc.LocalStorageService,) { }

  ngOnInit()
  {
    this.localStorageSvc.delete(_shareMls.localStorageEnum.userInfo);
    this.localStorageSvc.delete(_shareMls.localStorageEnum.token);
  }


}
