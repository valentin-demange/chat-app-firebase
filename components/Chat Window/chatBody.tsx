import styles from "./styles.module.css";
import {
  Avatar,
  Box,
  Tag,
} from "@chakra-ui/react";
import React, { useState, useEffect, useContext } from "react";
import { db } from "utils/firebase";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { CurrentChatContext, CurrentUserContext } from 'utils/context';


export default function ChatBody() {


    const [messagesList, setMessagesList] = useState<JSX.Element[]>([])
    const chatMessagesPath = ["chats", useContext(CurrentChatContext), "messages"].join("/");
    const currentUser = useContext(CurrentUserContext);


    // chatBody.tsx is the only file which is not using firebase-hooks
    // It has been done on purpose to try a useEffect implementation on my own
    // and not rely on third party hooks
    useEffect(() => {
      const recentMessagesQuery = query(
        collection(db, chatMessagesPath),
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
              (currentUser.uid === message.authorId ?
              <MessageMe key={change.doc.id} text={message.text}></MessageMe> :
              <MessageOther key={change.doc.id} profilePicUrl={message.profilePicUrl} text={message.text}></MessageOther>)
            ]);
          }
        });
      });
  
      return () => {
        console.log("unsubscribe");
        setMessagesList([]);
        unsubscribe();
      };
    }, [chatMessagesPath]);
  

    return (
      <Box className={styles.chatBody}>
        <ul>{messagesList}</ul>
      </Box>
    );
  }

function MessageOther({profilePicUrl, text} : {profilePicUrl : string, text : string}) {
    return (
      <div className={styles.messageOther}>
        <Avatar
          size="sm"
          // name={author}
          src={profilePicUrl}
          marginRight="8px"
          marginTop="5px"
          backgroundColor="gray.100"
          // padding="10px"
        />
        <Tag fontSize="lg" padding="10px">
          {text}
        </Tag>
        <Box minWidth="15%" />
      </div>
    );
  }
  
  function MessageMe({text} : {text : string}) {
    return (
      <div className={styles.messageMe}>
        <Box minWidth="20%" />
        <Tag fontSize="lg" padding="10px" colorScheme="blue">
          {text}
        </Tag>
      </div>
    );
  }
  
  