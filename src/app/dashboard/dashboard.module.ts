import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
var CKEDITOR_BASEPATH = '../node_modules/ckeditor/';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    DashboardRoutingModule,CKEditorModule,FormsModule
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
