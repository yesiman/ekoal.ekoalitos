import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Icomp } from './common/icomp';



@Component({
  selector: 'textinputcomponent',
  templateUrl: 'text.component.html',
})
export class TextInputComponent implements Icomp {
  @Input() value: any;
  @Input() model: string;
  @Output() valueChange = new EventEmitter<Object>();
  

  inputValueChange(event)
  {
    this.valueChange.emit({ value:this.value, model:this.model});
  }
  constructor() {
    
  }
}
