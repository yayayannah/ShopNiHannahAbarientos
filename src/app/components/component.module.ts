import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';



@NgModule({
  declarations: [
    CardComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardComponent
  ]
})
export class ComponentsModule { }