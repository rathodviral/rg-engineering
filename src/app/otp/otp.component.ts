import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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
  constructor(private http: HttpClient,private toastrService: ToastrService) { }

  ngOnInit() {
  }

  submitMobile() {
    console.log(this.mobileNumber)
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
  private formatErrors(error: any) {
    window.alert('Something went wrong, please try again later !');
    return throwError(error.error);
}
  get(path: string, headers?): Observable<any> {
    return this.http
        .get(path)
        .pipe(catchError(this.formatErrors));
}
  getAvailableTeams(mobileNo):Observable<any>{
    return this.get(`http://berkshire-weddings.co.uk/api/v1/phone/client/phone=${mobileNo}&api_lock=30501a77780a82ea0e7d9f6f957f2854`).pipe(
      map(data => {
          return data;
      })
  );
 } 
}
