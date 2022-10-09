import styles from "./styles.module.css";
import { Box, Avatar, Button, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import AvatarUser from "@/components/Others/avatarUser";
import { UserContext } from "utils/context";
import { db } from "utils/firebase";
import { collection, doc } from "firebase/firestore";
import {
  useDocumentData,
  useCollectionData,
} from "react-firebase-hooks/firestore";
import SideBarChatItem from "@/components/Side Bar/sideBarChatItem";

export default function SideBarChats() {
  const user = useContext(UserContext);
  const [value, loading, error] = useCollectionData(
    collection(db, ["users", user.uid, "chats"].join("/")),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  if (loading) return <div></div>;
  if (error) return <div>Error</div>;
  if (value) {
    const listItem = value.map((val) => (
          <SideBarChatItem key={val.chatId} chatId={val.chatId} />
        ));
        // console.log(value)
    return <Box className={styles.sbItemsContainer}>{listItem}</Box>;
  }
}

