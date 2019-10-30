import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee  } from  './employee';
import { Observable } from 'rxjs'; //if code gives error the try 'rxjs/Observable'
//@Injectable is must , without is service class will become just a typescript class.
//@Injectable is must to use when service class have dependencies on other service class.
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private _url:string="/assets/data/employees.json";

  constructor(private http:HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }
}
