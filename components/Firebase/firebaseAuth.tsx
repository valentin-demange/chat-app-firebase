import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import { Button } from "@chakra-ui/react";

// Configure Firebase.
const config = {
  apiKey: "AIzaSyCz2pFsyx-_M0uyOOk6KIAxq0G1mOa4yuY",
  authDomain: "blabla-19-90.firebaseapp.com",
  projectId: "blabla-19-90",
  storageBucket: "blabla-19-90.appspot.com",
  messagingSenderId: "26381804243",
  appId: "1:26381804243:web:2018247cadbca9ebd76a26",
};
firebase.initializeApp(config);
const auth = firebase.auth();

const SignInGoogle = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth as any);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    window.location = "mainPage" as any;
  }
  return (
    <div>
      <Button colorScheme="blue" variant="solid" onClick={() => signInWithGoogle()}>
        Sign in with Google
      </Button>
    </div>
  );
};

export default SignInGoogle;
