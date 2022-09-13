import { Box } from "@chakra-ui/react";
import styles from "@/styles/mainPage.module.css";
import { IconButton } from "@chakra-ui/react";
import {
  HamburgerIcon,
  SettingsIcon,
  MoonIcon,
  SunIcon,
  AddIcon,
  QuestionIcon,
  WarningIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";

export default function ChatApp() {
  return (
    <div className={styles.container}>
      <div className={styles.sideContainer}>
        <IconButton
          variant="ghost"
          aria-label="More Actions"
          isRound={true}
          icon={<HamburgerIcon />}
          size="lg"
        />
        <IconButton
          variant="ghost"
          aria-label="Add Chat"
          isRound={true}
          icon={<AddIcon />}
          size="lg"
        />
        <IconButton
          variant="ghost"
          aria-label="Toggle Dark Mode"
          isRound={true}
          icon={<MoonIcon />}
          size="lg"
        />
      </div>
      <div className={styles.chatContainer}>
        <p>Tata</p>
      </div>
    </div>
  );
}
