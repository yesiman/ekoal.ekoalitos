import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';



import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromPromise';

import { ReposService } from '../services/repositories.service';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  templateUrl: 'repositories-edit.component.html',
  providers: [ ReposService ]
})
export class ReposEditComponent implements OnInit {

  private params:any;
  private okey:any;
  item:any = {};
  saving:boolean = false;
  test:String;

  constructor(private reposService:ReposService,private router: Router,private sharedService:SharedService,private route: ActivatedRoute) {
    //
    this.route
    .params
    .subscribe(params => {
        this.okey = params['okey'];
        this.params = this.reposService.getStdMenuItemChildsParams(this.router.url,"edit");
        
    });
  }

  ngOnInit(): void {
    //
    
    
    if (this.okey != "-1")
    {
        this.reposService.get(this.params.repoName,this.okey)
        .subscribe(
          data  => this.item = data,
          error =>  console.log(error));
    }
    
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
    this.reposService.add(this.params.repoName, this.item)
      .subscribe(
        data  => this.onDataSave(),
        error => this.onDataSave());
  }
}
