import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import PopoverData from "../Component/PopoverData";
import BookDetailsTemplate from "../Component/BookDetailsTemplate";
import ProductCart from "../Component/ProductCart";
import "../Component/ProductCart.css";

export default function CartAndCheckout() {
  return (
    <Box h="100vh" w="100%">
      <PopoverData />
      <Box mx={{ base: "30px", lg: "60px", xl: "90px" }}>
        <Box
          border={"2px solid yellow"}
          mt="40px"
          p="19"
          display={{ base: "div", md: "flex" }}
          justifyContent={"space-between"}
          alignContent={"center"}
        ></Box>
      </Box>

      <Box
        className="Shadow"
        mt="50px"
        mx={{ base: "30px", lg: "60px", xl: "90px" }}
      >
        <ProductCart title="Related Books From Previous Order History" />
      </Box>
      <Box
        className="Shadow"
        mt="50px"
        mx={{ base: "30px", lg: "60px", xl: "90px" }}
      >
        <ProductCart title="Horro Collection" />
      </Box>
    </Box>
  );
}
