import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { LaddaModule } from 'angular2-ladda';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { VizComponent } from './components/viz.component';



import { VizRoutingModule } from './viz-routing.module';

@NgModule({
  imports: [
    NgbModule,
    VizRoutingModule,
  ],
  declarations: [ 
  VizComponent ]
})
export class VizModule { }
