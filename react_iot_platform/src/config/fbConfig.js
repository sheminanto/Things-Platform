import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyC0hcJCzDBgc9XghJYu5FcTpFa7wXD2R3Y",
    authDomain: "things-platform.firebaseapp.com",
    databaseURL: "https://things-platform.firebaseio.com",
    projectId: "things-platform",
    storageBucket: "things-platform.appspot.com",
    messagingSenderId: "386097750035",
    appId: "1:386097750035:web:9a11d8d42b403c9a4f1fe6",
    measurementId: "G-TNEPYBG9GS"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true})

  export default firebase;