import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import PopoverData from "../Component/PopoverData";
import BookDetailsTemplate from "../Component/BookDetailsTemplate";

export default function BookDetails() {
  return (
    <Box h="100vh">
      <PopoverData />
      <BookDetailsTemplate />
    </Box>
  );
}

