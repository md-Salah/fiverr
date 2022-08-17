import React from 'react'
import CheckoutItem from './CheckoutItem'
import CheckoutMain from './CheckoutMain'
import { Flex, Box, Button } from '@chakra-ui/react'

const Checkout = () => {
  return (
    <Box 
      w={{base: '95%', lg: '80%'}}
      mx='auto' 
      h='inherit'
      my={{ base: "100px", md: "120px", lg: "150px" }}
      display={"flex"}
      flexDirection={{ base: "column", md: "column", lg: "row" }}
      justifyContent={"space-between"}
      alignItems={"flex-start"}
    >
      <Box>
      <CheckoutItem/>
      <CheckoutItem/>
      <CheckoutItem/>
      <CheckoutItem/>
      <CheckoutItem/>
      </Box>
      <CheckoutMain/>
    </Box>
  )
}

export default Checkout