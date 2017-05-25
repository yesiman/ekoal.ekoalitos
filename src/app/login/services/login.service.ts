import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { SharedService } from '../../shared/services/shared.service';

@Injectable()
export class LoginService {
  constructor (private http: Http,private sharedService:SharedService) {}
  login(user): Observable<any> {
      return this.http.post(this.sharedService.apiBasUrl + "users/login", {user:user})
                  .map(this.extractLoginData)
                  .catch(this.handleError);
    }
  private extractLoginData(res: Response) {
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
