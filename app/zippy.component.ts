import {Component, Input} from 'angular2/core';

@Component({
    selector: 'zippy-card',
    templateUrl: 'app/zippy.template.html',
})

export class ZippyComponent {
    isExpanded = false;
    @Input() title: string;

    toggle(){
        this.isExpanded = !this.isExpanded;
    }
}