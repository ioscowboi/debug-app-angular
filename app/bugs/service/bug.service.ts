import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FirebaseConfigService } from '../../core/service/firebase-config.service';
import { Bug } from '../model/bug';

@Injectable()

export class BugService{
    // create a reference to the target endpoint bugs database reference:
    private bugsDbRef = this.fire.database.ref('/bugs');
    // or " private bugsDbRef = this.fire.database.ref.child('bugs'); " would work the same as above ^^
    // dependency injection:
    constructor(private fire: FirebaseConfigService){ }
    
    // create method to listen to child added events: 
    getAddedBugs(): Observable<any> {
        return Observable.create(obs=> {
            // event listener (use lowest data endpoint possible):
            //     use 'on()' to continuously listen to an event:
            //         also note on() will fire for every one of the specified objects (in this case child_added)
            this.bugsDbRef.on('child_added', bug =>{
                // store the js object
                // use as to cast this as our js object
                const newBug = bug.val() as Bug;
                // store the newBug id as a key, to use as endpoint on where to store updates to existing db nodes
                //     in firebase: 
                newBug.id = bug.key; 
                // observe:
                // obs is created here, this extracts the values and converts into a javascript object:
                //     every time this fires, a newBug bug object will be passed in:
                obs.next(newBug);
            },
            // let the observable throw the error:
            err =>{
                obs.throw(err);
            });
        });
    }
    // update page when existing nodes are updated (this should work whether the change was done
        // on users machine or someone elses: 
    changedListener(): Observable<any> {
        // observables must have a return object/value
        return Observable.create(obs => {
            // listen to when an existing element on the screen is changed, update the appropriate reference:
            this.bugsDbRef.on('child_changed', bug => {
                // change the bug.val() to a js object: 
                const updatedBug = bug.val() as Bug;
                // set the id locally:
                updatedBug.id = bug.key;
                // provide via the observable: 
                obs.next(updatedBug);
            },
            err => {
                obs.throw(err);
            });
        });
    }
    //  ADD NEW BUGS TO THE DB LIST ASYNCHRONOUSLY:
    //     type: PROMISE::
    addBug(bug: Bug){
        const newBugRef = this.bugsDbRef.push();
        newBugRef.set({
            // which fields should be passed in? 
            title: bug.title,
            status: bug.status,
            severity: bug.severity,
            description: bug.description,
            createdBy: 'Admin',
            createdDate: Date.now()
        }) 
        .catch(err => console.error("Unable to add bug to Firebase - ", err));
    }
    // pass in the existing record: 
    updateBug(bug: Bug){
        // store the location of the endpoint in firebase:
        const currentBugRef = this.bugsDbRef.child(bug.id);
        bug.id = null;
        bug.updatedBy = "Tom Tickle";
        bug.updatedDate = Date.now(); 
        currentBugRef.update(bug);
    }
    deleteBug(bug: Bug){
        // remove the location of the endpoint in firebase:
        const deletableBugRef = this.bugsDbRef.child(bug.id);
        bug.id = null;
        deletableBugRef.remove();
    }

}