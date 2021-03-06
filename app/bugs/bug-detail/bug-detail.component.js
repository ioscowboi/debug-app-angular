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
var constants_1 = require('../../shared/constant/constants');
var BugDetailComponent = (function () {
    // dependency injection needed for FormBuilder to work smoothly: 
    function BugDetailComponent(formB, bugService) {
        this.formB = formB;
        this.bugService = bugService;
        // create property for html component to use
        this.modalId = "bugModal";
        // create local property for statuses and severities: 
        this.statuses = constants_1.STATUS;
        this.severities = constants_1.SEVERITY;
        // store enum data for looping: 
        this.statusArr = [];
        this.severityArr = [];
        // initialize input values (temporary storage property):
        this.currentBug = new bug_1.Bug(null, null, this.statuses.Logged, this.severities.Severe, null, null, null, null, null);
    }
    BugDetailComponent.prototype.ngOnInit = function () {
        // because of how ngFor works, it creates a duplicate of each item in the enum
        //     get the keys of the status array:
        this.statusArr = Object.keys(this.statuses).filter(Number);
        this.severityArr = Object.keys(this.severities).filter(Number);
        this.configureForm();
    };
    // establish form properties then bind the reactive form to the html form fields:
    //     ok to pass in Bug to reset the form (optional):
    //         :::::ELVIS OPERATOR ALERT !!!! :::::
    BugDetailComponent.prototype.configureForm = function (bug) {
        // if bug is passed in, use the 'bug' settings: 
        //     note: passing in 'bug' allows us to update existing bugs, not create a new one:
        if (bug) {
            // create a new instance of Bug so that there is no link to the original:
            //     this is due to how coupled the local copy will be, we want to uncouple, then update:
            this.currentBug = new bug_1.Bug(bug.id, bug.title, bug.status, bug.severity, bug.description, bug.createdBy, bug.createdDate, bug.updatedBy, bug.updatedDate);
        }
        // // gives more control over form fields:
        // this.bugForm = new FormGroup({
        //     // arguments[1] are form validation :
        //     //     use '[]' for multiple validation arguments:
        //     //     regular expressions go in between '/ /'
        //     title: new FormControl(this.currentBug.title, [Validators.required, forbiddenStringValidator(/puppy/i)]),
        //     status: new FormControl(this.currentBug.status, Validators.required),
        //     severity: new FormControl(this.currentBug.severity, Validators.required),
        //     description: new FormControl(this.currentBug.description, Validators.required)
        // });
        // use one or the other ^ v  
        //     below uses formBuilder to handle validation: 
        this.bugForm = this.formB.group({
            title: [this.currentBug.title, [forms_1.Validators.required, forbidden_string_validator_1.forbiddenStringValidator(/puppy/i)]],
            status: [this.currentBug.status, forms_1.Validators.required],
            severity: [this.currentBug.severity, forms_1.Validators.required],
            description: [this.currentBug.description, forms_1.Validators.required]
        });
    };
    BugDetailComponent.prototype.submitForm = function () {
        this.currentBug.title = this.bugForm.value["title"];
        this.currentBug.status = this.bugForm.value["status"];
        this.currentBug.severity = this.bugForm.value["severity"];
        this.currentBug.description = this.bugForm.value["description"];
        if (this.currentBug.id) {
            this.updateBug();
        }
        else {
            this.addBug();
        }
    };
    // Crud (C) method: 
    // addBug service passes data for submission to the Firebase DB:
    //     set properties and pass to the BugService object for processing:
    BugDetailComponent.prototype.addBug = function () {
        this.bugService.addBug(this.currentBug);
    };
    // Crud (U) method:
    BugDetailComponent.prototype.updateBug = function () {
        this.bugService.updateBug(this.currentBug);
    };
    // Crud (D) method: 
    BugDetailComponent.prototype.deleteBug = function () {
        var deleteForSure = confirm("Are you sure? (THIS CANNOT BE UNDONE)");
        if (deleteForSure == true) {
            this.bugService.deleteBug(this.currentBug);
            this.freshForm();
        }
        ;
    };
    // need to clear the form after submission: 
    BugDetailComponent.prototype.freshForm = function () {
        // pass in the properties that have an initial value:
        this.bugForm.reset({ status: this.statuses.Logged, severity: this.severities.Severe });
        this.cleanBug();
    };
    // go back to initial state! :
    BugDetailComponent.prototype.cleanBug = function () {
        this.currentBug = new bug_1.Bug(null, null, this.statuses.Logged, this.severities.Severe, null, null, null, null, null);
    };
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