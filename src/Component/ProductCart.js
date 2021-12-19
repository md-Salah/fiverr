import React from "react";
import "./ProductCart.css";
import {
  Box,
  Flex,
  Text,
  Image,
  Grid,
  GridItem,
  Button,
  Heading,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import Slider from "infinite-react-carousel";

export default function ProductCart() {
  return (
    <Box h="460px" bg="white">
      <Box px={{ base: "30px", lg: "60px", xl: "90px" }}>
        <Heading
          mb="20px"
          pt="25px"
          color={"black"}
          fontWeight={"medium"}
          fontSize={{ base: "lg", md: "30" }}
          textAlign={{ base: "center", md: "left" }}
          fontFamily={"Mina"}
        >
          Popular Now
        </Heading>
        <Flex
          bg="white"
          h="100%"
          justifyContent={{ base: "center", sm: "space-around" }}
        >
          <Box>
            <Product />
          </Box>
          <Box display={{ base: "none", sm: "initial" }}>
            <Product />
          </Box>
          <Box display={{ base: "none", md: "initial" }}>
            <Product />
          </Box>
          <Box display={{ base: "none", lg: "initial" }}>
            <Product />
          </Box>
          <Box display={{ base: "none", xl: "initial" }}>
            <Product />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

function Product() {
  return (
    <Link to="/BookDetails">
      <Box
        h="340px"
        w="240px"
        py='1'
        px='20px'
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        className="ProductContainer"
      >
        <Image mt='3px' mx="auto" w="auto" h="85%" src="../../Books/book.jpg" />

        <Text
          h="55px"
          className="BookTitle"
          textAlign={"center"}
          pt="12px"
          fontSize={"20px"}
        >
          {"লীলাবতীর মৃত্যু"}
        </Text>
        <Text pb="2" textAlign="center" fontSize={"14px"}>
          New: {120} Tk / Old: {60} Tk
        </Text>

        <Flex h="45" w="100%" justifyContent={"center"}>
          <Button
            h="8"
            w="100%"
            _hover={{ "background-color": "#1dbf73", color: "white" }}
          >
            <Text px="2" fontFamily={"Mina"} fontWeight={"medium"}>
              View Details
            </Text>
          </Button>
        </Flex>
      </Box>
    </Link>
  );
}

const SimpleSlider = () => {
  <Slider dots>
    <Flex
      bg="white"
      h="100%"
      justifyContent={{ base: "center", sm: "space-around" }}
    >
      <Box>
        <Product />
      </Box>
      <Box display={{ base: "none", sm: "initial" }}>
        <Product />
      </Box>
      <Box display={{ base: "none", md: "initial" }}>
        <Product />
      </Box>
      <Box display={{ base: "none", lg: "initial" }}>
        <Product />
      </Box>
      <Box display={{ base: "none", xl: "initial" }}>
        <Product />
      </Box>
    </Flex>
  </Slider>;
};
