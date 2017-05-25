import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { SharedService } from '../shared/services/shared.service';

@Injectable()
export class LayoutService {
  //TODO ADD GLOBAL BASE PATH SOMEWHERE
  constructor (private http: Http,private sharedService:SharedService) {}
  getProjects(): Observable<any> {
    return this.http.post(this.sharedService.apiBasUrl + "repos/projects/1/10", {},this.sharedService.getHttpHeaders())
                .map(this.extractData)
                .catch(this.handleError);
    }
  getStdMenuItemChilds(id,lib,icon,color,routeFNew,routeFList,route, withChilds):any {
    var ret:any = {
      id:id,
      lib:lib,
      icon:icon, 
      color:color,
      route:route
    };

    if (withChilds)
      {
        ret.childs = [
          {
            id:id + "1",
            lib:"Nouveau",
            icon:"icon-plus",
            route:routeFNew
          },
          {
            id:id + "2",
            lib:"Liste",
            icon:"icon-list",
            route:routeFList
          }
        ]
      }
      return ret;
  }
  private extractData(res: Response) {
    let body = res.json();
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
