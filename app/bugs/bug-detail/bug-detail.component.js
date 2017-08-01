// established for creating to modal window: 
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
var forms_1 = require('@angular/forms');
var forbidden_string_validator_1 = require('../../shared/validation/forbidden-string.validator');
var bug_service_1 = require('../service/bug.service');
var bug_1 = require('../model/bug');
var BugDetailComponent = (function () {
    // dependency injection needed for FormBuilder to work smoothly: 
    function BugDetailComponent(formB, bugService) {
        this.formB = formB;
        this.bugService = bugService;
        // create property for html component to use
        this.modalId = "bugModal";
        // initialize input values (temporary storage property):
        this.currentBug = new bug_1.Bug(null, null, null, null, null, null, null, null, null);
    }
    BugDetailComponent.prototype.ngOnInit = function () {
        this.configureForm();
    };
    // establish form properties then bind the reactive form to the html form fields:
    BugDetailComponent.prototype.configureForm = function () {
        // // gives more control over form fields:
        // this.bugForm = new FormGroup({
        //     // arguments[1] are form validation :
        //     //     use '[]' for multiple validation arguments:
        //     //     regular expressions go in between '/ /'
        //     title: new FormControl(null, [Validators.required, forbiddenStringValidator(/puppy/i)]),
        //     status: new FormControl(1, Validators.required),
        //     severity: new FormControl(1, Validators.required),
        //     description: new FormControl(null, Validators.required)
        // });
        // use one or the other ^ v  
        //     below uses formBuilder to handle validation: 
        this.bugForm = this.formB.group({
            title: [null, [forms_1.Validators.required, forbidden_string_validator_1.forbiddenStringValidator(/puppy/i)]],
            status: [1, forms_1.Validators.required],
            severity: [1, forms_1.Validators.required],
            description: [null, forms_1.Validators.required]
        });
    };
    BugDetailComponent.prototype.submitForm = function () {
        console.log(this.bugForm);
        this.addBug();
    };
    // addBug service passes data for submission to the Firebase DB:
    //     set properties and pass to the BugService object for processing:
    BugDetailComponent.prototype.addBug = function () {
        this.currentBug.title = this.bugForm.value["title"];
        this.currentBug.status = this.bugForm.value["status"];
        this.currentBug.severity = this.bugForm.value["severity"];
        this.currentBug.description = this.bugForm.value["description"];
        this.bugService.addBug(this.currentBug);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BugDetailComponent.prototype, "currentBug", void 0);
    BugDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bug-detail',
            templateUrl: 'bug-detail.component.html',
            styleUrls: ['bug-detail.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, bug_service_1.BugService])
    ], BugDetailComponent);
    return BugDetailComponent;
}());
exports.BugDetailComponent = BugDetailComponent;
//# sourceMappingURL=bug-detail.component.js.map