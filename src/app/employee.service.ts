import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee  } from  './employee';
import { Observable } from 'rxjs'; //if code gives error the try 'rxjs/Observable'
// import 'rxjs/add/operator/catch';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
//@Injectable is must , without is service class will become just a typescript class.
//@Injectable is must to use when service class have dependencies on other service class.
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private _url:string="/assets/data/employees.json";

  constructor(private http:HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url)
                      // .catch(this.errorHandler);
                      .pipe(
                        catchError(this.handleError)
                      );
  }

  // errorHandler(error: HttpErrorResponse) {
  //   return Observable.throw(error.message ||"Server Error");
  // }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
 