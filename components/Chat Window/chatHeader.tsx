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
        <Avatar name="Gilbert" backgroundColor="gray.200" src="blabla-profile-pic.png" />
        <div className={styles.chatHeaderLabel}>
          <Heading as="h1" size="md" fontWeight="normal">
            Blabla 19-90
          </Heading>
          <Text fontSize={13} fontWeight="normal" color="gray.400">
            To be implemented
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
            <MenuItem icon={<ExternalLinkIcon />} isDisabled>Leave</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    );
  }