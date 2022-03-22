import React from "react";
import {
  Box,
  Flex,
  Text,
  Checkbox,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import GenerateCart from "../CartAndCheckout/BooksAddedInCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { CartDetails, updateCartDetails } from "../../../Redux/actionCreators";

const mapStateToProps = (State) => {
  return {
    cart: State.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cartDetails: () => dispatch(CartDetails()),
    updateCartDetails: (book, isSelected) =>
      dispatch(updateCartDetails(book, isSelected)),
  };
};

function Cart(props) {
  const Payable = {
    SubTotal: 200,
    DeliveryCharge: 16,
    WeightCharge: 0,
    Total: 216,
    Promo: 20,
    PromoCode: "NewUser20",
    Payable: 196,
  };

  useEffect(() => {
    props.cartDetails();
  }, []);

  const [checkedItems, setCheckedItems] = React.useState([false, true]);
  const allChecked = checkedItems.every(Boolean);

  const handleOnChange = (e) => {
    console.log(e.target.checked);
    props.cart.map((book) => {
      // console.log(book.isSelected);
      props.updateCartDetails(book, e.target.checked);
    });
    setCheckedItems([e.target.checked, e.target.checked]);
  };

  return (
      <Box w='100%' minH="300px" boxShadow="base">
        {/*Heading of Cart */}
        <Flex
          px="20px"
          bg="#319795"
          color="white"
          h="70px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Checkbox
              size="lg"
              isChecked={allChecked}
              onChange={(e) => handleOnChange(e)}
            >
              <Text mt="5px">Select All</Text>
            </Checkbox>
          </Box>
          <Box>
            <Text fontSize="lg" textAlign="right" fontWeight="bold">
              Payable {196} Tk
            </Text>
            <Text fontSize="sm" textAlign="right" color="whiteAlpha.800">
              You Save Total {100} Tk
            </Text>
          </Box>
        </Flex>

        {/*body of cart showing added books in cart */}
        <GenerateCart isChecked={allChecked} />
      </Box>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
