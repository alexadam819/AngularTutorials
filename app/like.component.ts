import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'like',
    template: 
    `
        <i
            class="glyphicon glyphicon-heart"
            [class.highlighted]="isLike"
            (click)="onClick()">
        </i>
        {{likeCount}}
    `,
    styles: [`
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }

        .highlighted {
            color: deeppink;
        }
    `]
})
export class LikeComponent{
    @Input() isLike = false;
    @Output() change = new EventEmitter();
    likeCount = 0;

    onClick(){
        this.isLike = !this.isLike;
        this.change.emit({ newValue: this.isLike });
        if(!this.isLike){
            this.likeCount++;
        }else{
            this.likeCount--;
        };
    }
}