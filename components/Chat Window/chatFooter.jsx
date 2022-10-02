import styles from "./styles.module.css";
import { Box, IconButton, Input } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/components/Firebase/firebase";
import firebase from 'firebase/compat/app'
import { useContext } from 'react';
import { UserContext, SelectedChatContext } from '@/components/Context/context';

export default function ChatFooter() {
  const [textMessage, setTextMessage] = useState("");
  const chatPath = [useContext(SelectedChatContext), "messages"].join("/");
  const user = useContext(UserContext);

  const handleInputChange = (e) => {
    setTextMessage(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (textMessage === "") return
    setTextMessage("");
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, chatPath), {
      profilePicUrl: user.photoURL,
      author: user.displayName,
      text: textMessage,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);
  };

  return (
    <form onSubmit={handleOnSubmit}>

    <Box borderColor="gray.400" className={styles.chatFooter}>

      <Input
        placeholder="Aa"
        flex={1}
        onChange={handleInputChange}
        value={textMessage}
      />
      <IconButton
        variant="ghost"
        aria-label="Add Chat"
        isRound={true}
        icon={<ArrowRightIcon />}
        size="md"
        fontSize={14}
        type="submit"
      />
    </Box>
    </form>
  );
}
