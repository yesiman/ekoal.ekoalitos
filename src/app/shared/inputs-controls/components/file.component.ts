import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Icomp } from 'app/icomp';

@Component({
  selector: 'fileinputcomponent',
  templateUrl: 'file.component.html',
})
export class FileInputComponent implements Icomp {
  @Input() value: any;
  @Output() valueChange = new EventEmitter<Object>();
@Input() model: string;
  inputValueChange(event)
  {
    let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
    let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
    let files: FileList = target.files;
    //this.file = files[0];
    
    this.valueChange.emit({ value:files, model:this.model});
  }
  constructor() {
    
  }
}
