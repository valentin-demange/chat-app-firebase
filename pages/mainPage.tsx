import styles from "./mainPage.module.css";
import SideBar from "@/components/sideBar"
import ChatWindow from "@/components/chatWindow";

export default function ChatApp() {
  return (
    <div className={styles.container}>
      <SideBar />
      <ChatWindow />
    </div>
  );
}
