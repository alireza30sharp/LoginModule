import { Component, ViewChild } from '@angular/core';
import * as _shareSvc from "@share/services";
import * as _shareMls from "@share/models";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent
{

  pincode: string = '';
  guid: string = '';
  number: string = '';

  @ViewChild("pinCodeElement") pinCodeElement;

  constructor(public readonly accountSvc: _shareSvc.AccountsService,
    private readonly router: Router,
    private route: ActivatedRoute, 
  )
  {
   
  }

  ngOnInit()
  {
    this.route.queryParams
      .subscribe((params: any) =>
      {
        this.guid = params.guid;
        this.number = params.numb;
      });
  }

  ngOnDestroy(): void
  {

  }

  showDanger()
  {

  }


  clearForm()
  {
    setTimeout(() =>
    {
      this.pinCodeElement.clearForm();
    }, 250);
  }

  emitCode(val: string)
  {
    this.pincode = val;
    this.signIn();
  }

  signIn()
  {
    let model = {
      otpSession: {
        guid: this.guid,
        otpSessionType: _shareMls.OtpTypes.SignIn
      },
      phoneNumber: this.number,
      password: this.pincode
    }
    this.accountSvc.signIn(model).subscribe((response: any) =>
    {
      this.router.navigate(['auth/confirm']);
    }, err =>
    {
      this.showDanger();
    })
  }
}
