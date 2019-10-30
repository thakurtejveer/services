# Services

(Written by me)
## 1-component is generating employee array and viewing it in page. (we are voilating  some principles here like DRY(Don't repeat yourself), Single Responsibility Principle. 

## 2-Service class is created, Dependencies injection is introduced.

## 3-Http and Observables are being done commit numbner 6. steps to do it are following-

		a) In angular 5, include HttpClientModule in imports and import it in app.module.ts, use HttpClient in angular4
		b) Inject dependency in constructor in employee.service.ts and refer as some variable, say http
		c) in getEmployee() method, using .get, get the data, but keep in mind .get returns the Observable.
		(    return this.http.get<IEmployee[]>(this._url); _url can be of .json file somewhere in project or some API)
		d) to convert data into type usable, create an interface, say export interface IEmployee{ id:number, name:string, age:number} and cast the Observable in array of employees (i.e getEmployee() : Observable<IEmployee> { } and import the Observable from rxjs or from rxjs/Observable (whichever suits)
		e) data comes asynchronously and component need to subscribe to Observable using and have to pass to local variable (this._employeeService.getEmployees().subscribe(data=>this.employees=data);)
		f) using *ngFor directive, data can be listed out on screen.

## 4-HttpErrorHandler- Steps are following
		a) In service class, import {cathError} from 'rxjs/operators'; and import {throwError} from 'rxjs'; 
		b) If there is an error in getting Observable in getEmployees() in employee.service.ts then pipe the error message
		i.e  .pipe(catchError(this.handleError))
		c) Implement the handleError (read angular HttpClient documentation for error handleing)
		d) In component, get the error message if there is no data coming.

## 5-Routing and Navigation- Steps are as follows

		a) Generate project with routing options (if the project is existing and routing is not been injected at the time of creation project in angular)
		1-In index.html, add a base tag, <base href="/">
		2-Create new file, app-routing.module.ts and configure the different routes.
		3-Import AppRoutingModel in app.model.ts and add in imports array.
		4-Configure the different routes in app-routing.module.ts in the following fashion 
	const routes: Routes= [ {path: 'employeeList', component:EmployeeListComponent}, {path: 'employeeDetails', component:EmployeeDetailComponent} ];
		5-import EmployeeListComponent and EmployeeDetailComponent in app-routing.module
		6-In app.module.ts, import EmployeeListComponent and EmployeeDetailComponent and add both components in declarations.
		7- To reduce the duplicacy of import statements of both components, we have done. In app-routing.module.ts, export const routingComponents=[EmployeeListComponent, EmployeeDetailComponent].
		8-In app.module.ts, Replace both EmployeeListComponent and EmployeeDetailComponent by one import of routingComponent and replace the same by routingComponent in declarations.
		9- add <router-outlet></router-outlet> in app.component.html file.
		10- add buttons to navigate to different components. 
	<nav>
	  <a routerLink="/employeeList" routerLinkActive="active">Employee List</a>
	  <a routerLink="/employeeDetail" routerLinkActive="active">Employee Details</a>
	</nav>

## 6-Wildcard Routes and Redirecting Routes-Steps are following

	1- Create a component ng g c page-not-found
	2- Give {path:'**', component: PageNotFoundComponent} in the bottom of all the objects in the routes in app-routing.module.ts 
	3- Add PageNotFoundComponent in export const routingComponents array in app-routing.module.ts
	4- add another object at top of all routes in app-routing.module.ts,   {path:'', redirectTo: '/employeeList', pathMatch: 'full'}

(automatically written by angular)



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
