import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Icomp } from 'app/icomp';



@Component({
  selector: 'textinputcomponent',
  templateUrl: 'text.component.html',
})
export class TextInputComponent implements Icomp {
  @Input() value: any;
  @Output() valueChange = new EventEmitter<Object>();
  @Input() model: string;

  inputValueChange(event)
  {
    this.valueChange.emit({ value:this.value, model:this.model});
  }
  constructor() {
    
  }
}
