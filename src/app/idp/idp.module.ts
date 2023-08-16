import { CUSTOM_ELEMENTS_SCHEMA, Component, NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { IntroComponent } from './pages/intro/intro.component';
import { IdpRoutingModule } from './idp-routing.module';
import { CommonModule } from '@angular/common';
import { SignInUpComponent } from './pages/sign-in-up/sign-in-up.component';
import { CodeConfirmComponent } from './pages/code-confirm/code-confirm.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { ConfirmComponent } from './partials/confirm/confirm.component';
import { IsIDP } from '@core/gaurd/auth.gaurd';
import { NotConnectedComponent } from './pages/not-connected/not-connected.component';
import { SharedModule } from '@share/shared.module';


@NgModule({
    declarations: [
        LayoutComponent,
        IntroComponent,
        SignInUpComponent,
        CodeConfirmComponent,
        SignUpComponent,
        SignInComponent,
        ConfirmComponent,
        NotConnectedComponent
    ],
    imports: [
        SharedModule.forChild(),
        IdpRoutingModule,
        CommonModule,
        FormsModule,
        
    ],
    providers: [IsIDP],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IdpModule { }
