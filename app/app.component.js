System.register(['angular2/core', './courses.component', './authors.component', './twitter.component', './pipesdemo.component'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, authors_component_1, twitter_component_1, pipesdemo_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (twitter_component_1_1) {
                twitter_component_1 = twitter_component_1_1;
            },
            function (pipesdemo_component_1_1) {
                pipesdemo_component_1 = pipesdemo_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.canSave = true;
                    this.task = {
                        title: "Review application",
                        assignee: {
                            name: "Alex"
                        }
                    };
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>My First Angular 2 App</h1>\n        <courses></courses>\n        <authors></authors>\n        <favorite></favorite>\n        <tweets></tweets>\n        <pipes-demo></pipes-demo>\n        <h1>Section 5 - 56</h1>\n        <button\n            [ngStyle]=\"{\n                backgroundColor: canSave ? 'blue' : 'gray',\n                color: canSave ? 'white' : 'black',\n                fontWeight: canSave ? 'bold' : 'normal'\n            }\"\n        >Submit</button>\n        <h1>Section 5 - 57</h1>\n        <ul>\n            <li>Title: {{ task.title }}</li>\n            <li *ngIf=\"task.assignee != null\">Assigned to: {{ task.assignee.name }} </li>\n            <li>Assigned to: {{ task.assignee.name != null ? task.assignee.name : \"\" }} </li>\n            <li>This is called Elvis operator</li>\n            <li>Assigned to: {{ task.assignee?.name }} </li>\n        <ul>\n    ",
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, twitter_component_1.TwitterComponent, pipesdemo_component_1.PipeDemoComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map