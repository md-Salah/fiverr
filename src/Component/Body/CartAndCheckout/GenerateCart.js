import React from 'react';
import { Box, Flex, Table, Tbody, Text, Thead, Td, Tr, Input, Button, Checkbox, Stack, Image, Menu, MenuButton, Icon, MenuList, MenuItem, HStack, useNumberInput, Select } from "@chakra-ui/react";
import Spinner from './Spinner';
import { connect } from 'react-redux';
import { CartDetails, updateCartDetails } from '../../../Redux/actionCreators';
import { useEffect } from 'react';

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

function GenerateCart(props) {
    const [checkedItems, setCheckedItems] = React.useState([false, true]);

    useEffect(() => {
        props.cartDetails();
    }, []);

    const singleCheck = (book) => {
        // console.log("single");
        return (
            <Checkbox
                mr="15px"
                isChecked={book.isSelected}
                onChange={(e) => {
                    console.log(e.target.checked);
                    props.updateCartDetails(book, e.target.checked);
                    setCheckedItems([e.target.checked, book.isSelected]);
                    window.location.reload(false);
                }
                }
            />)
    }

    const allCheck = (book) => {
        // console.log(props.isChecked);
        props.updateCartDetails(book, props.isChecked);
        // window.location.reload(true);
        return (
            <Checkbox
                mr="15px"
                isChecked={props.isChecked}
                onChange={(e) => {
                    // console.log(e.target.checked);
                    setCheckedItems([e.target.checked, book.isSelected]);
                }
                }
            />
        )
    }

    // console.log(props.cart);

    const GenerateCartBooks = props.cart.map((book) => {
        return (
            <Flex
                flexDirection={{ base: "column", md: "row" }}
                justifyContent="space-between"
                alignItems="center"
                mt="20px"
                className="Shadow"
                m="10px"
                p="15px"
            >
                <Flex w={{ base: "100%", md: "60%" }}>
                    <Flex w="15px">
                        {/* {props.isChecked ? allCheck(book) : singleCheck(book)} */}
                        {singleCheck(book)}
                        <Image maxW="70px" src={book.img} />
                    </Flex>

                    <Box ml="20px">
                        <Text>{book.bookName}</Text>
                        <Text>{book.bookPublisher}</Text>
                        <Text>{"(" + book.bookCover + ")"}</Text>
                    </Box>
                </Flex>

                <Flex
                    mt={{ base: "20px", md: "initial" }}
                    w={{ base: "100%", md: "40%" }}
                    justifyContent="space-between"
                >
                    <Spinner />

                    <Box textAlign="right" ml="40px">
                        <Text>{book.bookPrice}</Text>
                        <Text textDecoration="line-through" color="red" fontSize="sm">
                            {parseInt(book.bookPrice) + 50}
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        );
    });

    return (
        <div>
            {GenerateCartBooks}
        </div>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(GenerateCart);


