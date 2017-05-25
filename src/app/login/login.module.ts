import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { LoginComponent } from './components/login.component';

import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    LoginRoutingModule,
    CommonModule
  ],
  declarations: [ LoginComponent ]
})
export class LoginModule { }
