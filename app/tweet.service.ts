export class TweetService {
    getTweets() : object[]{
        return [
            {
                displayName: "Windward",
                userName: "@windwardstudios",
                tweet: "Looking for a better company report app?",
                id: 1
            },
            {
                displayName: "AngularJS News",
                userName: "@angularjs_news",
                tweet: "Right Relevance: Influencers, Articles and Conversations",
                id: 2
            },
            {
                displayName: "UX & Bootstrap",
                userName: "@3rdwave",
                tweet: "10 Reasons Why Web Projects Fail",
                id: 3
            }]
    }
}