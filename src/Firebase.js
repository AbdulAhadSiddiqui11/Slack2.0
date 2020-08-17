import firebase from 'firebase';
import firebaseConfig from './firebaseConfig.js'

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db; /*
                         this makes importing cleaner
                         instead of : import { db } from './Firebase'
                         we can use : import db from './Firebase' 
                    */