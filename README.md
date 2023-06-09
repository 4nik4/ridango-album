Create a simple photo album web app.

The web app should show a list of users when loaded. Each user has a number of albums containing pictures.

On the album page, allow user create/delete user albums and pictures. 
Create a log page containing actions taken. E.g. “User x deleted one picture” 
User page should have a section displaying the albums and a section displaying user action metrics E.g. “Albums: 5 Created: 1 Deleted: 2”

Endpoints

List all users: https://jsonplaceholder.typicode.com/users/ 
List all albums belonging to user with id: https://jsonplaceholder.typicode.com/users/%7Bid%7D/albums [ https://jsonplaceholder.typicode.com/users/%7Bid%7D/albums ] 
Get Album data: https://jsonplaceholder.typicode.com/albums/%7BalbumId%7D [ https://jsonplaceholder.typicode.com/albums/%7BalbumId%7D ] 
Get photos in album: https://jsonplaceholder.typicode.com/albums/%7BalbumId%7D/photos 
[ https://jsonplaceholder.typicode.com/albums/%7BalbumId%7D/photos ]

For additional endpoints see: https://jsonplaceholder.typicode.com/

# RidangoAlbum

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

----

## Personal Notes:

- The albums/photos don't persist after deleting/adding, which seems to be the nature of the API. I could have come up with a solution using localStorage to make them persist, but it felt like an overkill and it would just add unnecessary complexity.
- User centric stats are done using in-component state, for the sake of simplicity. Which means that they don't persist when going away from the page.
- for simplicity of tracking global logs, I used localStorage. It would probably be better to use something like RxJS, but I felt a bit short on time to plug that in properly :)
- There is no validation on inputs, which would probably be a good idea.