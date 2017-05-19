import { Component,Input } from '@angular/core';

@Component({
  selector: 'menugroup',
  template: `<li class="divider"></li>
          <li class="nav-title">
            {{menuGroupItem.lib}}
            <a class="nav-link" placement="left" ngbTooltip="Masquer" (click)="switchCollapse()" routerLinkActive="active" ><i class="{{iconClass}}"></i></a>
            <a class="nav-link" placement="left" ngbTooltip="Nouveau" *ngIf="menuGroupItem.routeMasterAdd"  routerLinkActive="active" [routerLink]="[menuGroupItem.routeMasterAdd]"><i class="icon-plus"></i></a>
          </li>
          <div id="{{'collapse-'+menuGroupItem.id}}" [ngbCollapse]="isCollapsed">
            <li *ngFor="let child of menuGroupItem.childs" class="nav-item nav-dropdown" routerLinkActive="open">
              <div [ngSwitch]="child.childs">
                <a *ngSwitchCase="undefined" class="nav-link "  routerLinkActive="active" [routerLink]="[child.route]" [queryParams]="{pkey:child.id}"><i [ngStyle]="{'color': child.color}" ngClass="{{child.icon}}"></i> {{child.lib}}</a>
                <a *ngSwitchDefault class="nav-link nav-dropdown-toggle" href="#"><i [ngStyle]="{'color': child.color}" ngClass="{{child.icon}}"></i> {{child.lib}}</a>
              </div>
              <ul *ngIf="child.childs" class="nav-dropdown-items">
                <li *ngFor="let uChild of child.childs" class="nav-item">
                  <a class="nav-link" routerLinkActive="active" [routerLink]="[uChild.route]"><i  [ngStyle]="{'color': child.color}"  ngClass="{{uChild.icon}}"></i> {{uChild.lib}}</a>
                </li>
              </ul>
            </li>
          </div>
          `
})
export class MenuGroupComponent {
  //
  @Input() menuGroupItem: any;
  private isCollapsed:boolean = true;
  private iconClass:string = "icon-arrow-left-circle";
  //
  private switchCollapse()
  {
    this.isCollapsed = !this.isCollapsed;
    switch (this.isCollapsed)
    {
      case true:
        this.iconClass = "icon-arrow-left-circle";
        break;
      default:
        this.iconClass = "icon-arrow-down-circle";
    }
  }
  constructor() {
    
  }
  //
}
