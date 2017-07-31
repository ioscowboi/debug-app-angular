// established for creating to modal window: 

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

    ngOnInit(){
        this.configureForm();
    }
    // establish form properties then bind the reactive form to the html form fields:
    configureForm(){
        // gives more control over form fields:
        this.bugForm = new FormGroup({
            title: new FormControl(),
            status: new FormControl(1),
            severity: new FormControl(1),
            description: new FormControl()
        });
    }
    submitForm(){
        console.log(this.bugForm);
    }
}