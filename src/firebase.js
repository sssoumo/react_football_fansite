import firebase from 'firebase/app';
import 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyA74a5qVYg7HQ0r7WZ54pYi3HP2iCjLxrY",
    authDomain: "m-city-c0fc5.firebaseapp.com",
    databaseURL: "https://m-city-c0fc5.firebaseio.com",
    projectId: "m-city-c0fc5",
    storageBucket: "m-city-c0fc5.appspot.com",
    messagingSenderId: "706725652548"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const firebaseMatches = firebaseDB.ref('matches')

 export {
     firebase,
     firebaseMatches
 }