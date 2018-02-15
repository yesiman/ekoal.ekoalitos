import { Injectable }              from '@angular/core';
import { Http, Response, Headers, RequestOptions }  from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { CookieService } from 'ng2-cookies';

@Injectable()
export class SharedService {
  public user:any = null;
  public apiBasUrl:string = 'https://ekoalit-os-srv.herokuapp.com/';
  public vizLayout:boolean = false;
  constructor (private http: Http, private cook:CookieService) {

  }
  public getHttpHeaders()
  {
    let headers = new Headers();
    headers.append('x-access-token', (this.user?this.user.token:""));
    let options = new RequestOptions({ headers: headers });
    return options;
  }
public setUser(user) {
  this.user = user;
  var cookData = this.user.token;
  this.cook.set("udata",cookData);
} 
public getUserViaCokies() {
  var data = this.cook.get("udata");
  this.user = {token:data};
} 
  getDatatypes(): Observable<any> {
     return this.http.post(this.apiBasUrl + "datatypes", {},this.getHttpHeaders())
              .map(this.extractData)
              .catch(this.handleError);
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
