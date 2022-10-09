import "firebase/compat/auth";
import 'firebase/compat/firestore'
import firebase from "firebase/compat/app";


const app = firebase.initializeApp({
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
})

const auth = app.auth()
const db = app.firestore()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, db, provider }