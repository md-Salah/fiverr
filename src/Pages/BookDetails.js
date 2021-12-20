import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import PopoverData from "../Component/PopoverData";
import BookDetailsTemplate from "../Component/BookDetailsTemplate";
import ProductCart from "../Component/ProductCart";
import '../Component/ProductCart.css'

export default function BookDetails() {
  return (
    <Box h="100vh">
      <PopoverData />
      <BookDetailsTemplate />
      <Box className="Shadow" mt='50px'  mx={{ base: "30px", lg: "60px", xl: "90px" }}>
        <ProductCart title="Related Books From Previous Order History"/>
      </Box>
      <Box className="Shadow" mt='50px'  mx={{ base: "30px", lg: "60px", xl: "90px" }}>
        <ProductCart title="Horro Collection"/>
      </Box>
    </Box>
  );
}

