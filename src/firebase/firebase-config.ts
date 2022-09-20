/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyCz2pFsyx-_M0uyOOk6KIAxq0G1mOa4yuY",
    authDomain: "blabla-19-90.firebaseapp.com",
    projectId: "blabla-19-90",
    storageBucket: "blabla-19-90.appspot.com",
    messagingSenderId: "26381804243",
    appId: "1:26381804243:web:2018247cadbca9ebd76a26"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}