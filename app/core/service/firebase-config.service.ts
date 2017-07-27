// Set up service:
import { Injectable } from '@angular/core';
// use firebase sdk from firebase module:
import * as firebase from 'firebase';
// pull in the constants you'll need:
import { FIREBASE_CONFIG } from '../constant/constants';

@Injectable()

export class FirebaseConfigService{
    constructor(){
        this.configureApp();
    }
    configureApp(){
        // initialize firebase config:
        // const app = firebase.initializeApp(FIREBASE_CONFIG);
    }
}