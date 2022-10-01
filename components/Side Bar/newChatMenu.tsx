import React, { useState } from "react";
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

// const [toto, setToto] = React.useState('1')

export default function NewChatMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          <Alert status="warning" marginBottom="10px">
              <AlertIcon />
              Function not yet supported
            </Alert>
            <Person1 />
            <Person2 />
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

function Person1() {
  return (
    <Button
      className={styles.sbDrawerItem}
      variant="ghost"
      padding={0}
      minW="100%"
    >
      <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
      <div className={styles.sbDrawerItemLabel}>
        <Text fontSize="18px" fontWeight="normal">
          Ryan Florence
        </Text>
      </div>
    </Button>
  );
}

function Person2() {
  return (
    <Button
      className={styles.sbDrawerItem}
      variant="ghost"
      padding={0}
      minW="100%"
    >
      <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
      <div className={styles.sbDrawerItemLabel}>
        <Text fontSize="18px" fontWeight="normal">
          Prosper Otemuyiwa
        </Text>
      </div>
    </Button>
  );
}
