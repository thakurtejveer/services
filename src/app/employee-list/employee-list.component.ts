import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees=[
    {"id":1, "name":"Serhat", "age": 30},
    {"id":2, "name":"Durmus", "age": 30},
    {"id":3, "name":"Ed", "age": 28},
    {"id":4, "name":"Sheeran", "age": 28},
    {"id":5, "name":"Sia Furler", "age": 43}

  ];
  constructor() { }

  ngOnInit() {
  }


}
