import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

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
