import styles from "./mainPage.module.css";
import SideBar from "@/components/Side Bar/main";
import ChatWindow from "@/components/Chat Window/main";
import { doc, collection, getDocs } from "firebase/firestore";
import { useDocument, useCollection } from "react-firebase-hooks/firestore";
import { db } from "@/components/Firebase/firebase";
import "firebase/compat/firestore";
import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import "firebase/compat/auth";
import { auth } from "@/components/Firebase/firebase";
import { UserContext, SelectedChatContext } from "@/components/Context/context";

export default function ChatApp() {
  const [user, loading, error] = useAuthState(auth as any);
  const [selectedChat, setSelectedChat] = useState("chats/ZhHxuhbk84MtmyZpdi7y");

  if (user)
    return (
      <div className={styles.container}>
        <UserContext.Provider value={user}>
          <SelectedChatContext.Provider value={selectedChat}>
            <SideBar />
            <ChatWindow />
          </SelectedChatContext.Provider>
        </UserContext.Provider>
      </div>
    );

  if (loading) return <div>Loading ...</div>;
  if (error) return <div>Error</div>;
}
