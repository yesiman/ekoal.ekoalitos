import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { ReposService } from '../services/repositories.service';
import { SharedService } from '../../../shared/services/shared.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ModRepoListComponent } from 'app/ekit/repositories/modals/modRepoList/mod-repo-list.component';
import { ViewChild } from '@angular/core/src/metadata/di';

@Component({
    selector:'list-objects',
    styleUrls: ['list-objects.scss'],
  templateUrl: 'list-objects.component.html',
  providers: [ ReposService ]
})
export class ListObjectsComponent implements OnInit {
  
    @Input() gabIn: any;
    @Input() sels:any = [];
    tabOptions:any = {
        collectionSize:0,
        currentPage:1
      };
      //
      items:any = [];
      itemsLength:number = 0;
      //
      private filters:any = {
        text:""
      };
      //
  constructor(private reposService:ReposService,private router: Router,private sharedService:SharedService,
    private route: ActivatedRoute,private modalService: NgbModal) {
    
  }
  ngOnInit(): void {
    //
    //this.params = this.reposService.getStdMenuItemChildsParams(this.router.url,"list");
    //this.propsList = this.params.props.filter(p => p.showList === true);
    this.loadPage();
  }
  onPageChange(event){
    this.tabOptions.currentPage = event;
    this.loadPage();
  }
  
  public getDatas() {
    return this.sels;
  }

  //User check lines, keep them 
  //for parent controller return 
  checkMe(it) {
    if (this.sels.indexOf(it)>-1) {
      this.sels.splice(this.sels.indexOf(it), 1);
      //delete this.sels[id];
    }
    else {
      this.sels.push(it);
    }
    
  }

  
  
  //
  loadPage()
  {
    
    if (this.gabIn.data.datas)
    {
      //IDs GIVEN BY PARENT
      //LOad from ids and bind
      
      this.filters.ids = this.gabIn.data.datas;
      this.reposService.getAll(this.gabIn.data.repo,this.tabOptions.currentPage, {filters:this.filters})
        .subscribe(
          data  => this.dataPageLoaded(data),
          error =>  console.log(error));
    }
    else {
      
      this.reposService.getAll(this.gabIn.data.repo,this.tabOptions.currentPage, {filters:this.filters})
        .subscribe(
          data  => this.dataPageLoaded(data),
          error =>  console.log(error));
    }
  }
  //
  //
  edit(it)
  {
    it.editClicked = true;
  }
  remove(it)
  {
    it.remClicked = true;
    this.reposService.remove(this.gabIn.data.repo,it._id)
        .subscribe(
          data  => this.loadPage(),
          error =>  console.log(error));
  }
  //
  dataPageLoaded(datas)
  {
    this.items = datas.items;
    this.itemsLength = 
      this.tabOptions.collectionSize = 
      datas.count; 

      console.log("this.items",this.items);
      console.log("this.itemsLength",this.itemsLength);
  }
  

  import() {
    this.modalService.open(ModRepoListComponent).result.then((result) => {
      if (!this.gabIn.data.datas){
        this.gabIn.data.datas = result;  
      }
      else {
        this.gabIn.data.datas = this.gabIn.data.datas.concat(result);
      }
      this.loadPage();
    }, (reason) => {  
      console.log(reason);
    });
    
  }
  
}
