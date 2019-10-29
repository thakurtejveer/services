import { Injectable } from '@angular/core';
//@Injectable is must , without is service class will become just a typescript class.
//@Injectable is must to use when service class have dependencies on other service class.
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
    {"id":1, "name":"Serhat", "age": 30},
    {"id":2, "name":"Durmus", "age": 30},
    {"id":3, "name":"Ed", "age": 28},
    {"id":4, "name":"Sheeran", "age": 28},
    {"id":5, "name":"Sia Furler", "age": 43}
    ];
  }
}
