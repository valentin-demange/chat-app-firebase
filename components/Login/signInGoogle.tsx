import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import "firebase/compat/auth";
import { auth, db } from "../../pages/api/firebase";
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
  const [signInWithGoogle, currentUser, loading, error] = useSignInWithGoogle(auth as any);

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
      // // If user = Gilbert, we do not overwrite info, since it will change
      // // username back to "Valentin Demange" :(
      // if (currentUser.user.uid === "s8EZPnz4RgTRxXaEUTOiQSwDxIC3") return
      await setDoc(userRef, {
        name: currentUser.user.displayName,
        photoURL: currentUser.user.photoURL,
        uid: currentUser.user.uid,
      });
      debugger
      await setDoc(doc(db, ["users", currentUser.user.uid, "chats"].join("/"), "public"), {chatId: "public"})
    };

    updateUserInDatabase()
      .then(() => (window.location.href = "mainPage"))
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

