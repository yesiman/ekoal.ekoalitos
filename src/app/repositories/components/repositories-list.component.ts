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
  private items:any = [];
  private itemsLength:number = 0;
  //
  private params:any;
  private tabOptions:any = {
      collectionSize:0,
      currentPage:1
    };
  private filters = {
    text:""
  };
  //
  constructor(private reposService:ReposService,private router: Router) {}
  //
  onPageChange(event){
    this.tabOptions.currentPage = event;
    this.loadPage({filters:this.filters});
  }
  //
  loadPage(filters)
  {
    this.reposService.getAll(this.params.repoName,this.tabOptions.currentPage, filters)
        .subscribe(
          data  => this.dataPageLoaded(data),
          error =>  console.log(error));
  }
  //
  dataPageLoaded(datas)
  {
    this.items = datas.items;
    this.itemsLength = 
      this.tabOptions.collectionSize = 
      datas.count; 
  }
  //
  edit(id)
  {
    alert("edit"+id);
  }
  remove(id)
  {
    alert("remove"+id);
  }
  //
  filtersChange()
  {
    this.loadPage({filters:this.filters});
  }
  //
  ngOnInit(): void {
    //
    this.params = this.reposService.getStdMenuItemChildsParams(this.router.url,"list");
    this.loadPage(this.filters);
  }
}
