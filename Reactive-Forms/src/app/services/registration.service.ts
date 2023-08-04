import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  url = "http://localhost:3000/enroll";

    constructor(private _http: HttpClient){

     }
    
     register(userData: any){
      return this._http.post<any>(this.url, userData);
      // returns an Observable that other components might subscribe to
     }

     errorHandler(error: HttpErrorResponse) {
      return throwError (() => new Error(error.message));
      //.pipe(catchError(this.errorHandler))
     }
}