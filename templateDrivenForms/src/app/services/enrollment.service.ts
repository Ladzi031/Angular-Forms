import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../Model/user';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = "http://localhost:3000/enroll";

  constructor(private _http: HttpClient) { }

  public enroll(user: User){
    return this._http.post<any>(this._url, user).pipe(catchError(this.errorHandler))
  }


  public errorHandler(error: HttpErrorResponse){
     return throwError(error);
  }
}
