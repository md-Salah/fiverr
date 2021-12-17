import React from "react";
import { Box, list } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import Search from "../Component/Search";

export default function Home() {
  return (
    <Box h="100vh" px={{ base: "30px", lg: "60px", xl:'90px'}}>
      <Box maxW={{base:'100%', md: '50%'}} >
        <Text
          color="white"
          fontSize={{ base: "32", lg: "40px", "xl": "48px" }}
          fontWeight="bold"
          mt="100px"
          lineHeight='55px'
        >
          Find the perfect <i> freelance </i> services for your business
        </Text>
      </Box>
      <Search />
    </Box>
  );
}
