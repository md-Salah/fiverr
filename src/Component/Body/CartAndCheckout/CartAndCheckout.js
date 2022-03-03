import React, { Component } from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";
import PopoverData from "../BookDetails/PopoverData";
// import BookDetailsTemplate from "../BookDetails/BookDetailsTemplate";
// import ProductCart from "../CartAndCheckout/ProductCart";
import "../CartAndCheckout/Books/Stylesheet/Books.css";
// import withRouter from 'react-router'
import Cart from "../CartAndCheckout/Cart";
import { SendBookPhoto } from "./SendBookPhoto";
import { PaymentAndConfirm } from "./PaymentAndConfirm";
// import ShippingDetails from "../Component/ShippingDetails";

class CartAndCheckout extends Component {
  render() {
    return (
      <Box h="100vh" pt={{ base: "60px", md: "90px" }}>
        <Box mx={{ base: "30px", lg: "60px", xl: "90px" }} mt="40px">
          <Cart />

          <Grid templateColumns={{base:'repeat(1, 1fr)', md:'repeat(3, 1fr)'}} gap='55px'>
            <GridItem colSpan={{base: '1', md:'2'}}>
              <SendBookPhoto />
            </GridItem>
            <GridItem>
              <PaymentAndConfirm />
            </GridItem>
          </Grid>
        </Box>
      </Box>
    );
  }
}

export default CartAndCheckout;
