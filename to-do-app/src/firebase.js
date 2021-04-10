import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
   // firebase db configuration
});


  const db = firebaseApp.firestore();

  export default db;




  