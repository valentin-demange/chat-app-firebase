import styles from "./styles.module.css";
import { Box, IconButton, Input } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { collection, addDoc, getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "utils/firebase";
import firebase from "firebase/compat/app";
import { useContext } from "react";
import { CurrentUserContext, CurrentChatContext } from "utils/context";

export default function ChatFooter() {
  const [textMessage, setTextMessage] = useState("");
  const currentChat = useContext(CurrentChatContext);
  const chatPath = ["chats", currentChat].join("/");
  const msgCollectionPath = [chatPath, "messages"].join("/");
  const currentUser = useContext(CurrentUserContext);

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTextMessage(e.target.value);
  };

  const handleOnSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (textMessage === "") return;
    setTextMessage("");

    // Add a new document with a generated id.
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    const docRef = doc(db, "chats", currentChat);
    const docSnap = await getDoc(docRef).then(() =>
      updateDoc(docRef, {
        lastMessage: timestamp,
      })
    )//.then(() => handleGilbert());
    await addDoc(collection(db, msgCollectionPath), {
      profilePicUrl: currentUser.photoURL,
      authorId: currentUser.uid,
      text: textMessage,
      timestamp: timestamp,
    });

    // const handleGilbert = async () => {
    //   debugger

    //   if (docSnap.exists()) {
    //     const chatInfo = docSnap.data();
    //     const isGilbert =
    //       chatInfo.membersUid.filter(
    //         (uid: string) => currentUser.uid !== uid
    //       )[0] === "Gilbert";
    //     if (isGilbert) await chatWithOpenAi();
    //   } else {
    //     // doc.data() will be undefined in this case
    //     console.log("No such document!");
    //   }

    //   const chatWithOpenAi = async () => {
    //     // const isFirstMsg = chatInfo.lastTimest
    //     debugger;
    //     // chatInfo.hasOwnProperty('lastMessage')
    //   };
  
    // };

    // // Gilbert scenario
    // await handleGilbert();
  
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
