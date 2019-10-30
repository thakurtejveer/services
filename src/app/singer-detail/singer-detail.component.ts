import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { ActivatedRout } from '@angular/router';

@Component({
  selector: 'app-singer-detail',
  templateUrl: './singer-detail.component.html',
  styleUrls: ['./singer-detail.component.css']
})
export class SingerDetailComponent implements OnInit {

  public employeeId;
  public employeeName;
  public employeeAge;

  constructor(private route :ActivatedRoute) { }

  ngOnInit() {
    let Id=parseInt(this.route.snapshot.paramMap.get('id'));
    // let Age=this.route.snapshot.paramMap.get('age');
    // let Name=this.route.snapshot.paramMap.get('name');
    this.employeeId=Id;
    // this.employeeName=Name;
    // this.employeeAge=Age;
  }

}
