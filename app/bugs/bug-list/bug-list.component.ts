import { Component, OnInit } from '@angular/core';
import { BugService } from '../service/bug.service';
@Component({
    // internal system js that sorts out the template for styles etc:
    moduleId: module.id,
    selector: 'bug-list',
    templateUrl: 'bug-list.component.html',
    styleUrls: [ 'bug-list.component.css']
})
export class BugListComponent implements OnInit { 
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
                console.log(bug);
            },
            err => {
                console.error("Unable to get added bug -", err);
            });
    }
}