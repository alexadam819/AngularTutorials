import {Component} from 'angular2/core';

@Component({
    selector: 'subscription-form',
    templateUrl: 'app/subscription-form.component.html'
})
export class SubscriptionFormComponent {
    frequencies = [
        {
            id: "1",
            label: "one"
        },
        {
            id: "2",
            label: "two"
        }
    ]
    onSubmit(form){
        console.log(form);
    }
}