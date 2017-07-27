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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// ModuleWithProviders is used with singleton instances
// Skipself checks for other instances of a module in the heirarchy
var core_1 = require('@angular/core');
// Service Imports:
var firebase_config_service_1 = require('./service/firebase-config.service');
// decorator
var CoreModule = (function () {
    // initialize this for detection purposes:
    // parentModule is the 
    function CoreModule(parentModule) {
        // detects if an instance of itself already exists:
        if (parentModule) {
            throw new Error("CoreModule exists already. Only import in the root/app module!");
        }
    }
    // create singleton instances method:
    //     this creates a providers array that will be auto configured:
    //     pass in any singletons as providers:
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule,
            providers: [firebase_config_service_1.FirebaseConfigService]
        };
    };
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [],
            declarations: [],
            exports: []
        }),
        __param(0, core_1.Optional()),
        __param(0, core_1.SkipSelf()), 
        __metadata('design:paramtypes', [CoreModule])
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map