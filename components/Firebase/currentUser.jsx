import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import "firebase/compat/auth";
import firebase from "./firebase";

import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const auth = firebase.auth();

const logout = () => {
  signOut(auth);
  window.location = "/";
};

export default function CurrentUser() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <div>
        <div>
          <DefaultUser />
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error</p>
      </div>
    );
  }
  if (user) {
    return (
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<Avatar size="sm" src={user.photoURL} rel={"noreferrer"}/>}
          variant="ghost"
          isRound={true}
          fontSize={20}
          size="lg"
        />
        {/* <MenuButton as={Button}>
        <Avatar size="sm" src={user.photoURL} rel={"noreferrer"} />
        </MenuButton> */}
        <MenuList>
          <MenuItem icon={<ExternalLinkIcon />} onClick={() => logout()}>
            Log Out
          </MenuItem>
        </MenuList>
      </Menu>
    );
  }
  return (
    <div>
      <DefaultUser />
    </div>
  );
}

function DefaultUser() {
  return (
    <IconButton
      variant="ghost"
      aria-label="User"
      isRound={true}
      icon={<Avatar size="sm" />}
      size="lg"
    />
  );
}
