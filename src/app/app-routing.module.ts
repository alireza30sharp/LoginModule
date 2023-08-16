import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthSignInComponent } from './sign-in/sign-in.component';
import { LayoutComponent } from 'app/layout/layout.component';

const routes: Routes = [
  {path: '', pathMatch : 'full', redirectTo: 'sign-in'},

  {
    path: '',
    component: LayoutComponent,
    data: {
        layout: 'empty'
    },
    children: [
      {
        path: 'sign-in',
        component: AuthSignInComponent,
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
