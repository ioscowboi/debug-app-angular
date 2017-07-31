import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FirebaseConfigService } from '../../core/service/firebase-config.service';

@Injectable()

export class BugService{
    // create a reference to the target endpoint bugs database reference:
    bugsDbRef = this.fire.database.ref('/bugs');
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
                // observe:
                // obs is created here, this extracts the values and converts into a javascript object:
                obs.next(bug.val());
            },
            // let the observable throw the error:
            err =>{
                obs.throw(err);
            });
        });
    }
}