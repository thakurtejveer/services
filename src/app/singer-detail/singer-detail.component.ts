import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
// import { ActivatedRout } from '@angular/router';

@Component({
  selector: 'app-singer-detail',
  templateUrl: './singer-detail.component.html',
  styleUrls: ['./singer-detail.component.css']
})
export class SingerDetailComponent implements OnInit {

  public employeeId;
  // public employeeName;
  // public employeeAge;

  constructor(private activatedRoute :ActivatedRoute, private route : Router ) { }

  ngOnInit() {
    // let Id=parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    // let Age=this.route.snapshot.paramMap.get('age');
    // let Name=this.route.snapshot.paramMap.get('name');
    // this.employeeId=Id;
    // this.employeeName=Name;
    // this.employeeAge=Age;
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=> {
      let Id=parseInt(params.get('id'));
      this.employeeId=Id;
    });
  }

  goPrevious() {
    let previousId=this.employeeId-1;
    this.route.navigate(['/employeeList',previousId]);
  }
  goNext() {
    let nextId=this.employeeId+1;
    this.route.navigate(['/employeeList',nextId]);

  }

}
