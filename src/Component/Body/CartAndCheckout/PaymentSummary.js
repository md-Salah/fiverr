import React from 'react';
import { Box, Flex, Table, Tbody, Text, Thead, Td, Tr, Input, Button, Checkbox, Stack, Image, Menu, MenuButton, Icon, MenuList, MenuItem, HStack, useNumberInput, Select } from "@chakra-ui/react";
import ShippingDetails from "./ShippingDetails";
import { connect } from 'react-redux';
import { useEffect } from 'react';

const mapStateToProps = (State) => {
    return {
        cart: State.cart,
    }
}

function PaymentSummary(props) {
    let Payable = {
        SubTotal: 0,
        DeliveryCharge: 16,
        WeightCharge: 0,
        Total: 0,
        Promo: 0,
        PromoCode: "",
        Payable: 0,
    };

    props.cart.map((item) => {
        if(item.isSelected){
            Payable.SubTotal += item.bookPrice * item.bookCount;
        }
    })

    Payable.Total += Payable.SubTotal + Payable.DeliveryCharge + Payable.WeightCharge;
    Payable.Payable = Payable.Total - Payable.Promo;

    return (
            <Table variant="striped" size="sm">
                <Tbody>
                    <Tr>
                        <Td w="70%">SubTotal</Td>
                        <Td w="30%" textAlign="right">
                            {Payable.SubTotal + " Tk"}
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Delivery Charge</Td>
                        <Td textAlign="right">{Payable.DeliveryCharge + " Tk"}</Td>
                    </Tr>
                    <Tr>
                        <Td>Weight Charge</Td>
                        <Td textAlign="right">{Payable.WeightCharge + " Tk"}</Td>
                    </Tr>
                    <Tr>
                        <Td>Total</Td>
                        <Td textAlign="right">{Payable.Total + " Tk"}</Td>
                    </Tr>
                    <Tr>
                        <Td colSpan="2">
                            <Flex mx="auto">
                                <Input
                                    bg="white"
                                    w={{ base: "70%", "2xl": "75%" }}
                                    type="text"
                                    placeholder="Have a Promo Code?"
                                    size="sm"
                                ></Input>
                                <Button
                                    w={{ base: "30%", "2xl": "25%" }}
                                    colorScheme="teal"
                                    fontWeight="normal"
                                    ml="5px"
                                    size="sm"
                                >
                                    Apply
                                </Button>
                            </Flex>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>Promo ( {Payable.PromoCode} ) </Td>
                        <Td textAlign="right" color="red" textDecoration="line-through">
                            {"-"}
                            {Payable.Promo + " Tk"}
                        </Td>
                    </Tr>
                    <Tr fontWeight="bold">
                        <Td>Payable</Td>
                        <Td textAlign="right">{Payable.Payable + " Tk"}</Td>
                    </Tr>
                </Tbody>
            </Table>
        // Checkout section ends here
    )
}

export default connect(mapStateToProps)(PaymentSummary);
