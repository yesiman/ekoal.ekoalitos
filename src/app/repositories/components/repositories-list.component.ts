import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {URLSearchParams, QueryEncoder,RequestOptions} from '@angular/http';
import { ReposService } from '../services/repositories.service';

@Component({
  templateUrl: 'repositories-list.component.html',
  providers: [ ReposService ]
})
export class ReposListComponent implements OnInit {
  //
  private datas:any = [];
  private params:any;
  private filters = {
    text:""
  };
  //
  constructor(private reposService:ReposService,private router: Router) {}
  //
  filtersChange()
  {
    this.reposService.getAll(this.params.repoName, {filters:this.filters})
        .subscribe(
          data  => this.datas = data,
          error =>  console.log(error));
  }
  //
  ngOnInit(): void {
    //
    this.params = this.reposService.getStdMenuItemChildsParams(this.router.url,"list");
    this.reposService.getAll(this.params.repoName, this.filters)
        .subscribe(
          data  => this.datas = data,
          error =>  console.log(error));
  }
}
