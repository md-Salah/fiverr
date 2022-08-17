import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Books from "../CartAndCheckout/Books/Books";
import Banner from "./Banner/Banner";
import "../CartAndCheckout/Books/Stylesheet/Books.css";
import MainContainer from "../../GeneralComponent/MainContainer";
import OurServices from "./OurServices/OurServices";
import SimpleSlider from "../../Sliders/SimpleSlider/SimpleSlider";

export default function Home() {
  return (
    <Box>
      <Banner />
      <OurServices />
      <MainContainer>
        {/* <Books title="Popular Books" />

        <Books title="English Original Print Books" /> */}
        {/* <Flex>
          {
            allBooks.map((book) => (
              <Book book={book} />
            ))
          }
        </Flex> */}
        
        <SimpleSlider title="বইমেলা ২০২২ এর নতুন বই"/>

        {/* <ProductCart title="Suggestion Based On Your Likes" /> */}
      </MainContainer>
    </Box>
  );
}
