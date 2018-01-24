import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Icomp } from 'app/icomp';

@Component({
  selector: 'dateinputcomponent',
  templateUrl: 'date.component.html',
})
export class DateInputComponent implements Icomp {
  @Input() value: any;
  @Output() valueChange = new EventEmitter<Object>();
@Input() model: string;
inputValueChange(event)
{
  this.valueChange.emit({ value:event, model:this.model});
}
  constructor() {
    
  }
}
