import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule }    from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import { CoreUIAppComponent } from '../app/core-ui.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';



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
import { CookieService } from 'ng2-cookies';
import { ReposService } from 'app/ekit/repositories/services/repositories.service';
import { FormsModule } from '@angular/forms';
 
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }}),
    NgbModule.forRoot(),LaddaModule,
    ChartsModule,HttpModule
  ],
  declarations: [
    AppComponent,
    CoreUIAppComponent,
    LoginComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    MenuGroupComponent,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },SharedService,CookieService,ReposService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
