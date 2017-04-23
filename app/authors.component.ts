import {Component} from 'angular2/core';
import {AuthorsService} from './authors.service';
import {LikeComponent} from './like.component';

@Component({
    selector: 'authors',
    template: `
        <h2>Authors</h2>
        {{ title }}
        <ul>
            <li *ngFor="#author of authors">
                <like [isLike]="post.isLike" (change)="onLikeChange($event)"></like>{{ author }}
            </li>
        </ul>
        `,
        providers: [AuthorsService],
        directives: [LikeComponent]
})
export class AuthorsComponent {
    title = "Title for the authors page";
    authors;

    constructor(authorsService: AuthorsService){
        this.authors = authorsService.getAuthors();
    }

    post = {
        isLike: false
    }

    onLikeChange($event){
        console.log($event);
    }
}