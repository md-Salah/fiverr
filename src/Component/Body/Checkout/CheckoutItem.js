import React from 'react';
import { 
  Box, 
  Text, 
  Image, 
  Stack,
  Select,
  Flex,
  Tooltip,
  SimpleGrid,
  IconButton
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {DeleteIcon} from "@chakra-ui/icons";

const CheckoutItem = () => {
  return (
    <Box
      textColor={"#333333"}
      my={"5"}
      w={"100%"}
    >
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
          w={{ base: "35%", md: "30%", lg: "25%" }}
          mr={"6"}
        />
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          w={"100%"}
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
                w={"100%"}
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
            <SimpleGrid 
              columns={2} 
              columnGap={2} 
              rowGap={2}
              w={{ base: "100%", md: "200px", lg: "350px" }}
              fontSize={"sm"}
            >
              <Flex
                flexDirection={"column"}
              >
                <Text 
                  fontWeight={"semibold"}
                >
                  Cover
                </Text>
                <Select 
                  placeholder='Hardcover'
                  size={"sm"}
                >
                  <option 
                    fontSize={"sm"}
                  >
                    Paperback
                  </option>
                </Select>
              </Flex>
              <Flex
                flexDirection={"column"}
                fontSize={"sm"}
              >
                <Text 
                  fontWeight={"semibold"}
                >
                  Quality
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
                flexDirection={"column"}
                fontSize={"sm"}
              >
                <Text 
                  fontWeight={"semibold"}
                >
                  Condition
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
              <Flex
                flexDirection={"column"}
                fontSize={"sm"}
              >
                <Text 
                  fontWeight={"semibold"}
                >
                  Publisher
                </Text>
                <Select 
                  placeholder='Prothoma Prokashoni'
                  size={"sm"}
                >
                  <option>Salauddin Boighor</option>
                </Select>
              </Flex>
            </SimpleGrid>
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
        <Tooltip label="Remove">
          <IconButton
            colorScheme={"red"}
            variant={"outline"}
          >
            <DeleteIcon 
              cursor={"pointer"}
            />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  )
}

export default CheckoutItem