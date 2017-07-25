import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// for use in the bugs path:
import { BugListComponent } from './bug-list/bug-list.component';

@NgModule({
    imports: [
        // Feature modules use the .forChild method
        // note: there should usually only be one instance of .forRoot (which is in the app-routing.module.ts):
        RouterModule.forChild([
            // don't put any leading slashes in the routing path:
            { path: 'bugs', component: BugListComponent }
        ])
    ],
    exports: [ ]
})
export class BugRoutingModule { }