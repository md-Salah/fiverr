import React from "react";
import { Box, Flex, Text, Image, Input, Icon, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar({ children }) {
  return (
    <Box h="100vh" bg="#b3435e">
      <Box w="100%" h="80px" bg="#b3435e">
        <Box
          bg={{ base: "blackAlpha.700", sm: "none" }}
          h="100%"
          px={{ base: "30px", lg: "60px", xl:'90px'}}
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
              mr='2'
              maxW="7"
              src="../../menu.png"
              alt="Menu"
            />
            <Link to="/">
              <Image maxW={{base:"130px", xl:'150px'}} mt="0.5" src="../../Logo.png" />
            </Link>

            <Flex
              w={{base:'80px', sm:'1000px'}}
              pb="0.5px"
              color="white"
              fontWeight={"semibold"}
              justifyContent={"flex-end"}
              alignItems={"center"}
            >
              <Link to="/">
                <Text mr="10" display={{ base: "none", lg: "initial" }}>
                  Fiverr Business
                </Text>
              </Link>
              <Link to="/">
                <Text mr="10" display={{ base: "none", lg: "initial" }}>
                  Explore
                </Text>
              </Link>
              <Link to="/">
                <Text mr="10" display={{ base: "none", xl: "initial" }}>
                  English
                </Text>
              </Link>
              <Link to="/">
                <Text mr="10" display={{ base: "none", xl: "initial" }}>
                  $USD
                </Text>
              </Link>
              <Link to="/">
                <Text mr="10" display={{ base: "none", lg: "initial" }}>
                  Become a Seller
                </Text>
              </Link>
              <Link to="/">
                <Text mr="10" display={{ base: "none", md: "initial" }}>
                  Sign In
                </Text>
              </Link>
              <Button
                bg="none"
                border="2px"
                h="8"
                w="20"
                _hover={{ background: "#1dbf73", border: "none" }}
              >
                <Link to="/">Join</Link>
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Box>
      {children}
    </Box>
  );
}
