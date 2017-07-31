// established for creating to modal window: 

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { forbiddenStringValidator } from '../../shared/validation/forbidden-string.validator';

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

    // dependency injection needed for FormBuilder to work smoothly: 
    constructor(private formB: FormBuilder) { }
    ngOnInit(){
        this.configureForm();
    }
    // establish form properties then bind the reactive form to the html form fields:
    configureForm(){
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
            title: [null, [Validators.required, forbiddenStringValidator(/puppy/i)]],
            status: [1, Validators.required],
            severity: [1, Validators.required],
            description: [null, Validators.required]
        });
    }
    submitForm(){
        console.log(this.bugForm);
    }
}