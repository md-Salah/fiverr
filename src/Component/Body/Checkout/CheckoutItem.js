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
import { Link } from 'react-router-dom';

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
        w={{ base: "300px", md: "350px", lg: "500px" }}
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
          w={"80%"}
        >
          <Stack>
            {/* <Box
              display={"flex"}
              alignItems={"center"}
              // w={"300px"}
            > */}
              <Box
                display={"flex"}
                alignItems={"center"}
                w={"90%"}
                mr={"5"}
              >
                <Text 
                  fontWeight={"600"}
                  display={"flex"}
                  className="font_bn"
                  color={"#333333"}
                  fontSize={"large"}
                  _hover={{ textColor: "#008080", textDecoration: "underline" }}
                  flexFlow={"1"}
                >
                  <Link to="/BookDetails">
                    দ্য মিরাকল মর্নিং
                  </Link>
                </Text>
                <Text 
                  color={"GrayText"}
                  ml={"2"}
                >
                  × 3
                </Text>
              </Box>
              {/* <Select 
                placeholder='3'
                size={"sm"}
              >
                <option>1</option>
                <option>2</option>
              </Select>
            </Box> */}
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
    </Box>
  )
}

export default CheckoutItem