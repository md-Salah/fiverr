import React from "react";
import {
  Box,
  Flex,
  Image,
  Button,
  Text,
  Stack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon, Icon } from "@chakra-ui/icons";
import { HiOutlineShoppingCart } from "react-icons/hi";

import SearchBar from "../Body/Search/SearchBar";
import MainContainer from "../GeneralComponent/MainContainer";

export default function Header({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        w="100%"
        h="50px"
        bg="header"
        position="fixed"
        top="0"
        zIndex="banner"
        boxShadow="md"
      >
        <MainContainer>
          <Flex
            w="100%"
            h="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            {/* Hamburger Drawer for Mobile display */}
            <Icon
              as={HamburgerIcon}
              boxSize="25px"
              onClick={onOpen}
              display={{ base: "flex", lg: "none" }}
            />
            <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Login or Name</DrawerHeader>
                <DrawerBody>
                  <Stack direction="column" fontWeight="bold" gap="3">
                    {NavbarText("Popular Genre", "/")}
                    {NavbarText("Author", "/")}
                    {NavbarText("Publisher", "/")}
                    {NavbarText("Sign In", "/")}
                  </Stack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
            {/* Hamburger Menu end */}

            {/* Company Logo */}
            <Link to="/">
              {/* <Image
                maxW={{ base: "170px", sm: "130px", xl: "150px" }}
                mt="0.5"
                ml={{ base: "30px", sm: "0" }}
                src="../../Logo.png"
              /> */}
              <Text fontSize="lg" mt="5px" fontWeight="bold" color="teal">
                Pathok Point
              </Text>
            </Link>
            {/* Logo ends here */}

            <Flex alignItems="center">
              {/* Navigation Links */}
              <Stack
                direction="row"
                display={{ base: "none", lg: "flex" }}
                gap="7"
              >
                {NavbarText("Popular Genre", "/")}
                {NavbarText("Author", "/")}
                {NavbarText("Publisher", "/")}
                {NavbarText("Sign In", "/")}
              </Stack>
              {/* Navigation Links ends */}

              {/* Cart Icon */}
              <Link to="/CheckOut">
                <Icon
                  ml="30px"
                  mt="4px"
                  boxSize="25px"
                  _hover={{ color: "link" }}
                  as={HiOutlineShoppingCart}
                />
              </Link>
              {/* Cart Icon ends here */}
            </Flex>
          </Flex>
        </MainContainer>
      </Box>
      {children}
    </>
  );
}

function NavbarText(text, link) {
  return (
    <Link to={link}>
      <Text color="text" _hover={{ color: "link" }}>
        {text}
      </Text>
    </Link>
  );
}
