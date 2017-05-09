import { Injectable }              from '@angular/core';
import { Http, Response, Headers, RequestOptions }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { SharedService } from '../../shared/services/shared.service';

@Injectable()
export class ReposService {
  //TODO ADD GLOBAL BASE PATH SOMEWHERE
  private baseUrl = 'https://ekoalit-os-srv.herokuapp.com/users/1/2';  // URL to web API
  
  constructor (private http: Http,private sharedService:SharedService) {}

  add(repoName,data): Observable<any> {
    return this.http.post("https://ekoalit-os-srv.herokuapp.com/repos/add/" + repoName, data,this.sharedService.getHttpHeaders())
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  getAll(repoName,data): Observable<any[]> {
    return this.http.post("https://ekoalit-os-srv.herokuapp.com/repos/" + repoName + "/1/10", data,this.sharedService.getHttpHeaders())
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  getStdMenuItemChildsParams(routerUrl,repoMethod){
    var params = {};
    switch (routerUrl)
    {
        case "/protos/" + repoMethod:
          params = {
            title:"Prototypes",
            color:"",
            repoName: "prototypes"
          };
          break;
        case "/properties/" + repoMethod:
          params = {
            title:"Propriétés",
            color:"",
            repoName: "properties"
          };
          break;
        case "/objects/" + repoMethod:
          params = {
            title:"Objets",
            color:"",
            repoName: "objects"
          };
          break;
        case "/projects/" + repoMethod:
          params = {
            title:"Projects",
            color:"",
            repoName: "projects"
          };
          break;
        case "/users/" + repoMethod:
          params = {
            title:"Utilisateurs",
            color:"",
            repoName: "users"
          };
          break;
        case "/datatypes/" + repoMethod:
          params = {
            title:"Types de données",
            color:"",
            repoName: "datatypes"
          };
          break;
        case "/langs/" + repoMethod:
          params = {
            title:"Languages",
            color:"",
            repoName: "langs"
          };
          break;
    }
    return params;
  }
  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
