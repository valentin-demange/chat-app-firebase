import styles from "./styles.module.css";
import {
  Box,
  IconButton,
  Input,
} from "@chakra-ui/react";
import {
  ArrowRightIcon,
} from "@chakra-ui/icons";


export default function ChatFooter() {
    return (
      <Box borderColor="gray.400" className={styles.chatFooter}>
        <Input placeholder="Aa" flex={1} />
        <IconButton
          variant="ghost"
          aria-label="Add Chat"
          isRound={true}
          icon={<ArrowRightIcon />}
          size="md"
          fontSize={14}
        />
      </Box>
    );
  }
  