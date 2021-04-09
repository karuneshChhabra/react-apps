import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAqQTRlFyZCj3wwApVYSruYihNFxGG_2KI",
    authDomain: "todo-app-6deeb.firebaseapp.com",
    projectId: "todo-app-6deeb",
    storageBucket: "todo-app-6deeb.appspot.com",
    messagingSenderId: "1022577972367",
    appId: "1:1022577972367:web:6d1cda0614f261e9a74cfa",
    measurementId: "G-D3R4SMN747"
});

/*
const firebaseConfig = {
    apiKey: "AIzaSyAqQTRlFyZCj3wwApVYSruYihNFxGG_2KI",
    authDomain: "todo-app-6deeb.firebaseapp.com",
    projectId: "todo-app-6deeb",
    storageBucket: "todo-app-6deeb.appspot.com",
    messagingSenderId: "1022577972367",
    appId: "1:1022577972367:web:6d1cda0614f261e9a74cfa",
    measurementId: "G-D3R4SMN747"
  }
  */

  const db = firebaseApp.firestore();

  export default db;




  