import React, { Component } from 'react';
import { Text, Box, Button, Flex, Grid, Image, Table, TableCaption, Tbody, Tr, Td, Thead, Th, Container, List, ListItem, ListIcon, Divider, } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { CartInput } from '../../../../Redux/actionCreators';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        CartInput: (bookId, bookName, bookPrice, bookPublisher, bookCondition, bookCover) => dispatch(CartInput(bookId, bookName, bookPrice, bookPublisher, bookCondition, bookCover))
    }
}

class PriceHolder extends Component {
    state = {
        AddedToCart: false,
    }

    render() {
        // console.log(this.props);
        const handleAddToCartButton = (bookId, bookName, bookPrice, bookPublisher, bookCondition, bookCover) => {
            this.props.CartInput(bookId, bookName, bookPrice, bookPublisher, bookCondition, bookCover);
            this.setState({
                AddedToCart: true,
            })
        }

        const addToCartButton = () => {
            return (
                <Button
                    my="5px"
                    mx="5px"
                    maxW="180px"
                    w="80%"
                    fontWeight={"normal"}
                    size="md"
                    onClick={() => handleAddToCartButton(this.props.id, this.props.name, this.props.price, this.props.publisher, this.props.condition, this.props.cover)}
                >
                    Add to Cart
                </Button>
            )
        }

        const goToCartButton = () => {
            return (
                <Link to="/CheckOut">
                    <Button
                        colorScheme='yellow'
                        my="5px"
                        mx="-5px"
                        maxW="180px"
                        w="120%"
                        fontWeight={"normal"}
                        size="md"
                    >
                        Go to Cart
                    </Button>
                </Link>
            )
        }

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
                    {this.props.price + " Tk"}
                </Text>
                <Text
                    textAlign={"center"}
                    fontSize={{ base: "sm", md: "md", lg: "lg" }}
                    my="4px"
                >
                    {this.props.condition + ' & ' + this.props.cover}
                </Text>

                {this.state.AddedToCart ? goToCartButton() : addToCartButton()}
            </Box >
        );
    }
};

export default connect(null, mapDispatchToProps)(PriceHolder);
