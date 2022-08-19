import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import ShipmentCustomerForm from '../Component/Body/Shipment/ShipmentCustomerForm'
import ShipmentPaymentForm from '../Component/Body/Shipment/ShipmentPaymentForm'
import CheckoutSummary from '../Component/Body/Shipment/CheckoutSummary'

const ShipmentScreen = () => {
  return (
    <Box
        py={{ base: "40%", md: "15%", lg: "10%" }} 
        backgroundColor={"#F1F2F4"}
        w={"100%"}
        display={"flex"}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        px={{ base: "4%", md: "8%", lg: "10%" }}
    >
        <Box
            display={"flex"}
            flexDirection={"column"}
        >
            <ShipmentCustomerForm/>
            <ShipmentPaymentForm/>
        </Box>
        <CheckoutSummary/>
    </Box>
  )
}

export default ShipmentScreen