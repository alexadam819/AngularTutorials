import {Component} from 'angular2/core';
import {LikeComponent} from './like.component';
import {TweetService} from './tweet.service';

@Component({
    selector: 'tweets',
    templateUrl: 'app/tweet.template.html',
    providers: [TweetService],
    directives: [LikeComponent]
})

export class TwitterComponent {
    tweets;
    constructor(tweetService: TweetService){
        this.tweets = tweetService.getTweets();
        console.log(this.tweets);
    }
}