import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { LaddaModule } from 'angular2-ladda';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { WidgetProjectDashComponent }  from '../shared/widget-project-dash.component';
import { ProjectsDashboardComponent } from './dashboard/dashboard.component';

import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  imports: [
    NgbModule,
    TabsModule,LaddaModule,
    ProjectsRoutingModule,
    CommonModule,FormsModule,
  ],
  declarations: [ WidgetProjectDashComponent,ProjectsDashboardComponent ]
})
export class ProjectsDashboardModule { }
