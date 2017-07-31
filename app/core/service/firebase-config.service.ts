// Set up service:
import { Injectable } from '@angular/core';
// use firebase sdk from firebase module:
//     there are no individual components to import, so just import everything:
import * as firebase from 'firebase';
// access the database (firebase):
//     once required, you can use db methods provided by firebase:
// which db sections do you want to use? Only reference the path you need data from: 
require('firebase/database');

// pull in the constants you'll need:
import { FIREBASE_CONFIG } from '../constant/constants';

@Injectable()

export class FirebaseConfigService {
    // create database property to reference the db:
    //     "_" underscore denotes that this will be a private property
    private _database: firebase.database.Database;

    constructor() {
        this.configureApp();
        this.configureDatabase();
    }
    // create getter to control access to data from the firebase db:
    public get database(){
        return this._database;
    }
    configureApp() {
        // initialize firebase config:
        firebase.initializeApp(FIREBASE_CONFIG);
    }
    configureDatabase(){
        this._database = firebase.database();
    }
}