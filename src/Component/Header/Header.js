import React from "react";
import { Box, Flex, Image, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Search from "../Body/Search";

export default function Header({ children }) {
  return (
    <Box>
      <Box
        w="100%"
        h="50px"
        bg="teal"
        position="fixed"
        top="0"
        zIndex="banner"
        boxShadow='md'
      >
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
              pl={{ base: "20px", sm: "150px", lg: "450px"}}
              pb="0.5px"
              color="white"
              fontWeight={"normal"}
              justifyContent="space-between"
              alignItems={"center"}
            >
              {/* <Search isNav={true} /> */}
              {NavbarText("Popular Genre", "/")}
              {NavbarText("Author", "/")}
              {NavbarText("Publisher", "/")}
              {NavbarText("Sign In", "/")}

              <Link to="/CheckOut">
                <Flex h="40px" w="35px" pb="5px">
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
    <Link
      to={link}
      display={{ base: "none", lg: "initial" }}
    >
      {text}
    </Link>
  );
}
