
import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { SharedService } from '../../shared/services/shared.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  providers: [ LoginService ]
})
export class LoginComponent {
  private parentRouter:Router;
  private logReq:boolean = false;
  private user:any = {};
  constructor(private loginService:LoginService,private router: Router,
    private sharedService:SharedService) {
    this.parentRouter = router;
  }
  private onLogResponse(data)
  {
    this.logReq = false;
    if (data.success) {
      
      this.sharedService.setUser({
        token:data.token,
        name:data.name,
        surn:data.surn,
      });
      this.parentRouter.navigateByUrl('/dashboard');
    }
  }
  login(){
    
    this.logReq = true;
    this.loginService.login(this.user)
      .subscribe(
        data  => this.onLogResponse(data),
        error => console.log(error));
}
   //login(){
       //
    //}
}
