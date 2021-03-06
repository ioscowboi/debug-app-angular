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
// Set up service:
var core_1 = require('@angular/core');
// use firebase sdk from firebase module:
//     there are no individual components to import, so just import everything:
var firebase = require('firebase');
// access the database (firebase):
//     once required, you can use db methods provided by firebase:
// which db sections do you want to use? Only reference the path you need data from: 
require('firebase/database');
// pull in the constants you'll need:
var constants_1 = require('../constant/constants');
var FirebaseConfigService = (function () {
    function FirebaseConfigService() {
        this.configureApp();
        this.configureDatabase();
    }
    Object.defineProperty(FirebaseConfigService.prototype, "database", {
        // create getter to control access to data from the firebase db:
        get: function () {
            return this._database;
        },
        enumerable: true,
        configurable: true
    });
    FirebaseConfigService.prototype.configureApp = function () {
        // initialize firebase config:
        firebase.initializeApp(constants_1.FIREBASE_CONFIG);
    };
    FirebaseConfigService.prototype.configureDatabase = function () {
        this._database = firebase.database();
    };
    FirebaseConfigService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FirebaseConfigService);
    return FirebaseConfigService;
}());
exports.FirebaseConfigService = FirebaseConfigService;
//# sourceMappingURL=firebase-config.service.js.map