import * as admin from 'firebase-admin';
import * as data from './firebase.json';

export class FirebaseConnection {

    public initializeFirebase() {
        admin.initializeApp({
          credential: admin.credential.cert(data as admin.ServiceAccount)
        });
        const db = admin.firestore();
        return db;
    }
}