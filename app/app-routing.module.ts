// module used to create all routing: 

// imports: 
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BugListComponent } from './bugs/bug-list/bug-list.component';

@NgModule({
    // define all paths for routing:
    imports: [ 
        RouterModule.forRoot([ 
            // base (root "/") route path:
            { path: "", component: BugListComponent }
        ])
    ],
    exports: [RouterModule]
})

// notice this can be named whatever you want:
export class AppRoutingModule { }