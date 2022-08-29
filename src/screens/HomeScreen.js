import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Books from "../Component/Body/CartAndCheckout/Books/Books";
import Banner from "../Component/Body/Home/Banner/Banner";
// import "../CartAndCheckout/Books/Stylesheet/Books.css";
import MainContainer from "../Component/GeneralComponent/MainContainer";
import OurServices from "../Component/Body/Home/OurServices/OurServices";
import SimpleSlider from "../Component/Sliders/SimpleSlider/SimpleSlider";

export default function HomeScreen() {
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
