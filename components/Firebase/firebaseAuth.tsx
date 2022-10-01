import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import "firebase/compat/auth";
import {auth} from "./firebase";
import { Button } from "@chakra-ui/react";

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
