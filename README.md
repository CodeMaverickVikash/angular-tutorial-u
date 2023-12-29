# Angular learning project
This project will demonstrate the learning of angular concepts.

#### Quick start:
```
npm install -g @angular/cli
ng new app_name
cd app_name
npm start
```

#### Useful commands:
```
ng generate component component_name or ng g c component_name
ng g s service_name
ng g p pipe_name
ng g d directive_name
ng g m module_name or ng g m module_name --routing with routing
```

# Angular Concepts

Angular is a popular open-source web application framework maintained by Google. It is used to build dynamic, single-page web applications (SPAs). Below are key concepts related to Angular:

- **Modules:** 
    - Angular applications are modular and organized into NgModules.
    - An NgModule is a container for a cohesive set of code and related components, directives, services, etc.

- **Components:**
    - Components are the basic building blocks of an Angular application.
    - They encapsulate the template, data, and behavior of a view.

- **Templates:**
    - The template is an HTML view that Angular compiles and renders.
    - It contains Angular-specific syntax to bind data and display dynamic content.

- **Directives:** 
    - Directives are markers on a DOM element that tell Angular to do something with that element.
    - Examples include ngFor, ngIf, and ngModel.

- **Services:**
    - Service is the classes that may have property(data) and function, we can use these stuff in different files. Services are helper which helps us to share the data with multiple component.
    - They are used for code organization and sharing data and functionality.

- **Dependency Injection (DI):**
    - Angular has a built-in dependency injection system that allows components to request dependencies from a higher level.

- **Data Binding:**
    - Data binding is a powerful feature in Angular that allows the automatic synchronization of data between the component and the view.
    - There are three types of data binding in Angular:
      - **Interpolation (`{{ }}`):** Allows embedding expressions in the view template.
      - **Property Binding (`[property]`):** Binds a property of a DOM element to a property of a component.
      - **Event Binding (`(event)`):** Listens for events in the view and responds to them in the component.
    - Two-way data binding is achieved using the `[(ngModel)]` directive for forms, combining property binding and event binding.

- **Local reference:** #nameOfLocalReference
- **@ViewChild():** Provide the more accessibility on Local Reference
- **ng-content:**
- **ng-content with @ContentChild():**
- **Custom attribute directive:** renderer2.
- **@HostListener():** Listen to the event of the hosted element.
- **@HostBinding():** Used to bind the property of the hosted element.
- **Encapsulations:**
- **Change detection technique:**

- **Routing:**
    - Angular provides a powerful router for managing navigation in a single-page application.

- **Forms:**
    - Angular has a powerful form handling mechanism with features like two-way data binding, validation, and form submission.

- **Pipes:** Pipes transform displayed values within a template.

- **HTTP Client:** Angular has an HTTP client for making requests to a server and handling responses.

- **Lifecycle Hooks:**
    - Angular components have a lifecycle with various phases, and developers can hook into these phases using lifecycle hooks like ngOnInit, ngOnDestroy, etc.
    - lifecycle hook methods

            1. ngOnChanges: Called after a bound input property changes
            2. ngOnInit: Called once the component is initialized
            3. ngDoCheck: Called during every change detection run
            4. ngAfterContentInit: called after content(ng-content) has been projected into view
            5. ngAfterContentChecked: Called every time the projected content has been checked
            6. ngAfterViewInit: called after the component's view (and child views) has been initialized
            7. ngAfterViewChecked: Called every time the view(and child views) have been checked
            8. ngOnDestroy: Called once the component is about to be destroyed

- **Angular Universal:**
    - A technology that allows rendering Angular applications on the server-side for improved performance and SEO.

- **RxJS (Reactive Extensions for JavaScript):**
    - Angular heavily relies on RxJS for handling asynchronous operations and building reactive applications.

- **Observables:**
    - Observables are a part of the RxJS library and are used to handle asynchronous operations and events.
    - They represent a stream of data over time and can be observed by multiple parts of an application.
    - Angular extensively uses Observables for handling events such as user input, HTTP requests, and other asynchronous operations.
    - Commonly used operators with Observables include `map`, `pipe`, `filter`, `mergeMap`, `switchMap`, etc.
 
