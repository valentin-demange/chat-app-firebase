import { Box } from "@chakra-ui/react";
import styles from "./sideBar.module.css";
import Link from "next/link";
import {
  IconButton,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  MoonIcon,
  AddIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";

export default function SideBar() {
  return (
    <Box borderColor="gray.400" className={styles.sbMainContainer}>
      <SideBarUtils />
      <SideBarChats />
    </Box>
  );
}

function SideBarUtils() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box className={styles.sbUtilsContainer}>
      {/* <Heading fontSize={25} flex={1}>
        Chats
      </Heading> */}
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="ghost"
          isRound={true}
          fontSize={20}
          size="lg"
        />
        <MenuList>
        <MenuItem icon={<AddIcon />}>New Chat</MenuItem>
          <Link href="/">
            <a>
              <MenuItem icon={<ExternalLinkIcon />}>Log Out</MenuItem>
            </a>
          </Link>
        </MenuList>
      </Menu>
      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="Toggle Dark Mode"
        isRound={true}
        icon={<MoonIcon />}
        fontSize={20}
        size="lg"
      />
    </Box>
  );
}

function SideBarChats() {
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
