import React from "react";
import { Box, Flex, Image, Input, Button } from "@chakra-ui/react";

export default function Search(props) {
    let isNav = props.isNav;
  return (
    <Flex h={isNav? "35px":"40px"} mt={isNav? 0 :"5px"} justifyContent={{ base: "center", sm: "left" }} mr={isNav? '70px': 0}>
      <Flex bg="white" borderLeftRadius={"5px"} alignItems={"center"}>
        <Box mx="2" display="flex" alignItems="center">
          <Image h="20px" src="../../search icon.png" alt="search" />
        </Box>
        <Input
          w={isNav? { base: "140px", sm: "160px", md: "200px", xl: "300px" } :{ base: "180px", sm: "300px", md: "400px", xl: "550px" }}
          h="inherit"
          pl="0"
          mr="10px"
          variant="Flushed"
          type={"search"}
          placeholder="Search by Book or Author Name"
        />
      </Flex>
      <Button
        h="inherit"
        bg='#319795'
        color="white"
        borderLeftRadius={"0"}
        borderRightRadius={"5px"}
      >
        Search
      </Button>
    </Flex>
  );
}
