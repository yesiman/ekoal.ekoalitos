import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { TabsModule } from 'ng2-bootstrap/tabs';
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
