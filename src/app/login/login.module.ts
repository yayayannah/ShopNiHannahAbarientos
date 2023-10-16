import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashscreenComponent } from '../components/splashscreen/splashscreen.component';
import { LoginComponent } from './login.component';



@NgModule({
  declarations: [
    SplashscreenComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
