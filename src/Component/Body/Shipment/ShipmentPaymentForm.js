import React, {useState} from 'react';
import { 
    Box, 
    Text,
    Image,
    Radio, 
    RadioGroup,
    SimpleGrid
} from '@chakra-ui/react';
import { paymentMethods } from '../../../dev-data';

const ShipmentPaymentForm = () => {
    const [paymentMethod, setPaymentMethod] = useState("none");
  return (
    <Box
        border={"1px solid #ccc"}
        borderRadius={"3px"}
        boxShadow={"base"}
        // py={"3"}
        backgroundColor={"white"}
        w={{ base: "100%", md: "100%", lg: "100%" }}
    >
        <Text
            display={"inline-flex"}
            fontSize={"xl"}
            alignItems={"baseline"}
            backgroundColor={"#f4f4f4"}
            px={"4"}
            py={"3"}
            w={"100%"}
        >
            Payment Method
            <Text 
                fontSize={"md"}
                ml={"1"}
                textColor={"GrayText"}
                fontWeight={"thin"}
            >
                (Please select only one! payment method)
            </Text>
        </Text>
        <Box
            px={"4"}
            py={"4"}
        >
            <RadioGroup
                // onChange={(e) => {setPaymentMethod(e.target.value); console.log(paymentMethod)}}
                // value={paymentMethod}
            >
                <SimpleGrid columns={2} spacing={2}>
                    {
                        paymentMethods.map((method) => (
                            <Box
                                border={"1px solid #ccc"}
                                p={"3"}
                                backgroundColor={"#f4f4f4"}
                                key={method.id}
                            >
                                <Radio 
                                    size={"lg"}
                                    // value={method.title}
                                >
                                    <Image 
                                        src={method.image}
                                        alt={method.title}
                                        w={{ base: "50%", md: "40%", lg: "40%" }}
                                    />
                                </Radio>
                            </Box>
                        ))
                    }
                </SimpleGrid>
            </RadioGroup>
        </Box>
    </Box>
  )
}

export default ShipmentPaymentForm