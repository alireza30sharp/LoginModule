import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import * as _shareSvc from '@share/services';
import * as _shareCmp from '@share/components';
import * as _shareDir from '@share/directives';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '../core/services';
import * as _sharePipe from '@share/pipes';
import { IconsModule } from 'app/core/icons/icons.module';

@NgModule({
  declarations: [
    _shareCmp.ImageComponent,
    _shareCmp.NoRecordFoundComponent,
    _shareCmp.PinCodeComponent,
    _sharePipe.SafeUrlPipe,
    _shareDir.DefaultImage,
    _shareDir.UniCodeDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    IconsModule

  ],

  providers: [
    _shareSvc.AccountsService,
    _sharePipe.SafeUrlPipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    _shareCmp.ImageComponent,
    _shareCmp.PinCodeComponent,
    _shareCmp.NoRecordFoundComponent,
    _shareDir.DefaultImage,
    _shareDir.UniCodeDirective,
    _sharePipe.SafeUrlPipe,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {

  static forRoot() {
    return {
      ngModule: SharedModule,
    }
  }

  static forChild() {
    return {
      ngModule: SharedModule,
    }
  }

}
