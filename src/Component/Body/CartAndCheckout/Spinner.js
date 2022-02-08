import React from 'react';
import { Box, Flex, Table, Tbody, Text, Thead, Td, Tr, Input, Button, Checkbox, Stack, Image, Menu, MenuButton, Icon, MenuList, MenuItem, HStack, useNumberInput, Select } from "@chakra-ui/react";
import { useState } from 'react';
import { updateBookCount } from '../../../Redux/actionCreators';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        updateBookCount: (book, bookCount) => dispatch(updateBookCount(book, bookCount)),
    }
}

function Spinner(props) {
    const [NoOfBooks, setNoOfBooks] = useState(props.book.bookCount);

    const handleOnClickIncrement = (e) => {
        if (NoOfBooks < 100) {
            setNoOfBooks(NoOfBooks + 1);
            window.location.reload(false);
        }
    }

    const handleOnClickDecrement = (e) => {
        if (NoOfBooks > 1) {
            setNoOfBooks(NoOfBooks - 1);
            window.location.reload(false);
        }
    }

    props.updateBookCount(props.book, NoOfBooks);

    return (
        <HStack maxW="320px">
            <Button onClick={(e) => handleOnClickDecrement(e)}>-</Button>
            <Input w="40px" px="auto" textAlign="center" value={NoOfBooks} />
            <Button onClick={(e) => handleOnClickIncrement(e)}>+</Button>
        </HStack>
    );
}

export default connect(null, mapDispatchToProps)(Spinner);
