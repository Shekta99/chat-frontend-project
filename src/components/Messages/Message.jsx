import { Box, Center, Text, useColorModeValue } from "@chakra-ui/react";
import CryptoJS from "crypto-js";

const Message = ({ body, align }) => {
  const message = CryptoJS.AES.decrypt(body, "password").toString(
    CryptoJS.enc.Utf8
  );
  return (
    <>
      <Box py={6} ml={align == "right" ? "60%" : "0%"}>
        <Box
          maxW={"320px"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
        >
          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            {message}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Message;
