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
// use this custom pipe to get back a string for a numerical status:
var core_1 = require('@angular/core');
// pull in the enum constant for use in the pipe: 
var constants_1 = require('../constant/constants');
var SeverityPipe = (function () {
    function SeverityPipe() {
        // create SEVERITY reference
        this.howSevere = constants_1.SEVERITY;
    }
    // transform method for custom pipes:
    //     bring in the needed data for custom pipe usage:
    SeverityPipe.prototype.transform = function (severityNum) {
        return this.howSevere[severityNum];
    };
    SeverityPipe = __decorate([
        core_1.Pipe({
            name: 'severity'
        }), 
        __metadata('design:paramtypes', [])
    ], SeverityPipe);
    return SeverityPipe;
}());
exports.SeverityPipe = SeverityPipe;
//# sourceMappingURL=severity.pipe.js.map