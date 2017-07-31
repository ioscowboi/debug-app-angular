// established for creating to modal window: 

import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'bug-detail',
    templateUrl: 'bug-detail.component.html',
    styleUrls: [ 'bug-detail.component.css']
})

export class BugDetailComponent { 
    // create property for html component to use
    private modalId = "bugModal";
}