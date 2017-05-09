import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReposService } from '../services/repositories.service';

@Component({
  templateUrl: 'repositories-edit.component.html',
  providers: [ ReposService ]
})
export class ReposEditComponent implements OnInit {

  private params:any;
  item:any;
  saving:boolean = false;
  test:String;

  constructor(private reposService:ReposService,private router: Router) {
    this.item = { lib: "jklkm"};
  }

  ngOnInit(): void {
    //
    this.params = this.reposService.getStdMenuItemChildsParams(this.router.url,"edit");
  }

  private onDataSave()
  {
    this.saving = false;
  }
  private inpValueChange(value)
  {
    this.item.lib = value;
  }
  valid(){
    console.log(this.item);
    this.saving = true;
    this.reposService.add(this.params.repoName, this.item)
      .subscribe(
        data  => this.onDataSave(),
        error => this.onDataSave());
  }
}
