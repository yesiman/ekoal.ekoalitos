import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'dateinputcomponent',
  templateUrl: 'date.component.html',
})
export class DateInputComponent {
  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();

  private inputValueChange()
  {
    this.valueChange.emit(this.value);
  }
  constructor() {
    
  }
}
