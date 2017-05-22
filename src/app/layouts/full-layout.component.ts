import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { SharedService } from '../shared/services/shared.service';
import { LayoutService } from './layout.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html',
  providers:[LayoutService]
})
export class FullLayoutComponent implements OnInit {

  @Input() menuItems: any[];  

  private bindMenu(data)
  {
    var it = { id:1,lib:"Projets",childs:[],routeMasterAdd:"/projects/edit"};
    data.items.forEach(element => {
      console.log(element);
      it.childs.push(this.layoutService.getStdMenuItemChilds(element._id,element.lib,"icon-layers","#f86c6b","/protos/edit","/protos/list","/project/"  + element._id,false));  
    });
    this.menuItems.push(it);
    it = { id:2,lib:"Administration",childs:[],routeMasterAdd:null };
    it.childs.push(this.layoutService.getStdMenuItemChilds("21","Prototypes","icon-layers","#f86c6b","/protos/edit","/protos/list","",true));
    it.childs.push(this.layoutService.getStdMenuItemChilds("22","Propriétés","icon-puzzle","#f8cb00","/properties/edit","/properties/list","",true));
    it.childs.push(this.layoutService.getStdMenuItemChilds("23","Objets","icon-diamond","#4dbd74","/objects/edit","/objects/list","",true));
    it.childs.push(this.layoutService.getStdMenuItemChilds("24","Utilisateurs","icon-user","#20a8d8","/users/edit","/users/list","",true));
    it.childs.push(this.layoutService.getStdMenuItemChilds("25","Types de données","icon-direction","#aad450","/datatypes/edit","/datatypes/list","",true));
    it.childs.push(this.layoutService.getStdMenuItemChilds("26","Langues","icon-flag","#f78c40","/langs/edit","/langs/list","",true));
    this.menuItems.push(it);
  }

  constructor(private layoutService:LayoutService,private sharedService:SharedService) {
    this.menuItems = [];
    this.layoutService.getProjects()
        .subscribe(
          data  => this.bindMenu(data),
          error =>  console.log(error));
  }
  //
  public disabled: boolean = false;
  public status: {isopen: boolean} = {isopen: false};
  //
  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {}
}
