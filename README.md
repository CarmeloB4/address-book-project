# Address book project 📒
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2. <br>
I have deployed the project on Vercel, this is the live link: https://address-book-project-opal.vercel.app/ <br>
The project have a CI/CD system on deploy.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Info about the project
The project was designed to be as scalable as possible. A division of the modules by application domain has been devised, beyond that, we also find a shared section for what is used globally.
I have adopted some color variables, in such a way as to modify in the case only the value of that key. I have install prettier for a better code syntax.
<br>
As for the performance, I have taken the following measures:
- Lazy Loading of feature Module (optimizing initial load)
- NgRx state
- Change Detection Strategy On Push
