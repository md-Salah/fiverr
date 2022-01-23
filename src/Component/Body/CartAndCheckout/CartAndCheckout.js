import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import PopoverData from "../BookDetails/PopoverData";
// import BookDetailsTemplate from "../BookDetails/BookDetailsTemplate";
import ProductCart from "../CartAndCheckout/ProductCart";
import "../CartAndCheckout/ProductCart.css";
import Cart from "../CartAndCheckout/Cart";
// import ShippingDetails from "../Component/ShippingDetails";

export default function CartAndCheckout() {
    return (
        <Box h="100vh" pt={{ base: '60px', md: '90px' }}>
            <Box mx={{ base: "30px", lg: "60px", xl: "90px" }} mt="40px">
                <Cart />
            </Box>
        </Box>
    );
}
