import React from 'react'
import {
    Box,
    Text,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button
  } from '@chakra-ui/react';
  import BookFormat from './BookFormat';

const BookDrawer = ({
    toggle,
    setToggle,
    cover,
    setCover,
    condition,
    setCondition,
    print,
    setPrint,
    isOpen,
    onOpen,
    onClose
}) => {
  return (
    <Box w={"100vw"}>
        <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader 
                    borderBottomWidth='1px' 
                    backgroundColor={"#008080"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <Text color="#fff">
                        Select Format
                    </Text>
                    <Text
                        fontWeight={"semibold"}
                        cursor="pointer"
                        color="#fff"
                        onClick={onClose}
                    >
                        Done
                    </Text>
                </DrawerHeader>
                <DrawerBody>
                    <BookFormat
                        toggle={toggle}
                        setToggle={setToggle}
                        cover={cover}
                        setCover={setCover}
                        condition={condition}
                        setCondition={setCondition}
                        print={print}
                        setPrint={setPrint}
                    />
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </Box>
  )
}

export default BookDrawer