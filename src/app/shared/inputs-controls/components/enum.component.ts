import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Icomp } from 'app/icomp';

@Component({
  selector: 'enuminputcomponent',
  templateUrl: 'enum.component.html',
})
export class EnumInputComponent implements OnInit, Icomp {
  @Input() value: any;
  @Output() valueChange = new EventEmitter<Object>();
  @Input() model: string;

  private datas:any = [];

  inputValueChange(event)
  {
    this.valueChange.emit({ value:event, model:this.model});
    //new Date(1999,9,9,event.hour,event.minute,event.second,0)
  }
  constructor(private sharedService:SharedService) {
    
  }
  //
  ngOnInit(): void {
    //
    this.sharedService.getDatatypes()
        .subscribe(
          data  => this.datas = data,
          error =>  console.log(error));
  }
}
