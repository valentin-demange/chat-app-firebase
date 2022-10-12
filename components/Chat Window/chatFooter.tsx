import styles from "./styles.module.css";
import { Box, IconButton, Input } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { writeMessage, checkGilbert } from "utils/firebase";
import { useContext } from "react";
import { CurrentUserContext, CurrentChatContext } from "utils/context";

export default function ChatFooter() {
  const [textMessage, setTextMessage] = useState("");
  const currentChat = useContext(CurrentChatContext);
  const chatPath = ["chats", currentChat].join("/");
  const currentUser = useContext(CurrentUserContext);

  const askGilbert = async (textMessage:string, isFirstMessage:boolean) => {
    console.log(['textMessage:' + textMessage])
    if (isFirstMessage) console.log(['First Message to Gilbert'])
    else console.log('Not the first message to Gilbert')
  }

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTextMessage(e.target.value);
  };

  const handleOnSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (textMessage === "") return;
    setTextMessage("");

    const {isGilbert, isFirstMessage} = await checkGilbert(currentChat)
    writeMessage(currentChat, currentUser, textMessage)
    if (isGilbert) {
      await askGilbert("I am el famoso Gilbert", isFirstMessage)
      // Write to Gilbert
    }

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
