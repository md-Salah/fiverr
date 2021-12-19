import React from "react";
import {
  Box,
  Flex,
  Image,
  Button,
  Text
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Search from "./Search";

export default function Navbar({ children }) {
  return (
    <Box h="100vh">
      <Box w="100%" h="80px" bg="#003815">
        <Box
          bg={{ base: "#1d5f73", sm: "none" }}
          h="100%"
          px={{ base: "30px", lg: "60px", xl: "90px" }}
          display={"flex"}
          alignItems={"center"}
        >
          <Flex
            mx="auto"
            w="100%"
            h="35px"
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Image
              display={{ xl: "none" }}
              mr="2"
              maxW="6"
              src="../../menu.png"
              alt="Menu"
            />
            <Link to="/">
              <Image
                maxW={{ base: "170px", sm: "130px", xl: "150px" }}
                mt="0.5"
                ml={{ base: "30px", sm: "0" }}
                src="../../Logo.png"
              />
            </Link>

            <Flex
              w={{ base: "80px", sm: "1000px" }}
              pb="0.5px"
              color="white"
              fontWeight={"normal"}
              justifyContent={"flex-end"}
              alignItems={"center"}
            >
              {/*<Search isNav={true} />*/}
              {NavbarText("Popular Genre", "/")}
              {NavbarText("Author", "/")}
              {NavbarText("Publisher", "/")}
              {NavbarText("Sign In", "/")}

              <Link to="/Cart">
                <Flex
                  h="40px"
                  w="35px"
                  _hover={{ width: "36px", height: "41px" }}
                  pb="5px"
                >
                  <Image src="../../cart.png" alt="V" />
                </Flex>
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Box>
      {children}
    </Box>
  );
}

function NavbarText(text, link) {
  return (
    <Text
      mr="10"
      display={{ base: "none", lg: "initial" }}
      _hover={{ "font-size": "17px", fontWeight: "bold" }}
    >
      {text}
    </Text>
  );
}
