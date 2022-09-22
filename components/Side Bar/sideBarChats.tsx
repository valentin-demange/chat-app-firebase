import { Box } from "@chakra-ui/react";
import styles from "./styles.module.css";
import { Avatar, Heading, Button, Text } from "@chakra-ui/react";

export default function SideBarChats() {
  return (
    <Box className={styles.sbItemsContainer}>
      <SideBarChatItem />
      <SideBarChatItem />

    </Box>
  );
}

function SideBarChatItem() {
  return (
    <Button className={styles.sbItem} variant="ghost" padding={0}>
      <Avatar name="Kola Tioluwani" src="https://bit.ly/tioluwani-kolawole" />
      <div className={styles.sbItemLabel}>
        <Text fontSize="18px" fontWeight="normal">
          Valentin Demange Delagarde
        </Text>
        <Text fontSize={13} fontWeight="normal" color="gray.400" paddingTop="3px">
          Last message at 11:15
        </Text>
      </div>
    </Button>
  );
}
