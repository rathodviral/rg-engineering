import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtpComponent } from 'src/app/otp/otp.component';
import { LoginComponent } from 'src/app/login/login.component';
import { RegisterComponent } from 'src/app/register/register.component';
import { AdminRegisterComponent } from './admin/admin-register/admin-register.component';

const routes: Routes = [
  { path: 'register', component: OtpComponent },
  { path: 'admin/register', component: AdminRegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: RegisterComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
