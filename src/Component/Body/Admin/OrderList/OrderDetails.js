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
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import { types, orderList } from "./OrderListData";

export const OrderDetails = ({ type }) => {
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
      {selectedOrders.map((order, index) => (
        <AccordionItem key={order.invoice}>
          <AccordionButton fontSize="sm" _expanded={{ bg: "gray.100" }}>
            <Flex
              flex="1"
              textAlign="left"
              justifyContent="space-between"
              alignItems="center"
            >
              <Avatar bg="teal" src="#" />
              <Box minW="47%">
                <Text>{order.invoice + ": " + order.userName}</Text>
                <Text>{order.phoneNumber[0]}</Text>
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

          <AccordionPanel my="0.5" bg="gray.50">
            {/*Book details */}
            <OrderedList mx={{ md: "50" }}>
              {order.books.map((book) => (
                <ListItem key={order.invoice + book.title} py="2">
                  <Flex justifyContent="space-between">
                    <Text>
                      {book.title +
                        " / " +
                        book.author +
                        " / " +
                        book.puplisher}
                    </Text>
                    <Text textAlign="right">{book.price + " Tk"}</Text>
                  </Flex>
                </ListItem>
              ))}
              <Divider />
              <VStack py="3">
                <Text>Sub Total(Book): 540 Tk</Text>
                <Text>Delivery Charge: 50 Tk</Text>
                <Text>Total: 750 Tk</Text>
              </VStack>
            </OrderedList>

            {/*Customer details*/}
            <Grid templateColumns='repeat(2, 1fr)' bg='red'>
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
            </Grid>
            {types[currentIndex + 1] && (
              <Flex justifyContent="center">
                <Button
                  onClick={handleClick(index)}
                  colorScheme="teal"
                  size="sm"
                >
                  {"Set Status to " + types[currentIndex + 1]}
                </Button>
              </Flex>
            )}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
