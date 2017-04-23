System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
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
                        }];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map