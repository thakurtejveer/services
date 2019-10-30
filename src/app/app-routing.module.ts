import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  // {path:'', component:EmployeeListComponent},
  //the above object won't work because link in the browser will not be updated
  // {path:'', redirectTo: '/employeeList', pathMatch: 'prefix'},
  //The above object will always redirect to /employeeList
  {path:'', redirectTo: '/employeeList', pathMatch: 'full'},
  {path:'employeeList', component:EmployeeListComponent},
  {path:'employeeDetail', component: EmployeeDetailComponent},
  {path:'**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[EmployeeListComponent,
                                EmployeeDetailComponent,
                                PageNotFoundComponent]
