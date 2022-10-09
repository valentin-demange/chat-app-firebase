import React, { useState, useEffect } from "react";
import { db } from "utils/firebase";
// import { doc, collection, getDocs, addDoc } from "firebase/firestore";
// import { collection, addDoc, getDocs, doc, onSnapshot } from "firebase/firestore";
import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  setDoc,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import {
  useCollection,
  useCollectionData,
  useDocument,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";

function Item({chatRef}) {

    const [value1, loading1, error1] = useDocumentData(
      chatRef,
    {}
  );

      // console.log({value1})

  return <div>
    toto
    {value1.private ? "privé" : "public"}
    </div>

}

export default function App() {
  const title = "Blabla";
  const lastMessageTimestamp = "19h";

  // LECTURE DOCUMENT
  // const [value1, loading1, error1] = useDocumentDataOnce(
  //   doc(db, "chats", "public"),
  //   {}
  // );

  // // console.log({ value1 });

  // LECTURE COLLECTION
  // const dbQuery = query(
  //   collection(db, "/users/s8EZPnz4RgTRxXaEUTOiQSwDxIC3/chats"),
  //   orderBy("timestamp", "desc"),
  //   limit(1)
  // );
  const [value, loading, error] = useCollectionData(
    collection(db, "/users/s8EZPnz4RgTRxXaEUTOiQSwDxIC3/chats"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  console.log(value)
  
  const listItem = value ? value.map((val) => <Item chatRef={val.chatRef} />) : {}

  // console.log({ value });

  // ECRITURE 1
  // const Test = async () => {

  //   const userRef = doc(db, 'users', 'tonton');
  //   console.log("popie")
  //   setDoc(userRef, {
  //     name: "Create new user3",
  //   });


    // ECRITURE 2
  //   const ref = db.collection("users").doc("toto");
  //   ref.get().then((document) => {
  //     if (document.exists) {
  //       console.log("Updating user info");
  //       updateDoc(doc(db, 'users', 'tata'), {
  //         name: "Update user"
  //       });
  //   } else {
  //       console.log("Writing user info");
  //       setDoc(doc(db, 'users', 'toto'), {
  //         name: "Create new user",
  //       });
  //   }
  // }).catch((error) => {
  //     console.log("Error getting document:", error);
  // });
// }
// Test();

  return (
    <div>
        {listItem}
        {/* {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Document: Loading...</span>}
        {value && <span>Document: {value.name}</span>} */}
    </div>
  );
}
