import React, { useState, useEffect } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import "./ProductCart.css";

export default function PopoverData() {

  const trigger = "Author" || "Genre" || "Publisher" || "Character";
  const categoryName = [
    "Humayun Ahmed",
    "Zafor iqbal",
    "Jk Rowling",
    "Mario Puzo",
    "zahir Rayhan",
    "সেবা প্রকাশনী",
    "তিন গোয়েন্দা",
    "মাসুদ রানা",
    "ওয়েস্টার্ন",
    "Sherlock Holmes",
    "হিমু",
    "মিসির আলী",
  ];

  const NameButton = categoryName.map((name, i) => {
    if (i <= 10) {
      return (
        <Button
          borderRadius={"full"}
          border="1px solid green"
          px="2"
          m="1"
          color="green"
          _hover={{ color: "red" }}
          size="xs"
        >
          {name}
        </Button>
      );
    }
  });

  return (
    <Box bg="white" className="Shadow">
      <Box w="100%" px={{ base: "30px", lg: "60px", xl: "90px" }}>
        <Flex fontSize={"sm"} justifyContent={"center"}>
          {NameButton}
        </Flex>
      </Box>
    </Box>
  );
}
