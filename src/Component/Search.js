import React from "react";
import { Box, Flex, Image, Input, Button } from "@chakra-ui/react";

export default function Search() {
  return (
    <Box
      px={{ base: "30px", lg: "60px", xl: "90px" }}
      maxW={{ base: "100%", md: "50%" }}
      bg="red"
    >
      <Flex h="45px" float="right">
        <Box
          w={{ lg: "500px" }}
          bg="white"
          borderLeftRadius={"5px"}
          display={"flex"}
          alignItems={"center"}
        >
          <Box mx="2" display="flex" alignItems="center">
            <Image h="20px" src="../../search icon.png" alt="search" />
          </Box>
          <Input
            h="inherit"
            pl="0"
            pb="0.5"
            border={"none"}
            type={"search"}
            placeholder="Find Services"
          />
        </Box>
        <Button
          h="inherit"
          pb="0.5"
          bg="#1dbf73"
          color="white"
          borderLeftRadius={"0"}
          borderRightRadius={"5px"}
        >
          Search
        </Button>
      </Flex>
    </Box>
  );
}
