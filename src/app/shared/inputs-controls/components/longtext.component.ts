import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'longtextinputcomponent',
  templateUrl: 'longtext.component.html',
})
export class LongTextInputComponent {
  @Input() value: string;
  @Output() valueChange = new EventEmitter<Object>();
@Input() model: string;
  private inputValueChange(event)
  {
    this.valueChange.emit({ value:this.value, model:this.model});
  }

  constructor() {
    //this.valueChange = new EventEmitter<string>();
  }
}
