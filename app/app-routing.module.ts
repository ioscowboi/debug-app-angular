// module used to create all routing: 

// imports: 
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    // define all paths for routing:
    imports: [ 
        RouterModule.forRoot([ 
            // base (root "/") route path:
            //  this says: when you hit the core root of the site, redirect to this one:
            { path: '', redirectTo: 'bugs', pathMatch: 'full' },

        ])
    ],
    exports: [RouterModule]
})

// notice this can be named whatever you want:
export class AppRoutingModule { }