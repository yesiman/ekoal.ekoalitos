import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Icomp } from 'app/icomp';
@Component({
  selector: 'booleaninputcomponent',
  templateUrl: 'boolean.component.html',
})
export class BooleanInputComponent implements Icomp  {
  @Input() value: boolean;
  @Output() valueChange = new EventEmitter<Object>();
  @Input() model: string;
  inputValueChange(event)
  {
    this.valueChange.emit({ value:event, model:this.model});
  }
  constructor() {
    
  }
}
