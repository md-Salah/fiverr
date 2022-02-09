import React, { Component, useState } from "react";
import { Box, Text, Button, Link, Select, Flex, Tab, Tabs, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import { Orders } from "./OrderList/Orders";
import AddBook from "./AddBook/AddBook.js";

export default function Admin() {
  return (
    <Box mt="75px" h="100vh" className="container">
      <Tabs>
        <TabList>
          <Tab>Orders</Tab>
          <Tab>Add Book</Tab>
          <Tab>Dashboard</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Orders />
          </TabPanel>
          <TabPanel>
            <AddBook />
          </TabPanel>
          <TabPanel>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
