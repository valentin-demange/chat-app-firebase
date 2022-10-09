import React, { useState, useEffect, useContext } from "react";
import {
  IconButton,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerBody,
  DrawerCloseButton,
  useDisclosure,
  Avatar,
  Alert,
  AlertIcon,
  Text,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import styles from "./styles.module.css";
import { getFirestore, collection } from "firebase/firestore";
import {
  useCollection,
  useCollectionData,
} from "react-firebase-hooks/firestore";
import { db } from "utils/firebase";
import { userAgent } from "next/server";
import { CurrentChatContext, UserContext } from "utils/context";
import PrivateChatDrawerItem from "./privateChatDrawerItem";

export default function PrivateChatDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useContext(UserContext);
  const [value, loading, error] = useCollectionData(collection(db, "users"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  if (loading) return <div></div>;
  if (error) return <div>Error</div>;

  if (value) {
    // value.map((val) => console.log(val.photoURL))
    const listItems = value
      .filter((val) => val.uid !== user.uid)
      .map((val) => <PrivateChatDrawerItem key={val.uid} userUid={val.uid} handleCloseDrawer={onClose} />);

    return (
      <>
        <IconButton
          onClick={onOpen}
          variant="ghost"
          aria-label="New Chat"
          isRound={true}
          icon={<AddIcon />}
          fontSize={20}
          size="lg"
        />

        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          size="xs"
          // maxW="500px"
          // finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>New Private Chat</DrawerHeader>

            <DrawerBody padding="10px 10px">
              {/* <Alert status="warning" marginBottom="10px">
                <AlertIcon />
                Function not yet supported
              </Alert> */}
              {listItems}
            </DrawerBody>

            {/* <DrawerFooter>
            <Button variant="ghost" mr={3} onClick={onClose} colorScheme="red">
              Cancel
            </Button>
          </DrawerFooter> */}
          </DrawerContent>
        </Drawer>
      </>
    );
  }
}
