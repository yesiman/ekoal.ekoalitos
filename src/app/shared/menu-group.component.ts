import { Component,Input } from '@angular/core';

@Component({
  selector: 'menugroup',
  template: `<li class="divider"></li>
          <li class="nav-title">
            {{menuGroupItem.lib}}
            <a class="nav-link" placement="left" ngbTooltip="Masquer"><i class="icon-arrow-down-circle"></i></a>
            <a class="nav-link" placement="left" ngbTooltip="Nouveau" *ngIf="menuGroupItem.routeMasterAdd"  routerLinkActive="active" [routerLink]="[menuGroupItem.routeMasterAdd]"><i class="icon-plus"></i></a>
          </li>
          <li *ngFor="let child of menuGroupItem.childs" class="nav-item nav-dropdown" routerLinkActive="open">
            <a class="nav-link nav-dropdown-toggle" href="#"><i [ngStyle]="{'color': child.color}" ngClass="{{child.icon}}"></i> {{child.lib}}</a>
            <ul *ngIf="child.childs" class="nav-dropdown-items">
              <li *ngFor="let uChild of child.childs" class="nav-item">
                <a class="nav-link" routerLinkActive="active" [routerLink]="[uChild.route]"><i  [ngStyle]="{'color': child.color}"  ngClass="{{uChild.icon}}"></i> {{uChild.lib}}</a>
              </li>
            </ul>
          </li>
          `
})
export class MenuGroupComponent {
  @Input() menuGroupItem: any;
  constructor() {
    
  }
}
