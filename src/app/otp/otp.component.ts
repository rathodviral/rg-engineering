import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  mobileNumber;
  otp1;
  otp2;
  otp3;
  otp4;
  constructor(private toastrService: ToastrService) { }

  ngOnInit() {
  }

  submitMobile() {
    if(this.mobileNumber) {
      const otp = this.getOTP();
      this.toastrService.success(otp.toString());
      localStorage.setItem('otp', otp.toString());
    }
  }

  getOTP() {
    const val = Math.floor(1000 + Math.random() * 9000);
    return val;    
  }

  confirmNumber() {
    const getOTP = +localStorage.getItem('otp');
    const otp = this.otp1 + this.otp2 + this.otp3 + this.otp4;
    if(getOTP === +otp) {
      this.toastrService.success('Mobile Number Verified Successfully');
    } else {
      this.toastrService.error('Try Again!');
    }
  }

}
