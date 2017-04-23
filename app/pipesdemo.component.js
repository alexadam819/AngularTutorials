System.register(['angular2/core', './summary.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, summary_pipe_1;
    var PipeDemoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            }],
        execute: function() {
            PipeDemoComponent = (function () {
                function PipeDemoComponent() {
                    this.course = {
                        title: "Angular 2 Pipes Demo",
                        rating: 4.9745,
                        students: 5981,
                        price: 99.95,
                        releaseDate: new Date(2017, 4, 19)
                    };
                    this.post = {
                        title: "Angular Pipes Demo",
                        body: "\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor \n            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis \n            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore \n            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, \n            sunt in culpa qui officia deserunt mollit anim id est laborum.\n        "
                    };
                }
                PipeDemoComponent = __decorate([
                    core_1.Component({
                        selector: 'pipes-demo',
                        template: "\n        {{ course.title | uppercase | lowercase }}\n        <br/>\n        {{ course.students | number }}\n        <br/>\n        {{ course.rating | number:'2.2-2' }}\n        <br/>\n        {{ course.price | currency }}\n        <br/>\n        {{ course.releaseDate | date:'MMM yyyy' }}\n        <br/>\n        {{ course | json }},\n        <br/>\n        {{ post.body | summary:15 }}        \n    ",
                        pipes: [summary_pipe_1.SummaryPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PipeDemoComponent);
                return PipeDemoComponent;
            }());
            exports_1("PipeDemoComponent", PipeDemoComponent);
        }
    }
});
//# sourceMappingURL=pipesdemo.component.js.map