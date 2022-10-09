import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import "firebase/compat/auth";
import { auth, db } from "../../utils/firebase";
import { Button } from "@chakra-ui/react";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  setDoc,
} from "firebase/firestore";

export default function SignInGoogle() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

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
    // We update the user in Firestore Database
    const updateUserInDatabase = async () => {
      // debugger
      const userRef = doc(db, 'users', user.user.uid);
      console.log("updating user info in database")
      await setDoc(userRef, {
        name: user.user.displayName,
        photoURL: user.user.photoURL,
        uid: user.user.uid,
      });
      await setDoc(doc(db, ["users", user.user.uid, "chats"].join("/"), "public"), {chatId: "public"})
    };

    updateUserInDatabase(user)
      .then(() => (window.location = "mainPage"))
      .catch((e) => {
        throw e;
      });
  }
  return (
    <div>
      <Button
        colorScheme="blue"
        variant="solid"
        onClick={() => signInWithGoogle()}
      >
        Sign in with Google
      </Button>
    </div>
  );
};

