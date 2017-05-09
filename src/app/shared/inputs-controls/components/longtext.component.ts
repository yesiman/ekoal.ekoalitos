import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'longtextinputcomponent',
  templateUrl: 'longtext.component.html',
})
export class LongTextInputComponent {
  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();

  private inputValueChange()
  {
    this.valueChange.emit(this.value);
  }

  constructor() {
    //this.valueChange = new EventEmitter<string>();
  }
}
