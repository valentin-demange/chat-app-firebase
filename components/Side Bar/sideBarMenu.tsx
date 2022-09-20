import { Box } from "@chakra-ui/react";
import styles from "./styles.module.css";

import {
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import {
  MoonIcon,
  AddIcon,
} from "@chakra-ui/icons";
import CurrentUser from "../Firebase/currentUser";

export default function SideBarMenu() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <Box className={styles.sbMenuContainer}>
        <CurrentUser />
  
        <IconButton
        //   onClick={}
          variant="ghost"
          aria-label="Toggle Dark Mode"
          isRound={true}
          icon={<AddIcon />}
        //   fontSize={20}
          size="lg"
        />
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
  