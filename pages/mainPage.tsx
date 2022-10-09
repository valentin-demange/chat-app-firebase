import styles from "./mainPage.module.css";
import SideBar from "@/components/Side Bar/main";
import ChatWindow from "@/components/Chat Window/main";
import { doc, collection, getDocs } from "firebase/firestore";
import { useDocument, useCollection } from "react-firebase-hooks/firestore";
import { db } from "utils/firebase";
import "firebase/compat/firestore";
import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import "firebase/compat/auth";
import { auth } from "utils/firebase";
import {
  UserContext,
  CurrentChatContext,
  SetCurrentChatContext,
} from "utils/context";

export default function ChatApp() {
  const [user, loading, error] = useAuthState(auth as any);
  const [currentChat, setCurrentChat] = useState("public");

  if (user)
    return (
      <div className={styles.container}>
        <UserContext.Provider value={user}>
          <CurrentChatContext.Provider value={currentChat}>
            <SetCurrentChatContext.Provider value={setCurrentChat}>
              <SideBar />
              <ChatWindow />
            </SetCurrentChatContext.Provider>
          </CurrentChatContext.Provider>
        </UserContext.Provider>
      </div>
    );

  if (loading) return <div></div>;
  if (error) return <div>Error</div>;
}
