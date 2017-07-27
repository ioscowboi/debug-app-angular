// a shared module is a feature module but used a little bit differently
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    // any imports are pulled from another app area and can be used by the NgModule:
    imports: [ CommonModule ],
    // any directives, or pipings must be declared if you want other modules to have access to them
    declarations: [ ],
    // using modules, components etc available to other modules:
    exports: [ CommonModule ]
    // no need for providers because you can run into duplicate services issues
})

// always use the name "SharedModule" in the shared.module.ts
export class SharedModule { }