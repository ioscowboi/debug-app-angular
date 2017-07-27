// ModuleWithProviders is used with singleton instances
// Skipself checks for other instances of a module in the heirarchy
import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';

// decorator
@NgModule({
    imports: [ ],
    declarations: [ ],
    exports: [ ]
})

export class CoreModule {
    // initialize this for detection purposes:
    // parentModule is the 
    constructor(@Optional() @SkipSelf() parentModule: CoreModule){
        // detects if an instance of itself already exists:
        if (parentModule){
            throw new Error(
                "CoreModule exists already. Only import in the root/app module!"
            )
        }
    }
    // create singleton instances method:
    //     this creates a providers array that will be auto configured:
    static forRoot(): ModuleWithProviders {
        return{
            ngModule: CoreModule,
            providers: [ ]
        };
    }
}