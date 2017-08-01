// established for creating to modal window: 

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { forbiddenStringValidator } from '../../shared/validation/forbidden-string.validator';
import { BugService } from '../service/bug.service';
import { Bug } from '../model/bug'; 
import { STATUS, SEVERITY } from '../../shared/constant/constants';

@Component({
    moduleId: module.id,
    selector: 'bug-detail',
    templateUrl: 'bug-detail.component.html',
    styleUrls: [ 'bug-detail.component.css']
})

export class BugDetailComponent implements OnInit{ 
    // create property for html component to use
    private modalId = "bugModal";
    // 
    private bugForm: FormGroup;
    // create local property for statuses and severities: 
    private statuses = STATUS;
    private severities = SEVERITY;
    // store enum data for looping: 
    private statusArr: string[] = [];
    private severityArr: string[] = [];

    // initialize input values (temporary storage property):
    private currentBug = new Bug (null, null, this.statuses.Logged, this.severities.Severe, null, null, null, null, null);

    // dependency injection needed for FormBuilder to work smoothly: 
    constructor(private formB: FormBuilder, private bugService: BugService) { }
    ngOnInit(){
        // because of how ngFor works, it creates a duplicate of each item in the enum
        //     get the keys of the status array:
        this.statusArr = Object.keys(this.statuses).filter(Number);
        this.severityArr = Object.keys(this.severities).filter(Number);
        this.configureForm();
    }
    // establish form properties then bind the reactive form to the html form fields:
    //     ok to pass in Bug to reset the form (optional):
    configureForm(bug?: Bug){
        // if bug is passed in, use the 'bug' settings: 
        //     note: passing in 'bug' allows us to update existing bugs, not create a new one:
        if (bug) {
            // create a new instance of Bug so that there is no link to the original:
            //     this is due to how coupled the local copy will be, we want to uncouple, then update:
            this.currentBug = new Bug(
                bug.id,
                bug.title,
                bug.status,
                bug.severity,
                bug.description,
                bug.createdBy,
                bug.createdDate,
                bug.updatedBy,
                bug.updatedDate
            );
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
            title: [this.currentBug.title, [Validators.required, forbiddenStringValidator(/puppy/i)]],
            status: [this.currentBug.status, Validators.required],
            severity: [this.currentBug.severity, Validators.required],
            description: [this.currentBug.description, Validators.required]
        });
    }
    submitForm(){
        this.currentBug.title = this.bugForm.value["title"];
        this.currentBug.status = this.bugForm.value["status"];
        this.currentBug.severity = this.bugForm.value["severity"];
        this.currentBug.description = this.bugForm.value["description"];
        if (this.currentBug.id) {
            this.updateBug();
        } else {
            this.addBug();
        }
    }
    // addBug service passes data for submission to the Firebase DB:
    //     set properties and pass to the BugService object for processing:
    addBug() {
        this.bugService.addBug(this.currentBug);
    }
    // Crud (U) method:
    updateBug() {
        this.bugService.updateBug(this.currentBug);
    }
    // need to clear the form after submission: 
    freshForm(){
        // pass in the properties that have an initial value:
        this.bugForm.reset({ status: this.statuses.Logged, severity: this.severities.Severe });
        this.cleanBug();
    }
    // go back to initial state! :
    cleanBug() {
        this.currentBug = new Bug (null, null, this.statuses.Logged, this.severities.Severe, null, null, null, null, null);
    }
}