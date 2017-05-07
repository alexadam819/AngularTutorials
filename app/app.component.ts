import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {TwitterComponent} from './twitter.component';
import {PipeDemoComponent} from './pipesdemo.component';
import {BootstrapPanel} from './bootstrap.panel.component';
import {ZippyComponent} from './zippy.component';
import {ContactFormComponent} from './contact-form.component';
import {SubscriptionFormComponent} from './subscription-form.component';
import {SignUpFormComponent} from './signup-form.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [
        CoursesComponent, 
        AuthorsComponent, 
        TwitterComponent, 
        PipeDemoComponent, 
        BootstrapPanel, 
        ZippyComponent, 
        ContactFormComponent,
        SubscriptionFormComponent,
        SignUpFormComponent
    ]
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