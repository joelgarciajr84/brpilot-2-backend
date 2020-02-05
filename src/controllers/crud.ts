import { FirebaseConnection } from '../firebase/firebaseConnections';
const firebaseCon = new FirebaseConnection();

export class Crud extends FirebaseConnection{
  go = this.initializeFirebase();

  insertData = async(data: FirebaseFirestore.DocumentData) =>{
    const collection = this.go.collection('users').doc();

    const insertNewData = collection.set(data);
    return insertNewData;
  }
}