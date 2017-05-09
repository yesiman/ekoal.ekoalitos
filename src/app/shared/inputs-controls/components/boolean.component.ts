import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'booleaninputcomponent',
  templateUrl: 'boolean.component.html',
})
export class BooleanInputComponent {
  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();

  private inputValueChange()
  {
    this.valueChange.emit(this.value);
  }
  constructor() {
    
  }
}
