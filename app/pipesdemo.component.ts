import {Component} from 'angular2/core';
import {SummaryPipe} from './summary.pipe'

@Component({
    selector: 'pipes-demo',
    template:`
        {{ course.title | uppercase | lowercase }}
        <br/>
        {{ course.students | number }}
        <br/>
        {{ course.rating | number:'2.2-2' }}
        <br/>
        {{ course.price | currency }}
        <br/>
        {{ course.releaseDate | date:'MMM yyyy' }}
        <br/>
        {{ course | json }},
        <br/>
        {{ post.body | summary:15 }}        
    `,
    pipes: [SummaryPipe]
})
export class PipeDemoComponent {
    course = {
        title: "Angular 2 Pipes Demo",
        rating: 4.9745,
        students: 5981,
        price: 99.95,
        releaseDate: new Date(2017, 4, 19)
    }
    post = {
        title: "Angular Pipes Demo",
        body: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.
        `
    }
}