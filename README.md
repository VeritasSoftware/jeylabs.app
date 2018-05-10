# Jeylabs.App

# Angular 5 CLI app

* The solution comprises of a **Graphics Service** (back end) and a **Shapes Viewer component** (UI front end)
* The Service is injected into the component.
* The user entered natural language command is passed from the UI to the Service.
* The Service 
    * parses the command using regular expressions (javascript flavor)
    * calculates the vertices (Points) on the Shape 
    * and returns a Shape with these Points.
* These points are then drawn on a 2D canvas to draw the Shape.

**Screenshot:**

![Screenshot](https://github.com/VeritasSoftware/jeylabs.app/blob/master/src/Screenshot.jpg)

This Angular 5 project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
