import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    // what should the app display and where should it get it from
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `
    styles:[`
        .container{
            margin-top: 5rem;
        }
    `]
})
export class AppComponent { }