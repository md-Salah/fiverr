import React from 'react';
import { Box, Flex, Table, Tbody, Text, Thead, Td, Tr, Input, Button, Checkbox, Stack, Image, Menu, MenuButton, Icon, MenuList, MenuItem, HStack, useNumberInput, Select } from "@chakra-ui/react";

function Spinner() {
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
            step: 1,
            defaultValue: 1,
            min: 1,
            max: 100,
        });

    const inc = getIncrementButtonProps();
    const dec = getDecrementButtonProps();
    const input = getInputProps({ isReadOnly: true });

    return (
        <HStack maxW="320px">
            <Button {...dec}>-</Button>
            <Input w="40px" px="auto" textAlign="center" {...input} />
            <Button {...inc}>+</Button>
        </HStack>
    );
}

export default Spinner;
