import React from 'react';
import { 
  Box, 
  Text, 
  Image, 
  Stack,
  IconButton,
  Select,
  Flex,
  Button
} from '@chakra-ui/react';

const CheckoutItem = () => {
  return (
    <Box
      textColor={"#333333"}
    >
      <Text 
        fontWeight={"600"}
        fontSize={"x-large"}
        mb={"30px"}
        className="font_bn"
      >
        আপনার শপিং ব্যাগে ৩টি আইটেম আছে
      </Text>
      <Box 
        display={"flex"}
        alignItems={"flex-start"}
        w={"400px"}
        borderBottom={"1px solid #ccc"}
        pb={"5"}
      >
        <Image 
          src={"https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/7fcc71de9_195615.jpg"}
          alt="cart item"
          w={"30%"}
          mr={"4"}
        />
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          w={"60%"}
        >
          <Stack>
            <Text 
              fontWeight={"600"}
              display={"inline-flex"}
              className="font_bn"
              color={"#333333"}
              fontSize={"large"}
            >
              দ্য মিরাকল মর্নিং
              <Text 
                color={"GrayText"}
                ml={"2"}
              >
                × 3
              </Text>
            </Text>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              fontSize={"sm"}
            >
              <Text mr={"2"}>
                Cover:
              </Text>
              <Select 
                placeholder='Hardcover'
                size={"sm"}
              >
                <option>Paperback</option>
              </Select>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              fontSize={"sm"}
            >
              <Text mr={"2"}>
                Quality:
              </Text>
              <Select 
                placeholder='Premium (Local)'
                size={"sm"}
              >
                <option>Publisher Print</option>
                <option>Local Print</option>
              </Select>
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              fontSize={"sm"}
            >
              <Text mr={"2"}>
                Condition:
              </Text>
              <Select 
                placeholder='Good'
                size={"sm"}
              >
                <option>New</option>
                <option>Like New</option>
                <option>Very Good</option>
                <option>Acceptable</option>
              </Select>
            </Flex>
            <Text
              fontWeight={"600"}
              display={"inline-flex"}
              color={"GrayText"}
            >
              960 ৳
              <Text
                fontWeight={"light"}
                ml={"2"}
                textDecoration={"line-through"}
                textDecorationThickness={"1px"}
              >
                1,200 ৳
              </Text>
            </Text>
          </Stack>
        </Box>
      </Box>
      <Button colorScheme={"teal"}>
        আরও বই ক্রয় করুন 
      </Button>
    </Box>
  )
}

export default CheckoutItem