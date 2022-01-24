import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import PopoverData from "./PopoverData";
import BookDetailsTemplate from './BookDetailsTemplate/BookDetailsTemplate';
// import ProductCart from "../CartAndCheckout/ProductCart";
// import "../CartAndCheckout/ProductCart.css";

export default function BookDetails() {
    return (
        <Box h="100vh" pt='67px'>
            <PopoverData />
            <BookDetailsTemplate />
            {/* <Box
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
            </Box> */}
        </Box>
    );
}
