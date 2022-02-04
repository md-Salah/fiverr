import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Box, Flex, Text, Image, Grid, GridItem, Button, Heading, LinkBox, LinkOverlay, } from "@chakra-ui/react";

class Book extends Component {
    handleOnClick = (book) => {
        // console.log(book);
    }

    render() {
        return (
            <Link to={{
                pathname: "/BookDetails",
                state: [{ id: this.props.id }]
            }}>
                <Box
                    h="340px"
                    w="240px"
                    py="1"
                    px="20px"
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    className="ProductContainer"
                    onClick={() => this.handleOnClick(this.props)}
                >
                    <Image mt="3px" mx="auto" w="auto" h="85%" src="../../Books/book.jpg" />

                    <Text
                        h="55px"
                        className="BookTitle"
                        textAlign={"center"}
                        pt="12px"
                        fontSize={"20px"}
                    >
                        {this.props.bookName}
                    </Text>
                    <Text pb="2" textAlign="center" fontSize={"14px"}>
                        New: {this.props.priceNew} Tk / Old: {this.props.priceOld} Tk
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
        )
    }
}

export default Book;
