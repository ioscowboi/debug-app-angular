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
var core_1 = require("@angular/core");
// use CommonModule when you need access to NgIf/NgFor:
// however we will import it a different way so it remains commented out:
// import { CommonModule } from '@angular/common';
// decorator:
var BugModule = (function () {
    function BugModule() {
    }
    BugModule = __decorate([
        core_1.NgModule({
            // imports that we want NgModule to have access to:
            imports: [],
            declarations: [],
            // passthrough: allows you to pull in other modules to external modules:
            exports: [],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], BugModule);
    return BugModule;
}());
exports.BugModule = BugModule;
//# sourceMappingURL=bug.module.js.map