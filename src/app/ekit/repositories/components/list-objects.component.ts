import { Component, OnInit, Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { ReposService } from '../services/repositories.service';
import { SharedService } from '../../../shared/services/shared.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ModRepoListComponent } from 'app/ekit/repositories/modals/modRepoList/mod-repo-list.component';

@Component({
    selector:'list-objects',
    styleUrls: ['list-objects.scss'],
  templateUrl: 'list-objects.component.html',
  providers: [ ReposService ]
})
export class ListObjectsComponent implements OnInit {

    @Input() gabIn: any;

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

  constructor(private reposService:ReposService,private router: Router,private sharedService:SharedService,
    private route: ActivatedRoute,private modalService: NgbModal) {
    console.log(this.gabIn);
  }

  checkMe(id) {
    alert(id);
  }

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
    this.reposService.getAll(this.gabIn.data.repo,this.tabOptions.currentPage, filters)
        .subscribe(
          data  => this.dataPageLoaded(data),
          error =>  console.log(error));
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
          data  => this.loadPage(this.filters),
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
  import() {
    
    this.modalService.open(ModRepoListComponent,).result.then((result) => {
      //this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
}
