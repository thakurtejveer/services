# Services

(Written by me)
	1-component is generating employee array and viewing it in page. (we are voilating  some principles here like DRY(Don't repeat yourself), Single Responsibility Principle. 

	2-Service class is created, Dependencies injection is introduced.
	3-Http and Observables are being done commit numbner 6. steps to do it are following-\
a) In angular 5, include HttpClientModule in imports and import it in app.module.ts, use HttpClient in angular4
b) Inject dependency in constructor in employee.service.ts and refer as some variable, say http
c) in getEmployee() method, using .get, get the data, but keep in mind .get returns the Observable.
(    return this.http.get<IEmployee[]>(this._url); _url can be of .json file somewhere in project or some API)
d) to convert data into type usable, create an interface, say export interface IEmployee{ id:number, name:string, age:number} and cast the Observable in array of employees (i.e getEmployee() : Observable<IEmployee> { } and import the Observable from rxjs or from rxjs/Observable (whichever suits)
e) data comes asynchronously and component need to subscribe to Observable using and have to pass to local variable (this._employeeService.getEmployees().subscribe(data=>this.employees=data);)
f) using *ngFor directive, data can be listed out on screen.



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
