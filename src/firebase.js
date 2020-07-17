import firebase from "firebase";
import 'firebase/firestore';


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyApozNNXoC7kmN_5y3V578c7lVKbwtN2sI",
    authDomain: "todolist-91b83.firebaseapp.com",
    databaseURL: "https://todolist-91b83.firebaseio.com",
    projectId: "todolist-91b83",
    storageBucket: "todolist-91b83.appspot.com",
    messagingSenderId: "67697424323",
    appId: "1:67697424323:web:6773c5cec58cbef1c6ef76"
});

export { firebaseConfig as firebase };