import styles from "./styles.module.css";
import {
  Avatar,
  Box,
  Tag,
} from "@chakra-ui/react";
import React, { useState, useEffect, useContext } from "react";
import { db } from "@/components/Firebase/firebase";
// import { doc, collection, getDocs, addDoc } from "firebase/firestore";
// import { collection, addDoc, getDocs, doc, onSnapshot } from "firebase/firestore";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { SelectedChatContext } from '@/components/Context/context';


export default function ChatBody() {

    const [messagesList, setMessagesList] = useState<JSX.Element[]>([]);
    const chatPath = [useContext(SelectedChatContext), "messages"].join("/");
  
    useEffect(() => {
      // Create the query to load the last x messages and listen for new ones.
      const recentMessagesQuery = query(
        collection(db, chatPath),
        orderBy("timestamp"),
        limit(20)
      );
  
      const unsubscribe = onSnapshot(recentMessagesQuery, function (snapshot) {
        snapshot.docChanges().forEach(function (change) {
          var message = change.doc.data();
          console.log("updating messagesList");
          if (change.type === "added") {
            setMessagesList((ml) => [
              ...ml,
              <MessageOther key={change.doc.id} author={message.author} profilePicUrl={message.profilePicUrl} text={message.text}></MessageOther>
            ]);
          } else {
            console.log("holi");
          }
        });
      });
  
      return () => {
        console.log("unsubscribe");
        setMessagesList([]);
        unsubscribe();
      };
    }, [chatPath]);
  

    return (
      <Box className={styles.chatBody}>
        <ul>{messagesList}</ul>
      </Box>
    );
  }

interface MessageProps {
  author: string;
  profilePicUrl: string;
  text: string;
}
function MessageOther({author, profilePicUrl, text}: MessageProps) {
    return (
      <div className={styles.messageOther}>
        <Avatar
          size="sm"
          name={author}
          src={profilePicUrl}
          marginRight="8px"
          marginTop="5px"
          // padding="10px"
        />
        <Tag fontSize="lg" padding="10px">
          {text}
        </Tag>
        <Box minWidth="15%" />
      </div>
    );
  }
  
  function MessageMe() {
    return (
      <div className={styles.messageMe}>
        <Box minWidth="20%" />
        <Tag fontSize="lg" padding="10px" colorScheme="blue">
          Vengo bien la verdad. Y vos que haces de tu vida boludo ?
        </Tag>
      </div>
    );
  }
  
  