import { Box } from "@chakra-ui/react";
import styles from "./styles.module.css";
import {
  Avatar,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";

export default function SideBarChats() {
    return (
      <Box className={styles.sbChatsContainer}>
        <SideBarChatItem />
        <SideBarChatItem />
      </Box>
    );
  }
  
  function SideBarChatItem() {
    return (
      <Button className={styles.sbChatItem} variant="ghost" padding={0}>
        <Avatar name="Kola Tioluwani" src="https://bit.ly/tioluwani-kolawole" />
        <div className={styles.sbChatLabel}>
          <Heading as="h1" size="md" fontWeight="normal">
            Hola que tal
          </Heading>
          <Text fontSize={13} fontWeight="normal" color="gray.400">
            Last message at 11:15
          </Text>
        </div>
      </Button>
    );
  }
  