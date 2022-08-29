import React from 'react'
import {
    Box,
    Flex,
    Text,
    Select
  } from "@chakra-ui/react";
import MainContainer from '../Component/GeneralComponent/MainContainer'
import OrderDetails from '../Component/Body/Order/OrderDetails';

const OrderScreen = () => {
  return (
    <Box
        pt={"130px"}
        pb={"50px"}
    >
        <MainContainer>
            <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
            >
                <Text
                    className="Bangla"
                    fontSize={"2xl"}
                    fontWeight={"semibold"}
                    py={"4"}
                >
                    Customer Orders 
                </Text>
                <Flex>
                    <Text 
                        mr="10px" 
                        pt="4px" 
                        fontWeight="bold"
                        color={"gray.700"}
                    >
                        Sort by
                    </Text>
                    <Select w="150px" size="sm" bg="white">
                        <option value="Most Popular">Most Popular</option>
                        <option value="BestSeller">BestSeller</option>
                        <option value="Title (A to Z)">Title (A to Z)</option>
                        <option value="Title (Z to A)">Title (Z to A)</option>
                    </Select>
                </Flex>
            </Flex>
            <OrderDetails/>
        </MainContainer>
    </Box>
  )
}

export default OrderScreen