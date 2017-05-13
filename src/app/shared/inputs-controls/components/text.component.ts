import { Component,Input,Output,EventEmitter } from '@angular/core';



@Component({
  selector: 'textinputcomponent',
  templateUrl: 'text.component.html',
})
export class TextInputComponent {
  @Input() value: string;
  @Output() valueChange = new EventEmitter<Object>();
  @Input() model: string;

  private inputValueChange(event)
  {
    this.valueChange.emit({ value:this.value, model:this.model});
  }
  constructor() {
    
  }
}
