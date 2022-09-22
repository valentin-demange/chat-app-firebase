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
  Heading,
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
          <DrawerHeader>New Chat</DrawerHeader>

          <DrawerBody padding="10px 10px">
            <Person />
            <Person />
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

function Person() {
  return (
    <Button className={styles.sbDrawerItem} variant="ghost" padding={0} minW="100%">
      <Avatar name="Kola Tioluwani" src="https://bit.ly/tioluwani-kolawole" />
      <div className={styles.sbDrawerItemLabel}>
        <Text fontSize="18px" fontWeight="normal">
          Valentin Demange Delagarde
        </Text>
        {/* <Text fontSize={13} fontWeight="normal" color="gray.400">
          Last message at 11:15
        </Text> */}
      </div>
    </Button>
  );
}
