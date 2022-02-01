import React from 'react';
import { Box, Flex, Table, Tbody, Text, Thead, Td, Tr, Input, Button, Checkbox, Stack, Image, Menu, MenuButton, Icon, MenuList, MenuItem, HStack, useNumberInput, Select } from "@chakra-ui/react";
import Spinner from './Spinner';

const CartBooks = [
    {
        Bookid: 100005222,
        Title: "লীলাবতীর মৃত্যু",
        Author: "হুমায়ূন আহমেদ",
        Translator: "মোতাহের হোসেন চৌধুরী",
        Publisher: "বিশ্বসাহিত্য কেন্দ্র",
        ISBN: 9841803593,
        Edition: "2nd Editor, 2015",
        NumberOfPages: 75,
        Country: "বাংলাদেশ",
        Language: "বাংলা",
        img: "../../Books/book1.jpg",
        Price: 100,
        DiscountPrice: 80,
        Cover: "Hard Cover",
        Category: "অনুবাদ: প্রবন্ধ",
        Rating: "***",
        Review: "5 people reviewed",
        AvailableCopy: 100,
        Condition: "New",
        PrintType: "Original",
    },
    {
        Bookid: 100005222,
        Title: "লীলাবতীর মৃত্যু",
        Author: "হুমায়ূন আহমেদ",
        Translator: "মোতাহের হোসেন চৌধুরী",
        Publisher: "বিশ্বসাহিত্য কেন্দ্র",
        ISBN: 9841803593,
        Edition: "2nd Editor, 2015",
        NumberOfPages: 75,
        Country: "বাংলাদেশ",
        Language: "বাংলা",
        img: "../../Books/book1.jpg",
        Price: 100,
        DiscountPrice: 80,
        Cover: "Hard Cover",
        Category: "অনুবাদ: প্রবন্ধ",
        Rating: "***",
        Review: "5 people reviewed",
        AvailableCopy: 100,
        Condition: "New",
        PrintType: "Original",
    }
];

function GenerateCart() {
    const [checkedItems, setCheckedItems] = React.useState([false, true]);

    const GenerateCartBooks = CartBooks.map((book) => {
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
                    <Flex w="105px">
                        <Checkbox
                            mr="15px"
                            isChecked={checkedItems[0]}
                            onChange={(e) => {
                                console.log(e);
                                setCheckedItems([e.target.checked, checkedItems[1]])
                            }
                            }
                        ></Checkbox>
                        <Image maxW="70px" src={book.img} />
                    </Flex>

                    <Box ml="20px">
                        <Text>{book.Title}</Text>
                        <Text>{book.Publisher}</Text>
                        <Text>{"(" + book.Cover + ")"}</Text>
                    </Box>
                </Flex>

                <Flex
                    mt={{ base: "20px", md: "initial" }}
                    w={{ base: "100%", md: "40%" }}
                    justifyContent="space-between"
                >
                    <Spinner />

                    <Box textAlign="right" ml="40px">
                        <Text>200 Tk</Text>
                        <Text textDecoration="line-through" color="red" fontSize="sm">
                            350 Tk
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


export default GenerateCart;


