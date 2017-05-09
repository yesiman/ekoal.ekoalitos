import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'timeinputcomponent',
  templateUrl: 'time.component.html',
})
export class TimeInputComponent {
  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();

  private inputValueChange()
  {
    this.valueChange.emit(this.value);
  }
  constructor() {
    
  }
}
