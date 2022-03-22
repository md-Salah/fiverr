import React, { Component, useState } from "react";
import { Box, Tab, Tabs, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import { OrderList } from "./OrderList/OrderList";
import { AllBook } from "./AllBook/AllBook";
import AddBook from "./AddBook/AddBook.js";
import { Dashboard } from "./Dashboard/Dashboard";

export default function Admin() {
  return (
    <Box mt="75px" h="100vh" className="container">
      <Tabs>
        <TabList>
          <Tab>Order List</Tab>
          <Tab>Add Book</Tab>
          <Tab>All Book</Tab>
          <Tab>Dashboard</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <OrderList />
          </TabPanel>
          <TabPanel>
            <AddBook />
          </TabPanel>
          <TabPanel>
            <AllBook />
          </TabPanel>
          <TabPanel>

            {//<div> <Dashboard /> </div>
            }
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
