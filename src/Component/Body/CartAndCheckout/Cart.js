import React from "react";
import { Box, Flex, Table, Tbody, Text, Thead, Td, Tr, Input, Button, Checkbox, Stack, Image, Menu, MenuButton, Icon, MenuList, MenuItem, HStack, useNumberInput, Select } from "@chakra-ui/react";
import GenerateCart from "./GenerateCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { CartDetails, updateCartDetails } from "../../../Redux/actionCreators";
import PaymentSummary from "./PaymentSummary.js";

const mapStateToProps = (State) => {
  return {
    cart: State.cart,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    cartDetails: () => dispatch(CartDetails()),
    updateCartDetails: (book, isSelected) => dispatch(updateCartDetails(book, isSelected)),
  }
}

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
    })
    setCheckedItems([e.target.checked, e.target.checked]);
  }

  return (
    <Flex
      w="100%"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-between"
    >
      <Box w={{ base: "100%", md: "70%" }} border="2px solid #319795">
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

        <GenerateCart isChecked={allChecked} />

      </Box>

      <PaymentSummary />

    </Flex>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)