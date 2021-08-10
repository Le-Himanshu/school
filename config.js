 import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAKPifAhNGxE0kcVFpDB6jensGp2oF3ZL4",
  authDomain: "school-f1c12.firebaseapp.com",
  databaseURL: "https://school-f1c12-default-rtdb.firebaseio.com",
  projectId: "school-f1c12",
  storageBucket: "school-f1c12.appspot.com",
  messagingSenderId: "683978599716",
  appId: "1:683978599716:web:a3458c914343aeec2997b1",
  measurementId: "G-43RBS2JZQF"
};
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()
 
 

  