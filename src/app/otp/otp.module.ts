import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtpComponent } from './otp.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({timeOut: 2000}), // ToastrModule added
  ],
  providers: [HttpClientModule],
  declarations: [OtpComponent]
})
export class OtpModule { }
