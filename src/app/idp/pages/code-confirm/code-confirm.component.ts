import { Component, HostListener, ViewChild } from '@angular/core';
import * as _shareSvc from "@share/services";
import * as _shareMls from "@share/models";
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { countries, CountryModel } from '@core/static/country';
@Component({
  selector: 'app-code-confirm',
  templateUrl: './code-confirm.component.html',
  styleUrls: ['./code-confirm.component.scss']
})
export class CodeConfirmComponent
{

  constructor(public readonly accountSvc: _shareSvc.AccountsService,
    private readonly router: Router,
  )
  {
   
  }
  ngOnInit(): void
  {
  }
  ngOnDestroy(): void
  {
  }

}
