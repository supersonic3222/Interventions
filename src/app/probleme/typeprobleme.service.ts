import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ITypeProbleme } from './typeprobleme';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class TypeproblemeService {
  private baseUrl = 'api/types';

  constructor(private _http: HttpClient) { }

  obtenirTypes(): Observable<ITypeProbleme[]> {
    return this._http.get<ITypeProbleme[]>(this.baseUrl)
      .do(data => console.log('obtenirTypes: ' + JSON.stringify(data)))
      .catch(this.handleError); 
  }

  private handleError(err: HttpErrorResponse) {
    console.error(err.error);
    return Observable.throw(err.message);
  }
}
