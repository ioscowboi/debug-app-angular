// Set up service:
import { Injectable } from '@angular/core';
// use firebase sdk from firebase module:
import * as firebase from 'firebase';
// access the database (firebase):
require('firebase/database');
// pull in the constants you'll need:
import { FIREBASE_CONFIG } from '../constant/constants';

@Injectable()

export class FirebaseConfigService {
    // create database property to reference the db:
    private database: firebase.database.Database;

    constructor() {
        this.configureApp();
    }
    configureApp() {
        // initialize firebase config:
        firebase.initializeApp(FIREBASE_CONFIG);
    }
    configureDatabase(){
        this.database = firebase.database();
    }
}