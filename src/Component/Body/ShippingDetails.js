import React from "react";
import { Box, FormControl, FormLabel, Input, Textarea, Text } from "@chakra-ui/react";

export default function ShippingDetails() {
  return (
    <Box mt="30px" boxShadow='base'>
      <Text fontWeight="bold" bg="#319795" textAlign="center" color="white" py='5px' >
        Shipping Details
      </Text>

      <Box p='10px'>
      <FormControl isRequired>

          <FormLabel mb='0' htmlFor="name">Name:</FormLabel>
          <Input id='name' placeholder="Md Abdullah" />

          <FormLabel mb='0' mt='5' htmlFor="number">Phone No:</FormLabel>
          <Input id='number' placeholder="01500001111" />

          <FormLabel mb='0' mt='5' htmlFor="email">Email:</FormLabel>
          <Input id='email' placeholder="example@gmail.com" />

          <FormLabel mb='0' mt='5' htmlFor="address">Delivery Address:</FormLabel>
          <Textarea h='100px' type='textarea' id='address' placeholder="House No, Road No, Area, Thana, District" />

      </FormControl>
      </Box>

    </Box>
  );
}
