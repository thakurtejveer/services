import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
//@Component lets angular know that It might have dependencies and might use them, so include them
@Component({ 
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees=[];
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees=this._employeeService.getEmployees();
  }


}
