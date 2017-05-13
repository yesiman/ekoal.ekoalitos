import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'complabelcomponent',
  templateUrl: 'comp-label.component.html',
})
export class CompLabelComponent {
  @Input() label: string;
  @Input() tooltip: string;
  

  constructor() {
    
  }
}
