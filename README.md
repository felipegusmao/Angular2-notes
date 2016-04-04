# Angular 2 Notes

### Essential parts of Angular 2

##### Angular 2 Modules

- In ng2 we separate our code into modules separate features, assemble the application from module then we expose by exporting it.
- changed from ng1 because ES6 has it own implementation
- Import using the import keyword, it is using destructuring

##### Angular 2 Components, one of the most important players of ng2
- Component contains application logic that controls a region of the user interface that we call a view.
- It provides, reuse and consistency.
- Nest components inside other components, kind like extjs.
- Need start component main.ts  which contains a bootstrap of the main components
- Entry point for the app

##### Angular 2 templates

- Directive
- Interpolation {{}}
- Nested components <vehicle> </vehicle>
- basic html
- component -> template by connecting it
- Either inline or by url.
- Create component tree
- Nesting components

##### Angular 2 metadata
- Declare all directives as child components.
- selector used ex: app   <app></app>
- styleUrls - can have multiple
- templateUrl - only one
- directives - other components
- providers - services used
- @Component decorator
- Input and Output a great way for child components to communicate with parent components

#### Parent to Child Communication
- ViewChild to grad child component and call its methods.
- Used in a filter scenario to call clear and clear the results

#### Interpolation
- One way in
- {{vehicle.name}}

#### Property Binding
- One way in
- take property and [] send values to components
- ex: character name
- interpolation is a short way to property Binding
- [target]="expression"
- always one way unidirectional

#### Event Binding
- How we comunicate from the template to the Component
- (event)="clickHandler"
- ex: (click)="save()">Save</button>
- ex: (changed)="vehicleChanged()"
```
(click)="select('asdf')"
```

#### Two way Binding
- [()] banana in a box syntax
- [(ngModel)]="expression"
- [(ngModel)]="character.name

#### Built-in Directives
- Transform the DOM
- Camel case
- [ngStyle]="setStyle()"
- [ngClass]
- *ngFor, *ngIf, *ngSwith
- ex: *ngIf="currentVehicle"
- ex: *ngFor="#story of stories"> {{story.name}}

#### Pipes
- filters = pipes
- {{character.name | lowercase }}
- {{event.data | currency}}
- many other built in pipes
- Async Pipe - continuous stream of data.
- you can create your own pipes


#### Services
- Shared Logic
- ultimate form of code reuse
- Class replaced (Factories,Services,Providers,Constants,Values)
- ng2 we just have a class

```
vehicle.service.ts

@Injectable()
export class VehicleService {
  getVehicle() {
    return [
      new Vehicle(10, 'Ford focus'),
      new Vehicle(13, 'Ford fusion'),
      new Vehicle(15, 'Ford edge')
      ];
  }
}
```
- It provides someting of value
- Shared data or logic
- Data, logger, exception handler, or message service
- setup providers

#### Dependency Injection
- Injector decorator - DI
- Just add metadata constructor(private _http: Http) {}
- register service at root component, just do it once or you will have 2 instances


#### Components lifecycle hooks
- Interface - implement the lifecycle hook's interface
- ex: export class CharacterComponent implements OnInit
- ngOnInit() { }
- keep complex logic out of the constructor
- ng2 offer a # of interfaces. ngOnChanges, ngOnDestroy, ngAfterViewInit
- you dont have to use it but it does help


#### Http
- first add script reference to index.html
- get and save data we can use Promises or Observables
- separate module
- Observable is a great new way to work it ng2
- Look into Rxjs library for other way to interact with data

#### RxJs
- RxJs (Reactive Js) implements the asynchronous observable pattern and is widely used in Angular 2
- import 'rxjs/Rx';
- Once data comes in everyone subscribe get updated.

#### Async Pipe
```
vehicles: Observable<Vehicle[]>;

getHeroes() {
    this.vehicles = this._vehicleService.getVehicles();
}

<li *ngFor="#vehicle of vehicles | async"
```
- it does subscribe to the Obervable


#### Promises
- .toPromise()
- use async too


#### Routing
- @RouteConfig({...})
- <router-outlet>
- [router-link]
- RouteParams
- Router
- insert router.dev.js to index.html
- ROUTER_PROVIDERS
- use PascalCase

above the component

```
@RouterConfig([
{ path: '/', name: 'Vehicles', component: VehicleListComponent, useAsDefault: true),
{ path: '/list/:id', name: 'Vehicles', component: VehicleListComponent ),
{ path: '/:id', name: 'Vehicle', component: VehicleComponent )
])
export class VehiclesComponent {}
```

#### Child Routers
- 'vehicles/...'   these ... tells ng2 what you will define it own route
- makes components extractables
- define routes in the components
- router-outlet renders router




#### End of Course objective
- Do basic component comunication and app
- 4-30