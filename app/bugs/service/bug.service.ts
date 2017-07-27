import { Injectable } from '@angular/core';

import { FirebaseConfigService } from '../../core/service/firebase-config.service';

@Injectable()

export class BugService{
    // dependency injection:
    constructor(private fire: FirebaseConfigService){
        
    }
}