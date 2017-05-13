import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule }    from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ng2-bootstrap/dropdown';

import { TooltipModule } from 'ng2-bootstrap/tooltip';



import { TabsModule } from 'ng2-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
import { LaddaModule } from 'angular2-ladda';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';
import { MenuGroupComponent } from './shared/menu-group.component';
// Routing Module
import { AppRoutingModule } from './app.routing';
// Layouts
import { LoginComponent } from './login/components/login.component';
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

import { SharedService } from './shared/services/shared.service';
 

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),LaddaModule,TooltipModule,
    ChartsModule,HttpModule,FormsModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    MenuGroupComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },SharedService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
