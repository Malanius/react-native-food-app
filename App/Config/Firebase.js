import firebase from 'firebase';

const config = {
    //copy firebase keys here
};

const app = firebase.initializeApp(config);

export const db = app.database;
export const storage = app.storage;