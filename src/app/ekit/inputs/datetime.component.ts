import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Icomp } from './common/icomp';

@Component({
  selector: 'datetimeinputcomponent',
  templateUrl: 'datetime.component.html',
})
export class DateTimeInputComponent implements Icomp {
  @Input() value: any;
  @Output() valueChange = new EventEmitter<Object>();
@Input() model: string;
  inputValueChange(event)
  {
    this.valueChange.emit({ value:new Date(1999,9,9,9,9,9,9), model:this.value});
  }
  constructor() {
    
  }
}
