import styles from "./styles.module.css";
import { Box, IconButton, Input } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { collection, addDoc, setDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "utils/firebase";
import firebase from 'firebase/compat/app'
import { useContext } from 'react';
import { CurrentUserContext, CurrentChatContext } from 'utils/context';

export default function ChatFooter() {
  const [textMessage, setTextMessage] = useState("");
  const currentChat = useContext(CurrentChatContext);
  const chatPath = ["chats", currentChat].join("/");
  const msgCollectionPath = [chatPath, "messages"].join("/");
  const currentUser = useContext(CurrentUserContext);

  const handleInputChange = (e) => {
    setTextMessage(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (textMessage === "") return
    setTextMessage("");
    // Add a new document with a generated id.
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    await updateDoc(doc(db, "chats", currentChat), {
      lastMessage: timestamp,
    });
    const docRef = await addDoc(collection(db, msgCollectionPath), {
      profilePicUrl: currentUser.photoURL,
      authorId: currentUser.uid,
      text: textMessage,
      timestamp: timestamp,
    }); 
    // debugger
    console.log("Document written with ID: ", docRef.id);
  };

  return (
    <form onSubmit={handleOnSubmit}>

    <Box borderColor="gray.400" className={styles.chatFooter}>

      <Input
        placeholder="Type your message.."
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
