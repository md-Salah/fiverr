import React from 'react';
import { Text, Box, Button, Flex, Grid, Image, Table, TableCaption, Tbody, Tr, Td, Thead, Th, Container, List, ListItem, ListIcon, Divider, } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const PriceHolder = function (props) {
    console.log(props.selectedBook.priceOld);
    return (
        <Box
            w={{ base: "46%", md: "90%" }}
            h={{ base: "initial", md: "46%" }}
            className="Shadow"
            display="flex"
            flexDirection={"column"}
            alignItems={"center"}
        >
            <Text
                textAlign={"center"}
                fontSize={{ base: "20px", md: "28px", lg: "40px" }}
                mt={{ base: "5px", md: "10px" }}
                color={"red"}
                fontWeight={"bold"}
            >
                {props.selectedBook.priceNew + " Tk"}
            </Text>
            <Text
                textAlign={"center"}
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                my="4px"
            >
                {props.selectedBook.Condition + ' & ' + props.selectedBook.Cover}
            </Text>
            <Link to="/CheckOut">
                <Button
                    my="5px"
                    mx="5px"
                    maxW="180px"
                    w="80%"
                    fontWeight={"normal"}
                    _hover={{ "background-color": "yellow" }}
                    size="md"
                >
                    Add to Cart
                </Button>
            </Link>
        </Box>
    );
};

export default PriceHolder;
