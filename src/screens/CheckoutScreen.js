import React from 'react'
import CheckoutItem from "../Component/Body/Checkout/CheckoutItem";
import CheckoutMain from "../Component/Body/Checkout/CheckoutMain";
import { 
  Flex, 
  Box, 
  Button, 
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink 
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';

const CheckoutScreen = () => {
  return (
    <Box 
      w={"100%"}
      h='inherit'
      py={{ base: "120px", md: "120px", lg: "120px" }}
      display={"flex"}
      flexDirection={{ base: "column", md: "column", lg: "row" }}
      alignItems={"flex-start"}
      backgroundColor={"#F1F2F4"}
      px={"5%"}
    >
      <Box
        w={"80%"}
      >
        <Breadcrumb 
          py={"10px"}
          spacing='8px' 
          separator={<ChevronRightIcon color='gray.500' />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink 
              href='/'
              color={"#008080"}
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink 
              href='/checkout'
              color={"#008080"}
            >
              Cart & Checkout
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Text 
          fontWeight={"600"}
          fontSize={"2xl"}
          mb={"30px"}
          className="Bangla"
        >
          আপনার শপিং ব্যাগে ৩টি আইটেম আছে
        </Text>
        <CheckoutItem/>
        <CheckoutItem/>
        <CheckoutItem/>
        <Button 
          colorScheme={"teal"}
          mt={"3"}
        >
          আরও বই ক্রয় করুন 
        </Button>
      </Box>
      <CheckoutMain/>
    </Box>
  )
}

export default CheckoutScreen;