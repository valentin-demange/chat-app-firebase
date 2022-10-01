import React, { useState, useEffect } from "react";
import { db } from "@/components/Firebase/firebase";
// import { doc, collection, getDocs, addDoc } from "firebase/firestore";
// import { collection, addDoc, getDocs, doc, onSnapshot } from "firebase/firestore";
import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

export default function App() {
  const [messagesList, setMessagesList] = useState<message[]>([]);
  interface message {
    id: string;
    name: string;
    text: string;
  }

  useEffect(() => {
    // Create the query to load the last x messages and listen for new ones.
    const recentMessagesQuery = query(
      collection(db, "messages"),
      // orderBy("timestamp", "desc"),
      limit(20)
    );

    // console.log({recentMessagesQuery})
    // console.log("setting onSnapshot")
    // Start listening to the query.
    const unsubscribe = onSnapshot(recentMessagesQuery, function (snapshot) {
      snapshot.docChanges().forEach(function (change) {
        var message = change.doc.data();
        console.log("updating messagesList");
        if (change.type === "added") {
          setMessagesList((ml) => [
            ...ml,
            {
              id: change.doc.id,
              name: message.name,
              text: message.text,
            },
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
  }, []);

  const listItems = messagesList.map((message) => (
    <li key={message.id}>{message.name + " : " + message.text}</li>
  ));

  return <div><ul>{listItems}</ul></div>;
}
