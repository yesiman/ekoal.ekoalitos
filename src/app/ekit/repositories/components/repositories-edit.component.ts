import { Component, OnInit,ViewChild } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import {Observable} from 'rxjs/Rx';

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
    params:any;
propsParams:any;
  private okey:any;
  private pkey:any;
  gabProps:any;
  propsNb:Number = 0;
  //
  item:any = {};
  proto:any = {};
  saving:boolean = false;
  test:String;
  
  constructor(private reposService:ReposService,private router: Router,
    private sharedService:SharedService,private route: ActivatedRoute,private modalService: NgbModal) {
    
    //GET OBJECT ID TO RETRIEVED
    //PASSED AS PARAMETER
    this.route
        .params
        .subscribe(params => {
            this.okey = params['okey'];
            this.pkey = params['pkey'];
            this.params = this.reposService.getStdMenuItemChildsParams(this.router.url,"edit");
            this.propsParams = this.reposService.getStdMenuItemChildsParams("/properties/","edit");
            //console.log()
            //IF IN GABARIT !
            
        });
  }

  initPrototypeMode(datas) {
    if (this.params.repoName == 'prototypes')
    {
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
  }
  ngOnInit(): void {
    if (this.okey)
    {
        //LOAD OBJECT IF EXIST
        this.reposService.get(this.params.repoName,this.okey)
            .subscribe(
                data  => {
                    this.item = data;
                    this.propsNb = this.item.props.length;
                    this.initPrototypeMode(this.item.props);
                    if (this.params.repoName == 'objects')
                    {
                        //On doit loader le proto
                        this.loadProto(this.item.protoid);
                    }
                },
                error =>  console.log(error));
    }
    else {
        //ID MODE NEW PROTO
        this.initPrototypeMode([]);
        
        if (this.pkey)
        {
            this.loadProto(this.pkey);
        }
    }
  }
  loadProto(pkey) {
    //IF PKEY ALOORS DE CREATION NOUVEL OBJET
    //GET PROTO
    this.reposService.get("prototypes",pkey)
        .subscribe(
            data  => {
                this.proto = data;
                //LOAD PROPS ET GENERATION DU GABARIT
                this.reposService.getAll("properties",1,{filters:{
                    text:"",
                    ids:this.proto.props
                }})
                    .subscribe(
                        data  => {
                            //LOAD PROPS ET GENERATION DU GABARIT
                            var tmp:any;
                            tmp = data;
                            tmp = tmp.items;
                            //GENERATION PROPS POUR FORM
                            var props = [];
                            for (var i = 0;i < tmp.length;i++)
                            {
                                var type = "";
                                switch (tmp[i].type)
                                {
                                    case "5912f7034c3181110079e09e":
                                        type = "text";
                                        break;
                                    case "5912f7194c3181110079e09f":
                                        type = "longtext";
                                        break;
                                    case "5912f6f74c3181110079e09f":
                                        type = "time";
                                        break;
                                    case "5912f8144c3181110079e0a4":
                                        type = "boolean";
                                        break;
                                    case "5912f7284c3181110079e0a1":
                                        type = "file";
                                        break;
                                    case "5912f82d4c3181110079e0a6":
                                        type = "enum";
                                        break;
                                    case "5a782af376657811002d0416":
                                        type = "date";
                                        break;
                                    default:
                                        type = "";
                                        break;
                                }
                                props.push({
                                    type:type,lib:tmp[i].lib,tooltip:tmp[i].desc,model:tmp[i]._id,showList:true
                                });
                            }
                            this.params.props = props;
                        },
                        error =>  console.log(error));
            },
            error =>  console.log(error));
  }
  private backValueChange(event)
    {
        
      //this.valueChange.emit(this.sels);
    }
  private onDataSave()
  {
    this.saving = false;
  }

  private s3SignOk(data,files)
  {
      var i=0;
    //console.log("file",file);
    for (var file of files) {
        i++;
        console.log("nufile-"+i);
        this.upload(file,data.signedRequest,"");
    }
    //console.log("data",data);
     this.upload(file,data.signedRequest,"");
  }
  getModelType(mid) {
    for (var i = 0;i < this.params.props.length;i++)
    {
        if (this.params.props[i].model == mid)
        {
            return this.params.props[i].type;
        }
    }
  }
  private inpValueChange(value)
  {
    this.item[value.model] = value.value;  
    if (this.getModelType(value.model) == "file")
    {
    //console.log("value.value(0)",value.value.FileList[0]);
    //Generate GUID for file
    //Get filte-type
    this.makeFileRequest(this.sharedService.apiBasUrl + "awsbucket/signs3/?file-name=11&file-type=image/png",value.value)
        .subscribe(
            data  => this.s3SignOk(data,value.value),
            error => console.log(error));
    }
    //
  }
    
  upload(file, signedRequest, url) {
      return Observable.fromPromise(new Promise((resolve, reject) => {
          var xhr = new XMLHttpRequest();
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
      console.log("url",url);
      console.log("files",files);
      return Observable.fromPromise(new Promise((resolve, reject) => {
        var formData: any = new FormData()
        var xhr = new XMLHttpRequest()
            console.log("befLoop");
          for (var file of files) {
              formData.append("uploads[]", file, file.name)
              console.log("inLoop");
          }
          console.log("aftLoop");
          xhr.onreadystatechange = function () {
              if (xhr.readyState === 4) {
                  if (xhr.status === 200) {
                      console.log("test",JSON.parse(xhr.response));
                      resolve(JSON.parse(xhr.response))
                  } else {
                      reject(xhr.response)
                  }
              }
          }
          xhr.open("GET", url, true)
          xhr.setRequestHeader("x-access-token",this.sharedService.user.token);
          xhr.send(formData)
      }));
  }
  addObject() {
    this.router.navigate(['/objects/new/' + this.item._id]);
  }
  valid(){
    //this.makeFileRequest(this.sharedService.apiBasUrl + "awsbucket/signs3",null);
    //console.log(this.item);
    this.saving = true;
    //ID MODE PROTOTYPE
    if (this.params.repoName == 'prototypes')
    {
        if (this.gabProps && this.gabProps.data && this.gabProps.data.datas)
        {
            this.item.props = this.gabProps.data.datas;//.getDatas();
        }
        else {
            this.item.props = [];
        }
    }
    if ((this.params.repoName == 'objects') && (this.pkey)) {
        //SI NOUVEL OBJECT ON STOCK LE TYPE PROTO
        this.item.protoid = this.pkey;
    }
    this.reposService.add(this.params.repoName, this.item)
      .subscribe(
        data  => this.onDataSave(),
        error => this.onDataSave());
  }
}
