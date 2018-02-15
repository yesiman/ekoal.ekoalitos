import { Component, OnInit,ViewChild } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { ReposService } from '../services/repositories.service';
import { SharedService } from '../../../shared/services/shared.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ModRepoListComponent } from 'app/ekit/repositories/modals/modRepoList/mod-repo-list.component';

@Component({
selector:'repositories-edit',
styleUrls: ['repositories-edit.scss'],
  templateUrl: 'repositories-edit.component.html',
  providers: [ ReposService ]
})
export class ReposEditComponent implements OnInit {
    @ViewChild('loProps') loProps;
  private params:any;
  private propsParams:any;
  private okey:any;
  gabProps:any;
  //
  item:any = {};
  saving:boolean = false;
  test:String;
  
  constructor(private reposService:ReposService,private router: Router,private sharedService:SharedService,private route: ActivatedRoute,private modalService: NgbModal) {
    //GET OBJECT ID TO RETRIEVED
    //PASSED AS PARAMETER
    this.route
        .params
        .subscribe(params => {
            this.okey = params['okey'];
            this.params = this.reposService.getStdMenuItemChildsParams(this.router.url,"edit");
            this.propsParams = this.reposService.getStdMenuItemChildsParams("/properties/","edit");
            //console.log()
            //IF IN GABARIT !
            
        });
  }

  initPrototypeMode(datas) {
    this.gabProps = {
        data: {
            datas:datas,
            repo:"properties",
            props:this.propsParams.props.filter(p => p.showList === true),
            proto:"x"
        },
        checkable:false,
        canImport:true,
        canExport:false,
        editable:false,
        removable:true
    }
  }
  ngOnInit(): void {
    //
    if (this.okey != "-1")
    {
        //LOAD OBJECT IF EXIST
        this.reposService.get(this.params.repoName,this.okey)
            .subscribe(
                data  => {
                    this.item = data;
                    this.initPrototypeMode(this.item.props);
                },
                error =>  console.log(error));
    }
    else {
        this.initPrototypeMode([]);
    }
  }
  private backValueChange(event)
    {
        alert("kmlk");
      //this.valueChange.emit(this.sels);
    }
  private onDataSave()
  {
    this.saving = false;
  }

  private s3SignOk(data,file)
  {
    console.log("file",file);
    console.log("data",data);
     this.upload(file,data.signedRequest,"");
  }

  private inpValueChange(value)
  {
      this.item[value.model] = value.value;
      
    //console.log("Files",value);
    //this.makeFileRequest(this.sharedService.apiBasUrl + "awsbucket/signs3/?file-name=16&file-type=image/jpeg",value)
    //  .subscribe(
    //      data  => this.s3SignOk(data,value[0]),
    //      error => console.log(error));
  }
    
  upload(file, signedRequest, url) {
      return Observable.fromPromise(new Promise((resolve, reject) => {
          let xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function () {
              if (xhr.readyState === 4) {
                  if (xhr.status === 200) {
                      resolve({ok:true})
                  } else {
                      reject({ok:false})
                  }
              }
          }
          xhr.upload.onprogress = (event) => {
            console.log(Math.round(event.loaded / event.total * 100))
            
            //this.progress = Math.round(event.loaded / event.total * 100);

            //this.progressObserver.next(this.progress);
          };
          xhr.open("PUT", signedRequest);
          xhr.send(file);
      }));
  }

  makeFileRequest(url: string, files: Array<File>) {
      return Observable.fromPromise(new Promise((resolve, reject) => {
          let formData: any = new FormData()
          let xhr = new XMLHttpRequest()
          for (let file of files) {
            console.log(file.name);
              formData.append("uploads[]", file, file.name)
          }
          xhr.onreadystatechange = function () {
              if (xhr.readyState === 4) {
                  if (xhr.status === 200) {
                      resolve(JSON.parse(xhr.response))
                  } else {
                      reject(xhr.response)
                  }
              }
          }
          xhr.open("POST", url, true)
          xhr.setRequestHeader("x-access-token",this.sharedService.user.token);
          xhr.send(formData)
      }));
  }

  valid(){
    //this.makeFileRequest(this.sharedService.apiBasUrl + "awsbucket/signs3",null);
    //console.log(this.item);
    this.saving = true;
    //ID MODE PROTOTYPE
    if (this.params.repoName == 'prototypes')
    {
        this.item.props = this.gabProps.data.datas;//.getDatas();
    }
    this.reposService.add(this.params.repoName, this.item)
      .subscribe(
        data  => this.onDataSave(),
        error => this.onDataSave());
  }
}
