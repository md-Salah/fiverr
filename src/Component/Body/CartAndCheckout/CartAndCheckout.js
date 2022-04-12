import React, { Component } from "react";
import { Box, Divider, Grid, GridItem, MenuDivider } from "@chakra-ui/react";
// import BookDetailsTemplate from "../BookDetails/BookDetailsTemplate";
// import ProductCart from "../CartAndCheckout/ProductCart";
import "../CartAndCheckout/Books/Stylesheet/Books.css";
// import withRouter from 'react-router'
import Cart from "../CartAndCheckout/Cart";
import { PaymentAndConfirm } from "./PaymentAndConfirm";
import { SendBookPhoto } from "./SendBookPhoto";
import ShippingDetails from "./ShippingDetails";
import PaymentSummary from "./PaymentSummary";

class CartAndCheckout extends Component {
  render() {
    return (
      <Box minH="100vh" pt={{ base: "100px", md: "130px" }} bg="#cedeeb">
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap="50px"
          mx="250px"
          bg="white"
        >
          <GridItem colSpan={{ base: "1", md: "2" }}>
            <Cart />
          </GridItem>

          <GridItem mx='20px'>
            <SendBookPhoto />
          </GridItem>
          <GridItem mx='20px'>
            <PaymentSummary />
          </GridItem>

          <GridItem colSpan={{ base: "1", md: "2" }}>
            <Divider />
          </GridItem>
        </Grid>

        <ShippingDetails />

        {/* <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap="50px"
          mx="250px"
          mt='40px'
          bg='white'
          boxShadow='lg'
        >
          <GridItem>
            <ShippingDetails />
          </GridItem>

          <GridItem>
            <PaymentAndConfirm />
          </GridItem>
        </Grid> */}
      </Box>
    );
  }
}

export default CartAndCheckout;
