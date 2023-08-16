import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthSignInComponent } from './sign-in/sign-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@share/shared.module';
import { LayoutModule } from './layout/layout.module';
import { FuseModule } from '@fuse';
import { appConfig } from 'app/core/config/app.config';
import { FuseConfigModule } from '@fuse/services/config';

@NgModule({
  declarations: [
    AppComponent,
    AuthSignInComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    FuseModule,
    FuseConfigModule.forRoot(appConfig),

    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
