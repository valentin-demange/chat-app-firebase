import { signOut } from "firebase/auth";
import "firebase/compat/auth";
import {auth} from "../../utils/firebase";

import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useContext } from 'react';
import { UserContext } from 'utils/context';


const logout = () => {
  signOut(auth);
  window.location = "/";
};

export default function UserAvatar() {
  const user = useContext(UserContext);

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
        <MenuList>
          <MenuItem icon={<ExternalLinkIcon />} onClick={() => logout()}>
            Log Out
          </MenuItem>
        </MenuList>
      </Menu>
    );
  }

