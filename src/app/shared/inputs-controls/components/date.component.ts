import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'dateinputcomponent',
  templateUrl: 'date.component.html',
})
export class DateInputComponent {
  @Input() value: any;
  @Output() valueChange = new EventEmitter<Object>();
@Input() model: string;
private inputValueChange(event,val)
{
  this.valueChange.emit({ value:event, model:this.model});
}
  constructor() {
    
  }
}
