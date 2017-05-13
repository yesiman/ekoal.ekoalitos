import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'datetimeinputcomponent',
  templateUrl: 'datetime.component.html',
})
export class DateTimeInputComponent {
  @Input() value: Date;
  @Output() valueChange = new EventEmitter<Object>();
@Input() model: string;
  private inputValueChange(event)
  {
    this.valueChange.emit({ value:new Date(1999,9,9,9,9,9,9), model:this.value});
  }
  constructor() {
    
  }
}
