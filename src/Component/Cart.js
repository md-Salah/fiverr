import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function Cart() {
  return (
    <Flex
      border={"2px solid yellow"}
      borderRadius={"7px"}
      w="100%"
      flexDirection={"row"}
    >
    
        <Box w='70%' bg='red'> Hello </Box>
        <Box w='30%' bg='green'> Summary </Box>


    </Flex>
  );
}
