"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var bug_service_1 = require('../service/bug.service');
var BugListComponent = (function () {
    // Inject and instance of the BugService:
    //     we use OnInit instead of putting code in the constructor (constructor code = bad)
    function BugListComponent(bugService) {
        this.bugService = bugService;
        // get a collection (array) of bugs: 
        this.bugs = [];
    }
    // must implement ngoninit or getAddedBugs will not run: 
    BugListComponent.prototype.ngOnInit = function () {
        this.getAddedBugs();
        this.getUpdatedBugs();
    };
    BugListComponent.prototype.getAddedBugs = function () {
        var _this = this;
        this.bugService.getAddedBugs()
            .subscribe(function (bug) {
            // push the bug onto the end of the array:
            _this.bugs.push(bug);
        }, function (err) {
            console.error("Unable to get added bug -", err);
        });
    };
    // subscribe to event listener:
    BugListComponent.prototype.getUpdatedBugs = function () {
        var _this = this;
        this.bugService.changedListener()
            .subscribe(function (updatedBug) {
            // find the existing bug in the array and replace it with the update version: 
            //  aha! use the id to track:
            //         map: iterates through and gets every element as an array
            //         indexOf: find a match to whatever is passed in
            var bugIndex = _this.bugs.map(function (index) { return index.id; }).indexOf(updatedBug['id']);
            // replace the bugIndex item with the new info: 
            _this.bugs[bugIndex] = updatedBug;
        }, function (err) {
            console.error("Unable to get updated bug - ", err);
        });
    };
    BugListComponent = __decorate([
        core_1.Component({
            // internal system js that sorts out the template for styles etc:
            moduleId: module.id,
            selector: 'bug-list',
            templateUrl: 'bug-list.component.html',
            styleUrls: ['bug-list.component.css']
        }), 
        __metadata('design:paramtypes', [bug_service_1.BugService])
    ], BugListComponent);
    return BugListComponent;
}());
exports.BugListComponent = BugListComponent;
//# sourceMappingURL=bug-list.component.js.map