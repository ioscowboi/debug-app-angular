import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// for use in the bugs path:
import { BugListComponent } from './bug-list/bug-list.component';

@NgModule({
    imports: [
        // Feature modules use the .forChild method
        // note: there should usually only be one instance of .forRoot (which is in the app-routing.module.ts):
        RouterModule.forChild([
            // set up redirect to give context to the content we're displaying: 
            { path: '', redirectTo: 'bugs', pathMatch: 'prefix'},
            // don't put any leading slashes in the routing path:
            { path: 'bugs', component: BugListComponent },
            // if there's no match on the root (put this last):
            //     ** = wildcard
            { path: '**', redirectTo: 'bugs'}


        ])
    ],
    exports: [ ]
})
export class BugRoutingModule { }