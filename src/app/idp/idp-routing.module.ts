import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { IntroComponent } from './pages/intro/intro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { SignInUpComponent } from './pages/sign-in-up/sign-in-up.component';
import { CodeConfirmComponent } from './pages/code-confirm/code-confirm.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ConfirmComponent } from './partials/confirm/confirm.component';
import { AuthFirstLogin } from '@core/gaurd/auth.firstlogin';
import { IsIDP } from '@core/gaurd/auth.gaurd';
import { NotConnectedComponent } from './pages/not-connected/not-connected.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: IntroComponent,
      },
      {
        path: 'sign-up-in',
        component: SignInUpComponent,
      },
      {
        path: 'code-conf',
        component: CodeConfirmComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
      },
      {
        path: 'sign-in',
        component: SignInComponent,
      },
      {
        path: 'confirm',
        component: ConfirmComponent,
      },
      {
        path: 'not-connected',
        component: NotConnectedComponent,
      }
    ],
    canActivateChild: [IsIDP]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdpRoutingModule { }
