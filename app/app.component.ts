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
        <h1>Section 5 - 56</h1>
        <button
            [ngStyle]="{
                backgroundColor: canSave ? 'blue' : 'gray',
                color: canSave ? 'white' : 'black',
                fontWeight: canSave ? 'bold' : 'normal'
            }"
        >Submit</button>
        <h1>Section 5 - 57</h1>
        <ul>
            <li>Title: {{ task.title }}</li>
            <li *ngIf="task.assignee != null">Assigned to: {{ task.assignee.name }} </li>
            <li>Assigned to: {{ task.assignee.name != null ? task.assignee.name : "" }} </li>
            <li>This is called Elvis operator</li>
            <li>Assigned to: {{ task.assignee?.name }} </li>
        <ul>
    `,
    directives: [CoursesComponent, AuthorsComponent, TwitterComponent, PipeDemoComponent]
})
export class AppComponent {
    canSave = true;
    task = {
        title: "Review application",
        assignee: {
            name: "Alex"
        }
    }
}