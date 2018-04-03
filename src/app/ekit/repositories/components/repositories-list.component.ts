import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {URLSearchParams, QueryEncoder,RequestOptions} from '@angular/http';
import { ReposService } from '../services/repositories.service';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  templateUrl: 'repositories-list.component.html',
  styleUrls: ['repositories-list.scss'],
  providers: [ ReposService ]
})
export class ReposListComponent implements OnInit {
  //
  private items:any = [];
  private itemsLength:number = 0;
  //
  params:any;
  private propsList:any;
  private tabOptions:any = {
      collectionSize:0,
      currentPage:1
    };
    projectKey:String;
  private filters:any = {
    text:""
  };
  gab:any = {
    data: {
        repo:"objects",
        proto:"x"
    },
    checkable:false,
    canImport:true,
    canExport:true,
    editable:true,
    removable:true
  }
  //
  constructor(private reposService:ReposService,private router: Router,private route: ActivatedRoute,public shar:SharedService) {
    this.route
        .params
        .subscribe(params => {
            this.projectKey = params['projectKey'];
        });
      
  }
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
  edit(it)
  {
    it.editClicked = true;
  }
  remove(it)
  {
    it.remClicked = true;
    this.reposService.remove(this.params.repoName,it._id)
        .subscribe(
          data  => this.loadPage(this.filters),
          error =>  console.log(error));
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
    this.propsList = this.params.props.filter(p => p.showList === true);
    this.gab = {
      data: {
          repo:this.params.repoName,
          props:this.propsList,
          proto:"x",
          datas:(this.shar.currentProject?this.shar.currentProject[this.params.repoName]:null)
      },
      checkable:false,
      canImport:true,
      canExport:true,
      editable:true,
    removable:true
    }
    this.shar.currentRepo = this.params.repoName;
    console.log((this.shar.currentProject?(this.shar.currentProject[this.params.repoName]?this.shar.currentProject[this.params.repoName]:this.shar.currentProject._id):null));
    //this.loadPage(this.filters);
  }
}
