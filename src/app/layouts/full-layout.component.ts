import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { SharedService } from '../shared/services/shared.service';
import { LayoutService } from './layout.service';
import { ReposService } from 'app/ekit/repositories/services/repositories.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html',
  providers:[LayoutService]
})
export class FullLayoutComponent implements OnInit {

  @Input() menuItems: any[];  
  langs:any;
  

  constructor(private layoutService:LayoutService,private sharedService:SharedService,private reposService:ReposService) {
    this.menuItems = [];
    this.sharedService.getUserViaCokies();
    if (this.sharedService.user.token)
    {
      //
    this.layoutService.getProjects()
    .subscribe(
      data  => this.bindMenu(data),
      error =>  console.log(error));
    //
    this.reposService.getAll("langs",1, {})
      .subscribe(
        data  => this.bindLangs(data),
        error =>  console.log(error));
    }else {
      //BAKC TO AUTH
    }

    
  }
  //
  public disabled: boolean = false;
  private bindMenu(data)
  {
    var it = { id:1,lib:"Projets",childs:[],routeMasterAdd:"/projects/edit"};
    data.items.forEach(element => {
      it.childs.push(this.layoutService.getStdMenuItemChilds(element._id,element.lib,"icon-layers","#f86c6b","/prototypes/edit","/prototypes/list","/project/"  + element._id,false));  
    });
    this.menuItems.push(it);
    it = { id:2,lib:"Administration",childs:[],routeMasterAdd:null };
    it.childs.push(this.layoutService.getStdMenuItemChilds("21","Prototypes","icon-layers","#f86c6b","/prototypes/edit/-1","/prototypes/list","",true));
    it.childs.push(this.layoutService.getStdMenuItemChilds("22","Propriétés","icon-puzzle","#f8cb00","/properties/edit/-1","/properties/list","",true));
    it.childs.push(this.layoutService.getStdMenuItemChilds("23","Objets","icon-diamond","#4dbd74","/objects/edit/-1","/objects/list","",true));
    it.childs.push(this.layoutService.getStdMenuItemChilds("24","Utilisateurs","icon-user","#20a8d8","/users/edit/-1","/users/list","",true));
    it.childs.push(this.layoutService.getStdMenuItemChilds("25","Types de données","icon-direction","#aad450","/datatypes/edit/-1","/datatypes/list","",true));
    it.childs.push(this.layoutService.getStdMenuItemChilds("26","Langues","icon-flag","#f78c40","/langs/edit/-1","/langs/list","",true));
    this.menuItems.push(it);
  }
  private bindLangs(data)
  {
    this.langs = data.items;
  }

  ngOnInit(): void {}
}
