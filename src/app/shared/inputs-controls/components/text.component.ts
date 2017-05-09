import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'textinputcomponent',
  templateUrl: 'text.component.html',
})
export class TextInputComponent {
  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();

  private inputValueChange()
  {
    this.valueChange.emit(this.value);
  }
  constructor() {
    
  }
}
