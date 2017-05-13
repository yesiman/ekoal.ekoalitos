import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'dateinputcomponent',
  templateUrl: 'date.component.html',
})
export class DateInputComponent {
  @Input() value: any;
  @Output() valueChange = new EventEmitter<Object>();
@Input() model: string;
  private inputValueChange(event)
  {
    this.valueChange.emit({ value:this.value, model:this.model});
  }
  constructor() {
    
  }
}
