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
    }
    getAddedBugs() {
        this.bugService.getAddedBugs()
            .subscribe(bug => {
                // push the bug onto the end of the array:
                this.bugs.push(bug);
                // display in console: 
                console.log(this.bugs);
            },
            err => {
                console.error("Unable to get added bug -", err);
            });
    }
}