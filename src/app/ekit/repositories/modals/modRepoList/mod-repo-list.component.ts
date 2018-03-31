import { Component, OnInit, Input } from '@angular/core';
import { ReposService } from '../../services/repositories.service';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { SharedService } from '../../../../shared/services/shared.service';

@Component({
  selector: 'mod-repo-list',
  styleUrls: ['mod-repo-list.scss'],
  templateUrl: 'mod-repo-list.component.html'
})
export class ModRepoListComponent  {
  sels:any = [];
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
constructor(private reposService:ReposService,private router: Router, public activeModal: NgbActiveModal,public shar:SharedService) {
  //
  var params:any = this.reposService.getStdMenuItemChildsParams("/"+this.shar.currentRepo+"/","list");
  var propsList = params.props.filter(p => p.showList === true);
  //
  
  this.gab = {
    data: {
        repo:this.shar.currentRepo,
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
private childSelChange(data)
{
    console.log("jkljkl",data);
    //this.onChildSelChange.emit({ sels:this.checkedItems});
}
  //
  ngOnInit(): void {
    //
    //this.params = this.reposService.getStdMenuItemChildsParams(this.router.url,"list");
    //this.propsList = this.params.props.filter(p => p.showList === true);
    //this.loadPage(this.filters);
  }
  onPageChange(event){
    this.tabOptions.currentPage = event;
   
  }
  
  closeMe() {
    this.activeModal.close(this.sels);
  }
}
