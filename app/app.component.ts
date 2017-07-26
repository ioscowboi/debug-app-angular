import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    // what should the app display and where should it get it from
    template: `
        <navbar></navbar>
        <router-outlet></router-outlet>
    `
})
export class AppComponent { }