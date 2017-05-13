import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'booleaninputcomponent',
  templateUrl: 'boolean.component.html',
})
export class BooleanInputComponent {
  @Input() value: boolean;
  @Output() valueChange = new EventEmitter<Object>();
  @Input() model: string;
  private inputValueChange(event)
  {
    this.valueChange.emit({ value:event, model:this.model});
  }
  constructor() {
    
  }
}
