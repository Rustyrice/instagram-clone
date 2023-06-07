/* eslint-disable prettier/prettier */
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyAqDwnLivLZWtXdc3mhVl5BHQAGCol7F3M',
  authDomain: 'instagram-6d120.firebaseapp.com',
  projectId: 'instagram-6d120',
  storageBucket: 'instagram-6d120.appspot.com',
  messagingSenderId: '139421542502',
  appId: '1:139421542502:web:3ce4ac0e23fa71838765a7'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
