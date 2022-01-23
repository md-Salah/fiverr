import React from "react";
import { Box, FormControl, FormLabel, Input, InputGroup, Text } from "@chakra-ui/react";

export default function ShippingDetails() {
  return (
    <Box mt="30px" border='2px solid #319795' >
      <Text fontWeight="bold" bg="#319795" textAlign="center" color="white" py='5px' >
        Shipping Details
      </Text>

      <Box p='10px'>
      <FormControl isRequired>

          <FormLabel mb='0' >Name:</FormLabel>
          <Input id='name' placeholder="Md Abdullah" />

          <FormLabel mb='0' mt='5'>Phone No:</FormLabel>
          <Input id='name' placeholder="01311101113" />

          <FormLabel mb='0' mt='5'>Email:</FormLabel>
          <Input id='name' placeholder="example@gmail.com" />

          <FormLabel mb='0' mt='5'>Delivery Address:</FormLabel>
          <Input h='100px' type='text' id='name' placeholder="House No, Road No, Area, Thana, District" />

      </FormControl>
      </Box>

    </Box>
  );
}
