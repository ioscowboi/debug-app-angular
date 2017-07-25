// Modules:
import { NgModule  } from "@angular/core";
import { SharedModule } from '../shared/shared.module';

//  Component:
import { BugListComponent } from './bug-list/bug-list.component';

// use CommonModule when you need access to NgIf/NgFor:
// however we will import it a different way so it remains commented out:
// import { CommonModule } from '@angular/common';

// decorator:
@NgModule({
    // imports that we want NgModule to have access to:
    imports: [ 
        SharedModule
     ],
    declarations: [
        BugListComponent
    ],
    // passthrough: allows you to pull in other modules to external modules:
    exports: [ ],
    
    providers: [ ]
})
export class BugModule { }