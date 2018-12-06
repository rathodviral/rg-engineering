import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtpComponent } from './otp.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({timeOut: 2000}), // ToastrModule added
  ],
  declarations: [OtpComponent]
})
export class OtpModule { }
