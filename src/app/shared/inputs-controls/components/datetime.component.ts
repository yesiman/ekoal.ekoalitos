import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'datetimeinputcomponent',
  templateUrl: 'datetime.component.html',
})
export class DateTimeInputComponent {
  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();

  private inputValueChange()
  {
    this.valueChange.emit(this.value);
  }
  constructor() {
    
  }
}
