import {
    Box,
    Flex,
    Text,
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionIcon,
    AccordionPanel,
    ListItem,
    OrderedList,
    Avatar,
    Badge,
    Button,
    Divider,
    Stack,
    Grid,
    GridItem,
    Image,
  } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import {types, orderList} from "../Admin/OrderList/OrderListData";
  
const OrderDetails = ({ type }) => {
    const selectedOrders = orderList.filter(
      (order) => type === order.orderStatus || type === "All"
    );
  
    const currentIndex = types.findIndex((value) => value === type);
  
    const handleClick = (index) => {
      {
        /*Change the status of the order by types[currentIndex+1] */
      }
    };
  
    return (
      <Accordion fontSize="sm" allowToggle allowMultiple>
        {orderList.map((order, index) => (
          <AccordionItem key={order.invoice}>
            <AccordionButton 
                fontSize="sm" 
                _expanded={{ bg: "gray.100" }}
                py={"3"}
            >
              <Flex
                flex="1"
                textAlign="left"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box minW="47%">
                  <Text>
                    Order ID - 12345678910
                  </Text>
                  <Text fontWeight={"semibold"}>
                    {order.phoneNumber[0]}
                  </Text>
                </Box>
                <Box minW="30%">
                  <Text color="teal" fontWeight="bold">
                    {"Total: " + order.total + " ৳"}
                  </Text>
                  <Badge colorScheme="teal" textAlign="right">
                    {"COD: " + (order.total - order.paid) + " ৳"}
                  </Badge>
                </Box>
              </Flex>
              <AccordionIcon />
            </AccordionButton>
  
            <AccordionPanel bg="gray.50" boxShadow={"base"} h={"full"}>
              {/*Book details */}
              <OrderedList mx={{ md: "50" }}>
                {order.books.map((book) => (
                  <ListItem 
                        key={order.invoice + book.title} 
                        py="2"
                        my={"2"}
                >
                    <Flex 
                        alignItems={"flex-start"}
                        justifyContent="space-between"
                    >
                        <Flex>
                            <Image 
                                src={book.image}
                                w={"50px"}
                                h={"100px"}
                                mr={"4"}
                            />
                            <Flex>
                                <Box>
                                <Link to="/bookDetails">
                                    <Text
                                        fontSize={"lg"}
                                        className={"Bangla"}
                                        _hover={{ 
                                            textDecoration: "underline",
                                            color: "teal" 
                                        }}
                                    >
                                    লীলাবতীর মৃত্যু
                                    </Text>
                                </Link>
                                <Flex>
                                    <Text 
                                        fontWeight={"thin"}
                                        mr={"1"}
                                    >
                                        by
                                    </Text>
                                    <Link to="/search">
                                        <Text
                                            fontSize={"sm"}
                                            color={"gray.600"}
                                            fontWeight={"semibold"}
                                            _hover={{ 
                                                textDecoration: "underline",
                                                color: "teal" 
                                            }}
                                        >
                                            {book.author}
                                        </Text>
                                    </Link>
                                </Flex>
                                <Text>
                                    {book.cover} | {book.publisher}
                                </Text>
                                <Text>
                                    {book.condition} | {book.print}
                                </Text>
                                </Box>                
                            </Flex>
                        </Flex>
                        <Flex
                            flexDirection={{ base: "column", md: "row", lg: "row" }}
                            alignItems={"center"}
                        >
                            <Text 
                                textAlign="right"
                                fontSize={"lg"}
                                mr={"3"}
                            >
                                {book.price + " ৳"}
                            </Text>
                            <Text
                                color={"gray.600"}
                            >
                                × 3
                            </Text>
                        </Flex>
                    </Flex>
                  </ListItem>
                ))}
                <Divider />
              </OrderedList>
              <Box p={"4"}>
                <Stack 
                    // float={"right"}
                    alignItems={"flex-end"}
                    fontSize={"md"}
                >
                  <Text>Sub Total(Book): 540 ৳</Text>
                  <Text>Delivery Charge: 50 ৳</Text>
                  <Text>Total: 750 ৳</Text>
                </Stack>
              </Box>
  
              {/*Customer details*/}
              {/* <Grid templateColumns='repeat(2, 1fr)' bg='red'>
                <GridItem>
                  <Text>Customer Note:</Text>
                </GridItem>
                <GridItem>
                  <Text textAlign="center" pt="15px" fontWeight="bold">
                    {order.shippingName}
                  </Text>
                  <Text textAlign="center">
                    {order.phoneNumber[0] +
                      (order.phoneNumber[1] ? ", " + order.phoneNumber[1] : "")}
                  </Text>
                  <Text textAlign="center" pb="15px">
                    {order.address}
                  </Text>
                </GridItem>
              </Grid> */}
              {/* {types[currentIndex + 1] && (
                <Flex justifyContent="center">
                  <Button
                    onClick={handleClick(index)}
                    colorScheme="teal"
                    size="sm"
                  >
                    {"Set Status to " + types[currentIndex + 1]}
                  </Button>
                </Flex> */}

            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    );
  };

export default OrderDetails;
  