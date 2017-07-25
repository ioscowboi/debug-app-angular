import { NgModule  } from "@angular/core";
import { SharedModule } from '../shared/shared.module';

// use CommonModule when you need access to NgIf/NgFor:
// however we will import it a different way so it remains commented out:
// import { CommonModule } from '@angular/common';

// decorator:
@NgModule({
    // imports that we want NgModule to have access to:
    imports: [ ],
    declarations: [],
    // passthrough: allows you to pull in other modules to external modules:
    exports: [ ],
    
    providers: [ ]
})
export class BugModule { }