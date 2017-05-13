import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'fileinputcomponent',
  templateUrl: 'file.component.html',
})
export class FileInputComponent {
  @Input() value: string;
  @Output() valueChange = new EventEmitter<Object>();

  private inputValueChange(event)
  {
    let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
    let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
    let files: FileList = target.files;
    //this.file = files[0];
    
    this.valueChange.emit(files);
  }
  constructor() {
    
  }
}
