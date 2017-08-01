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
var Observable_1 = require('rxjs/Observable');
var firebase_config_service_1 = require('../../core/service/firebase-config.service');
var BugService = (function () {
    // or " private bugsDbRef = this.fire.database.ref.child('bugs'); " would work the same as above ^^
    // dependency injection:
    function BugService(fire) {
        this.fire = fire;
        // create a reference to the target endpoint bugs database reference:
        this.bugsDbRef = this.fire.database.ref('/bugs');
    }
    // create method to listen to child added events: 
    BugService.prototype.getAddedBugs = function () {
        var _this = this;
        return Observable_1.Observable.create(function (obs) {
            // event listener (use lowest data endpoint possible):
            //     use 'on()' to continuously listen to an event:
            //         also note on() will fire for every one of the specified objects (in this case child_added)
            _this.bugsDbRef.on('child_added', function (bug) {
                // store the js object
                // use as to cast this as our js object
                var newBug = bug.val();
                // store the newBug id as a key, to use as endpoint on where to store updates to existing db nodes
                //     in firebase: 
                newBug.id = bug.key;
                // observe:
                // obs is created here, this extracts the values and converts into a javascript object:
                //     every time this fires, a newBug bug object will be passed in:
                obs.next(newBug);
            }, 
            // let the observable throw the error:
            function (err) {
                obs.throw(err);
            });
        });
    };
    // update page when existing nodes are updated (this should work whether the change was done
    // on users machine or someone elses: 
    BugService.prototype.changedListener = function () {
        var _this = this;
        // observables must have a return object/value
        return Observable_1.Observable.create(function (obs) {
            // listen to when an existing element on the screen is changed, update the appropriate reference:
            _this.bugsDbRef.on('child_changed', function (bug) {
                // change the bug.val() to a js object: 
                var updatedBug = bug.val();
                // set the id locally:
                updatedBug.id = bug.key;
                // provide via the observable: 
                obs.next(updatedBug);
            }, function (err) {
                obs.throw(err);
            });
        });
    };
    //  ADD NEW BUGS TO THE DB LIST ASYNCHRONOUSLY:
    //     type: PROMISE::
    BugService.prototype.addBug = function (bug) {
        var newBugRef = this.bugsDbRef.push();
        newBugRef.set({
            // which fields should be passed in? 
            title: bug.title,
            status: bug.status,
            severity: bug.severity,
            description: bug.description,
            createdBy: 'Admin',
            createdDate: Date.now()
        })
            .catch(function (err) { return console.error("Unable to add bug to Firebase - ", err); });
    };
    // pass in the existing record: 
    BugService.prototype.updateBug = function (bug) {
        // store the location of the endpoint in firebase:
        var currentBugRef = this.bugsDbRef.child(bug.id);
        bug.id = null;
        bug.updatedBy = "Tom Tickle";
        bug.updatedDate = Date.now();
        currentBugRef.update(bug);
    };
    BugService.prototype.deleteBug = function (bug) {
        // remove the location of the endpoint in firebase:
        var deletableBugRef = this.bugsDbRef.child(bug.id);
        bug.id = null;
        deletableBugRef.remove();
    };
    BugService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [firebase_config_service_1.FirebaseConfigService])
    ], BugService);
    return BugService;
}());
exports.BugService = BugService;
//# sourceMappingURL=bug.service.js.map