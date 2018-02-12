import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { LaddaModule } from 'angular2-ladda';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { CompLabelComponent } from "../inputs/common/comp-label.component" 
import { LongTextInputComponent } from '../inputs/longtext.component';
import { TextInputComponent } from '../inputs/text.component';
import { DateInputComponent } from '../inputs/date.component';
import { DateTimeInputComponent } from '../inputs/datetime.component';
import { BooleanInputComponent } from '../inputs/boolean.component';
import { TimeInputComponent } from '../inputs/time.component';
import { EnumInputComponent } from '../inputs/enum.component';
import { FileInputComponent } from '../inputs/file.component';

import { ReposEditComponent } from './components/repositories-edit.component';
import { ReposListComponent } from './components/repositories-list.component';



import { ReposRoutingModule } from './repositories-routing.module';
import { ModRepoListComponent } from 'app/ekit/repositories/modals/modRepoList/mod-repo-list.component';
import { ListObjectsComponent } from 'app/ekit/repositories/components/list-objects.component';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';

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
    ReposListComponent,ModRepoListComponent,ListObjectsComponent,
  ],
  entryComponents: [
      ModRepoListComponent,
  ],
})
export class ReposModule { }
