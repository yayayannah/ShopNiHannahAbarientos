import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashscreenComponent } from '../components/splashscreen/splashscreen.component';
import { LoginComponent } from './login.component';
import { RegistrationComponent } from '../registration/registration.component';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [
    SplashscreenComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
