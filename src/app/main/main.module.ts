import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from './main.component';
import {RouterModule, Routes} from '@angular/router';
import {mainRoutes} from './main.routes';
import {UserModule} from './user/user.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes),
    UserModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }
