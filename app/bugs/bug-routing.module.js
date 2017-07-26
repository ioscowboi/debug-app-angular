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
var router_1 = require('@angular/router');
// for use in the bugs path:
var bug_list_component_1 = require('./bug-list/bug-list.component');
var BugRoutingModule = (function () {
    function BugRoutingModule() {
    }
    BugRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                // Feature modules use the .forChild method
                // note: there should usually only be one instance of .forRoot (which is in the app-routing.module.ts):
                router_1.RouterModule.forChild([
                    // set up redirect to give context to the content we're displaying: 
                    { path: '', redirectTo: 'bugs', pathMatch: 'prefix' },
                    // don't put any leading slashes in the routing path:
                    { path: 'bugs', component: bug_list_component_1.BugListComponent },
                    // if there's no match on the root (put this last):
                    //     ** = wildcard
                    { path: '**', redirectTo: 'bugs' }
                ])
            ],
            exports: []
        }), 
        __metadata('design:paramtypes', [])
    ], BugRoutingModule);
    return BugRoutingModule;
}());
exports.BugRoutingModule = BugRoutingModule;
//# sourceMappingURL=bug-routing.module.js.map