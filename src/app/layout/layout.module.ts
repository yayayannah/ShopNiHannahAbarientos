import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { TopnavComponent } from '../components/topnav/topnav.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { ScreenComponent } from '../components/screen/screen.component';



@NgModule({
  declarations: [
    LayoutComponent,
    TopnavComponent,
    SidenavComponent,
    ScreenComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    RouterModule
  ]
})
export class LayoutModule { }
