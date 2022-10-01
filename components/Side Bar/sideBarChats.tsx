import { Box } from "@chakra-ui/react";
import styles from "./styles.module.css";
import { Avatar, Heading, Button, Text } from "@chakra-ui/react";

export default function SideBarChats() {
  return (
    <Box className={styles.sbItemsContainer}>
      <SideBarChatItem />
    </Box>
  );
}

function SideBarChatItem() {
  return (
    <Button className={styles.sbItem} variant="ghost" padding={0}>
      <Avatar name="Blabla profile pic" backgroundColor="gray.200" src="blabla-profile-pic.png" />
      <div className={styles.sbItemLabel}>
        <Text fontSize="18px" fontWeight="normal">
          Blabla 19-90
        </Text>
        <Text fontSize={13} fontWeight="normal" color="gray.400" paddingTop="3px">
          To be implemented
        </Text>
      </div>
    </Button>
  );
}
