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
  const [signInWithGoogle, currentUser, loading, error] = useSignInWithGoogle(auth);

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
  if (currentUser) {
    // We update the currentUser in Firestore Database
    const updateUserInDatabase = async () => {
      // debugger
      const userRef = doc(db, 'users', currentUser.user.uid);
      console.log("updating currentUser info in database")
      await setDoc(userRef, {
        // For displayName, we consider "tokenResponse" and not "user" as a fix for Gilbert (details below)
        // After I changed my account name from "Valentin Demange" to "Gilbert", currentUser.user.displayName
        // was still "Valentin Demange". I had to change it to currentUser._tokenResponse.displayName to have 
        // Gilbert displayed. Hope this workaround has not side-effects.
        // Then I tried to switch to _tokenResponse for all fields, but had issues with photoUrl then, so I 
        // kept that mixed state
        name: currentUser._tokenResponse.displayName,
        photoURL: currentUser.user.photoURL,
        uid: currentUser.user.uid,
      });
      await setDoc(doc(db, ["users", currentUser.user.uid, "chats"].join("/"), "public"), {chatId: "public"})
    };

    updateUserInDatabase(currentUser)
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

