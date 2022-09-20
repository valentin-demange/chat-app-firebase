import styles from "./styles.module.css";
import {
  Avatar,
  Box,
  Tag,
} from "@chakra-ui/react";


export default function ChatBody() {
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
  
  