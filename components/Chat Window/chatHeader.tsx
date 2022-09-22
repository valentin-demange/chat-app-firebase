import styles from "./styles.module.css";
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
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";


export default function ChatHeader() {
    return (
      <Box borderColor="gray.400" className={styles.chatHeader}>
        <Avatar name="Kola Tioluwani" src="https://bit.ly/tioluwani-kolawole" />
        <div className={styles.chatHeaderLabel}>
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
            <MenuItem icon={<ExternalLinkIcon />}>Leave</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    );
  }