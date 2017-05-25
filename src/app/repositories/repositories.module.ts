import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { LaddaModule } from 'angular2-ladda';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { CompLabelComponent } from "../shared/inputs-controls/common/comp-label.component" 
import { LongTextInputComponent } from '../shared/inputs-controls/components/longtext.component';
import { TextInputComponent } from '../shared/inputs-controls/components/text.component';
import { DateInputComponent } from '../shared/inputs-controls/components/date.component';
import { DateTimeInputComponent } from '../shared/inputs-controls/components/datetime.component';
import { BooleanInputComponent } from '../shared/inputs-controls/components/boolean.component';
import { TimeInputComponent } from '../shared/inputs-controls/components/time.component';
import { EnumInputComponent } from '../shared/inputs-controls/components/enum.component';
import { FileInputComponent } from '../shared/inputs-controls/components/file.component';

import { ReposEditComponent } from './components/repositories-edit.component';
import { ReposListComponent } from './components/repositories-list.component';



import { ReposRoutingModule } from './repositories-routing.module';

@NgModule({
  imports: [
    NgbModule,
    LaddaModule,
    ReposRoutingModule,
    CommonModule,FormsModule,
  ],
  declarations: [ CompLabelComponent,LongTextInputComponent,
  TextInputComponent,
  DateInputComponent,
  DateTimeInputComponent,
  BooleanInputComponent,
  TimeInputComponent,
  EnumInputComponent,
  FileInputComponent,
  ReposEditComponent,
  ReposListComponent ]
})
export class ReposModule { }
