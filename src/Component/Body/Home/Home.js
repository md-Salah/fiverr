import React from "react";
import { Box } from "@chakra-ui/react";
import Books from "../CartAndCheckout/Books/Books";
import Banner from "./Banner/Banner";
import "../CartAndCheckout/Books/Stylesheet/Books.css";
import MainContainer from "../../GeneralComponent/MainContainer";

export default function Home() {
  return (
    <Box h="100vh">
      <Banner />
      <MainContainer>
        <Books title="Popular Books" />

        <Books title="English Original Print Books" />

        {/* <ProductCart title="Suggestion Based On Your Likes" /> */}
      </MainContainer>
    </Box>
  );
}
