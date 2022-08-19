import React from 'react';
import { 
    Box, 
    Text,
    Image,
    Radio, 
    RadioGroup
} from '@chakra-ui/react';

const ShipmentPaymentForm = () => {
  return (
    <Box
        border={"1px solid #ccc"}
        borderRadius={"3px"}
        boxShadow={"base"}
        // py={"3"}
        backgroundColor={"white"}
        w={{ base: "100%", md: "100%", lg: "700px" }}
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
                display={"grid"}
                gridColumn={1}
            >
                <Box
                    border={"1px solid #ccc"}
                    p={"3"}
                    backgroundColor={"#f4f4f4"}
                >
                    <Radio 
                        size={"lg"}
                    >
                        <Image 
                            src="https://www.rokomari.com/static/200/images/Nagad-Logo.png"
                            w={"30%"}
                        />
                    </Radio>
                </Box>
                <Box
                    border={"1px solid #ccc"}
                    p={"3"}
                    backgroundColor={"#f4f4f4"}
                >
                    <Radio 
                        size={"lg"}
                    >
                        <Image 
                            src="https://www.rokomari.com/static/200/images/Nagad-Logo.png"
                            w={"30%"}
                        />
                    </Radio>
                </Box>
                <Box
                    border={"1px solid #ccc"}
                    p={"3"}
                    backgroundColor={"#f4f4f4"}
                >
                    <Radio 
                        size={"lg"}
                    >
                        <Image 
                            src="https://www.rokomari.com/static/200/images/Nagad-Logo.png"
                            w={"30%"}
                        />
                    </Radio>
                </Box><Box
                    border={"1px solid #ccc"}
                    p={"3"}
                    backgroundColor={"#f4f4f4"}
                >
                    <Radio 
                        size={"lg"}
                    >
                        <Image 
                            src="https://www.rokomari.com/static/200/images/Nagad-Logo.png"
                            w={"30%"}
                        />
                    </Radio>
                </Box>
            </RadioGroup>
        </Box>
    </Box>
  )
}

export default ShipmentPaymentForm