import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {TwitterComponent} from './twitter.component';
import {PipeDemoComponent} from './pipesdemo.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular 2 App</h1>
        <courses></courses>
        <authors></authors>
        <favorite></favorite>
        <tweets></tweets>
        <pipes-demo></pipes-demo>
    `,
    directives: [CoursesComponent, AuthorsComponent, TwitterComponent, PipeDemoComponent]
})
export class AppComponent { }