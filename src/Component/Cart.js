import React from "react";
import {
  Box,
  Flex,
  Table,
  Tbody,
  Text,
  Thead,
  Td,
  Tr,
  Input,
  Button,
  Checkbox,
  Stack,
  Image,
  Menu,
  MenuButton,
  Icon,
  MenuList,
  MenuItem,
  HStack,
  useNumberInput,
  Select,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  const Payable = {
    SubTotal: 200,
    DeliveryCharge: 16,
    WeightCharge: 0,
    Total: 216,
    Promo: 20,
    PromoCode: "NewUser20",
    Payable: 196,
  };

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

  const [checkedItems, setCheckedItems] = React.useState([false, false]);
  const allChecked = checkedItems.every(Boolean);

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
      Price: 60,
      DiscountPrice: 80,
      Cover: "Paperback",
      Category: "অনুবাদ: প্রবন্ধ",
      Rating: "***",
      Review: "5 people reviewed",
      AvailableCopy: 100,
      Condition: "Old",
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
      Price: 60,
      DiscountPrice: 80,
      Cover: "Paperback",
      Category: "অনুবাদ: প্রবন্ধ",
      Rating: "***",
      Review: "5 people reviewed",
      AvailableCopy: 100,
      Condition: "Old",
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
      Price: 60,
      DiscountPrice: 80,
      Cover: "Paperback",
      Category: "অনুবাদ: প্রবন্ধ",
      Rating: "***",
      Review: "5 people reviewed",
      AvailableCopy: 100,
      Condition: "Old",
      PrintType: "Original",
    },
  ];

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
              onChange={(e) =>
                setCheckedItems([e.target.checked, checkedItems[1]])
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
    <Flex
      w="100%"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-between"
    >
      <Box w={{ base: "100%", md: "70%" }} border="2px solid #319795">
        <Flex
          px="20px"
          bg="#319795"
          color="white"
          h="70px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Checkbox
              size="lg"
              isChecked={allChecked}
              onChange={(e) =>
                setCheckedItems([e.target.checked, e.target.checked])
              }
            >
              <Text mt="5px">Select All</Text>
            </Checkbox>
          </Box>
          <Box>
            <Text fontSize="lg" textAlign="right" fontWeight='bold' >
              Payable {196} Tk
            </Text>
            <Text fontSize="sm" textAlign="right" color='whiteAlpha.800' >
              You Save Total {100} Tk
            </Text>
          </Box>
        </Flex>

        <Box pt="5px">{GenerateCartBooks}</Box>
      </Box>

      <Box w={{ base: "100%", md: "26%" }} mt={{ base: "20px", md: "initial" }}>
        <Table variant="striped" size="sm" border="2px solid #319795">
          <Thead bg="#319795">
            <Tr fontWeight="bold" bg="#319795">
              <Td colSpan="2" textAlign="center" color="white">
                Checkout Summary
              </Td>
            </Tr>
          </Thead>
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
      </Box>

    </Flex>
  );
}
