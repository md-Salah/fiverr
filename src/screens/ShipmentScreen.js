import { 
  Box, 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button 
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import React from 'react'
import ShipmentCustomerForm from '../Component/Body/Shipment/ShipmentCustomerForm'
import ShipmentPaymentForm from '../Component/Body/Shipment/ShipmentPaymentForm'
import CheckoutSummary from '../Component/Body/Shipment/CheckoutSummary'

const ShipmentScreen = () => {
  return (
    <Box
        py={{ base: "30%", md: "15%", lg: "8%" }} 
        backgroundColor={"#F1F2F4"}
        w={"100%"}
        display={"flex"}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        px={{ base: "4%", md: "8%", lg: "8%" }}
    >
        <Box
            display={"flex"}
            flexDirection={"column"}
            mr={{ base: "none", md: "none", lg: "8" }}
        >
          <Breadcrumb 
            py={"15px"}
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
            <BreadcrumbItem>
              <BreadcrumbLink 
                href='/shipment'
                color={"#008080"}
              >
                Confirm Order
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <ShipmentCustomerForm/>
          <ShipmentPaymentForm/>
          <Button
            colorScheme={'yellow'}
            mt={"5"}
            display={{ base: "none", md: "none", lg: "block" }}
          >
            Confirm Order
          </Button>
        </Box>
          <CheckoutSummary/>
          <Button
            colorScheme={'yellow'}
            mt={{ base: "5" }}
            display={{ base: "block", md: "block", lg: "none" }}
            w={"100%"}
          >
            CONFIRM ORDER
          </Button>
    </Box>
  )
}

export default ShipmentScreen