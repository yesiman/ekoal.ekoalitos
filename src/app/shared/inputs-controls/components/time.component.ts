import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Icomp } from 'app/icomp';

@Component({
  selector: 'timeinputcomponent',
  templateUrl: 'time.component.html',
})
export class TimeInputComponent implements Icomp {
  @Input() value: any;
  @Output() valueChange = new EventEmitter<Object>();
  @Input() model: string;
  inputValueChange(event)
  {
    this.valueChange.emit({ value:event, model:this.model});
    //new Date(1999,9,9,event.hour,event.minute,event.second,0)
}
  constructor() {
    
  }
}
