// firebaseConfig.js

import firebase from 'firebase/compat/app'; // Notice the use of 'compat' for v9 or later
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyAcLFTKo1xXQUMmMVVC_cyLVElSu5jvxpM",
    authDomain: "fir-6619c.firebaseapp.com",
    databaseURL: "https://fir-6619c-default-rtdb.firebaseio.com",
    projectId: "fir-6619c",
    storageBucket: "fir-6619c.appspot.com",
    messagingSenderId: "835263767413",
    appId: "1:835263767413:web:0b4faa47151c12bc04e93c",
    measurementId: "G-H3VRDJEWNH"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const db = app.database();
export default firebase;
