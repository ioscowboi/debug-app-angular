import { Component, OnInit } from '@angular/core';
import { BugService } from '../service/bug.service';
import { Bug } from '../model/bug';

@Component({
    // internal system js that sorts out the template for styles etc:
    moduleId: module.id,
    selector: 'bug-list',
    templateUrl: 'bug-list.component.html',
    styleUrls: [ 'bug-list.component.css']
})
export class BugListComponent implements OnInit { 
    // get a collection (array) of bugs: 
    private bugs: Bug[] = [];

    // Inject and instance of the BugService:
    //     we use OnInit instead of putting code in the constructor (constructor code = bad)
    constructor(private bugService: BugService){ }

    // must implement ngoninit or getAddedBugs will not run: 
    ngOnInit(){
        this.getAddedBugs();
        this.getUpdatedBugs();
    }
    getAddedBugs() {
        this.bugService.getAddedBugs()
            //  need so subscribe in order for the asynchronous workflow to run:
            .subscribe(bug => {
                // push the bug onto the end of the array:
                this.bugs.push(bug);
            },
            err => {
                console.error("Unable to get added bug -", err);
            });
    }

    // subscribe to event listener:
    getUpdatedBugs(){
        this.bugService.changedListener()
            .subscribe(updatedBug => {
                // find the existing bug in the array and replace it with the update version: 
                //  aha! use the id to track:
                //         map: iterates through and gets every element as an array
                //         indexOf: find a match to whatever is passed in
                const bugIndex = this.bugs.map(index => index.id).indexOf(updatedBug['id']);
                // replace the bugIndex item with the new info: 
                this.bugs[bugIndex] = updatedBug;
            },
            err => {
                console.error("Unable to get updated bug - ", err);
            });
    }
}