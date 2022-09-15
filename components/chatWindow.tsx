import styles from "./chatWindow.module.css";
import Link from "next/link";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Heading,
  Input,
  Tag,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  ArrowRightIcon,
} from "@chakra-ui/icons";

export default function ChatWindow() {
  return (
    <div className={styles.chatContainer}>
      <ChatHeader />
      <ChatBody />
      <ChatFooter />
    </div>
  );
}

function ChatHeader() {
  return (
    <Box borderColor="gray.400" className={styles.chatHeader}>
      <Avatar name="Kola Tioluwani" src="https://bit.ly/tioluwani-kolawole" />
      <div className={styles.chLabel}>
        <Heading as="h1" size="md" fontWeight="normal">
          Hola que tal
        </Heading>
        <Text fontSize={13} fontWeight="normal" color="gray.400">
          Last message at 11:15
        </Text>
      </div>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="ghost"
          size="lg"
          isRound={true}
          fontSize={20}
        />
        <MenuList>
          <MenuItem icon={<AddIcon />}>Add a person</MenuItem>
          <MenuItem icon={<ExternalLinkIcon />}>Leave</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

function ChatBody() {
  return (
    <Box className={styles.chatBody}>
      <MessageOther />
      <MessageOther />
      <MessageMe />
      <MessageOther />
      <MessageMe />
      <MessageOther />
      <MessageOther />
      <MessageOther />
      <MessageOther />
    </Box>
  );
}

// interface MessageProps {
//   avatarSrc: string;
//   avatarBool: boolean;
//   message: string;
// }
function MessageOther() {
  return (
    <div className={styles.messageOther}>
      <Avatar
        size="sm"
        name="Kent Dodds"
        src="https://bit.ly/kent-c-dodds"
        marginRight="8px"
      />
      <Tag fontSize="lg" padding="10px">
        Hola, que tal todo ? Voy bien y vos que tal la vida de la puta madre que
        lo pario
      </Tag>
      <Box minWidth="15%" />
    </div>
  );
}

function MessageMe() {
  return (
    <div className={styles.messageMe}>
      <Box minWidth="20%" />
      <Tag fontSize="lg" padding="10px" colorScheme="blue">
        Vengo bien la verdad. Y vos que haces de tu vida boludo ?
      </Tag>
    </div>
  );
}
function ChatFooter() {
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
