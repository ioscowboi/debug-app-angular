// Modules:
import { NgModule  } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
// once created, import the bugroutingmodule for use in NgModule:
import { BugRoutingModule } from './bug-routing.module';
//  Component:
import { BugListComponent } from './bug-list/bug-list.component';

import { BugDetailComponent } from './bug-detail/bug-detail.component';

// Service:
import { BugService } from './service/bug.service';

// use CommonModule when you need access to NgIf/NgFor:
// however we will import it a different way so it remains commented out:
// import { CommonModule } from '@angular/common';

// decorator:
@NgModule({
    // imports that we want NgModule to have access to:
    imports: [ 
        SharedModule,
        BugRoutingModule
     ],
    declarations: [
        BugListComponent,
        BugDetailComponent
    ],
    // passthrough: allows you to pull in other modules to external modules:
    exports: [ ],
    // services:
    providers: [
        BugService
     ]
})
export class BugModule { }