import { Injectable }              from '@angular/core';
import { Http, Response, Headers, RequestOptions }          from '@angular/http';

@Injectable()
export class SharedService {
  public user:any = null;
  public getHttpHeaders()
  {
    let headers = new Headers();
    headers.append('x-access-token', this.user.token);
    let options = new RequestOptions({ headers: headers });
    return options;
  }
  constructor () {}
}
