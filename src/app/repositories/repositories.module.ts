import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { LaddaModule } from 'angular2-ladda';

import { LongTextInputComponent } from '../shared/inputs-controls/components/longtext.component';
import { TextInputComponent } from '../shared/inputs-controls/components/text.component';
import { DateInputComponent } from '../shared/inputs-controls/components/date.component';
import { DateTimeInputComponent } from '../shared/inputs-controls/components/datetime.component';
import { BooleanInputComponent } from '../shared/inputs-controls/components/boolean.component';
import { TimeInputComponent } from '../shared/inputs-controls/components/time.component';

import { ReposEditComponent } from './components/repositories-edit.component';
import { ReposListComponent } from './components/repositories-list.component';

import { ReposRoutingModule } from './repositories-routing.module';

@NgModule({
  imports: [
    TabsModule,LaddaModule,
    ReposRoutingModule,
    CommonModule,FormsModule,
  ],
  declarations: [ LongTextInputComponent,
  TextInputComponent,
  DateInputComponent,
  DateTimeInputComponent,
  BooleanInputComponent,
  TimeInputComponent,
  ReposEditComponent,
  ReposListComponent ]
})
export class ReposModule { }
