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
  Button
} from "@chakra-ui/react";
import React from "react";
import { types, orderList } from "./OrderListData";

const ShowList = ({ type }) => {
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
    <Accordion fontSize="sm" allowToggle>
      {selectedOrders.map((order, index) => (
        <AccordionItem key={order.invoice}>
            <AccordionButton fontSize="sm">
              <Flex flex="1" textAlign="left" justifyContent="space-between" alignItems='center'>
                <Avatar src="#" />
                <Box minW='47%'>
                  <Text>{order.invoice + ": " + order.userName}</Text>
                  <Text>{order.phoneNumber[0]}</Text>
                </Box>
                <Box minW='30%'>
                  <Text>{'Total: ' + order.total + ' ৳'}</Text>
                  <Badge colorScheme='red' textAlign='right'>{'COD: ' + ( order.total - order.paid ) + ' ৳'}</Badge>
                </Box>
              </Flex>
              <AccordionIcon />
            </AccordionButton>
          <AccordionPanel my="0.5">
            <OrderedList>
              {order.books.map((book) => (
                <ListItem key={order.invoice + book.title}>
                  <Flex justifyContent="space-between">
                    <Text>{book.title + ", " + book.author}</Text>
                    <Text textAlign="right">{book.price + " Tk"}</Text>
                  </Flex>
                </ListItem>
              ))}
            </OrderedList>
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
              {types[currentIndex + 1] && (
                <Button
                  onClick={handleClick(index)}
                  colorScheme='teal'
                  variant='outline'
                  size='sm'
                  w='100%'
                >
                  {"Set Status to " + types[currentIndex + 1]}
                </Button>
              )}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ShowList;
