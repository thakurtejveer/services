import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
//@Component lets angular know that It might have dependencies and might use them, so include them
@Component({ 
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees=[];
  public errorMessage="";
  constructor(private _employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(data=>this.employees=data,
                                                   error=>this.errorMessage=error);  
    }

    onSelect(employee) {
      this.router.navigate(['/employeeList', employee.id])
    }


}
