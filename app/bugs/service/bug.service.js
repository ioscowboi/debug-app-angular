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
    BugService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [firebase_config_service_1.FirebaseConfigService])
    ], BugService);
    return BugService;
}());
exports.BugService = BugService;
//# sourceMappingURL=bug.service.js.map