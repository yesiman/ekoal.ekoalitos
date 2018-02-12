import { Component, OnInit } from '@angular/core';
import { ReposService } from '../../services/repositories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mod-repo-list',
  styleUrls: ['mod-repo-list.scss'],
  templateUrl: 'mod-repo-list.component.html'
})
export class ModRepoListComponent  {
  private tabOptions:any = {
    collectionSize:0,
    currentPage:1
  };
  //
  private items:any = [];
  private itemsLength:number = 0;
  //
  private filters = {
    text:""
  };
  gab:any;
constructor(private reposService:ReposService,private router: Router) {
  //
  var params:any = this.reposService.getStdMenuItemChildsParams("/datatypes/","list");
  var propsList = params.props.filter(p => p.showList === true);
  //
  this.gab = {
    data: {
        repo:"properties",
        props:propsList,
        proto:"x"
    },
    checkable:true,
    canImport:false,
    canExport:false,
    editable:false
  }
  //
}
  
  //
  ngOnInit(): void {
    //
    //this.params = this.reposService.getStdMenuItemChildsParams(this.router.url,"list");
    //this.propsList = this.params.props.filter(p => p.showList === true);
    this.loadPage(this.filters);
  }
  onPageChange(event){
    this.tabOptions.currentPage = event;
    this.loadPage({filters:this.filters});
  }
  //
  loadPage(filters)
  {
    this.reposService.getAll("datatypes",this.tabOptions.currentPage, filters)
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
}
