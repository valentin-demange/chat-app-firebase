import styles from "./mainPage.module.css";
import SideBar from "@/components/Side Bar/main"
import ChatWindow from "@/components/Chat Window/main";

export default function ChatApp() {
  return (
    <div className={styles.container}>
      <SideBar />
      <ChatWindow />
    </div>
  );
}
