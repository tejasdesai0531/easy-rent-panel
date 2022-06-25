import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { ApiMethod, AuthEndPoints } from '../consts';
import { ErrorService } from '../error/error.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // methods: ApiMethod | undefined;

  constructor(
    private http: HttpClient,
    private _error: ErrorService
  ) { }


  requestCall(api: string, method: ApiMethod, data?: any, params?: any): Observable<any> {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "token_asdfsdfa"
    });

    let response: Observable<any>;
    switch(method) {
      case ApiMethod.GET:
        response = this.http.get(`${environment.API_URL}${api}`, { headers: headers, params: params })
            .pipe(catchError(async (err) => this.handleError(err)));
        break;
      case ApiMethod.POST:
        response = this.http.post(`${environment.API_URL}${api}`, data, { headers: headers, params: params })
            .pipe(catchError(async (err) => this.handleError(err)));
        break;
      case ApiMethod.PUT:
      response = this.http.put(`${environment.API_URL}${api}`, data, { headers: headers, params: params })
          .pipe(catchError(async (err) => this.handleError(err)));
        break;
      case ApiMethod.DELETE:
      response = this.http.delete(`${environment.API_URL}${api}`, params)
          .pipe(catchError(async (err) => this.handleError(err)));
        break;
      default:
        break;
    }
    return response!
  }

  handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.log('An error occurred:', error.error.message);
    } else {
      this._error.whichError(error.status, error.message);
      throw Error(error.message)
    }
  }
}
