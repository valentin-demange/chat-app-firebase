import { initializeApp } from "firebase/app";
import { getFirebaseConfig } from './firebase-config.js';
// import firebase from 'firebase/compat/app';
// import * as firebaseui from 'firebaseui'
// import 'firebaseui/dist/firebaseui.css'
var firebase = require('firebase');
var firebaseui = require('firebaseui');

const firebaseAppConfig = getFirebaseConfig();
// Initialize Firebase
initializeApp(firebaseAppConfig);

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    // Other config options...
    signInFlow: 'popup',
    // signInSuccessUrl: '<url-to-redirect-to-on-success>',
  });
