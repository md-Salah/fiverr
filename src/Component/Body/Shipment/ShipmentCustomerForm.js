import React from 'react'
import { 
    Box, 
    Text,
    Select,
    RadioGroup,
    Radio,
    Stack,
    Input,
    InputLeftAddon,
    InputGroup,
    Textarea
} from '@chakra-ui/react'

const ShipmentCustomerForm = () => {
    const [value, setValue] = React.useState('1')
  return (
    <Box
        border={"1px solid #ccc"}
        borderRadius={"3px"}
        boxShadow={"base"}
        // py={"3"}
        backgroundColor={"white"}
        w={{ base: "100%", md: "100%", lg: "700px" }}
        mb={"7"}
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
            Shipping Address
            <Text 
                fontSize={"md"}
                ml={"1"}
                textColor={"GrayText"}
                fontWeight={"thin"}
            >
                (Please Fill Out Your Information)
            </Text>
        </Text>
        <Box
            py={"4"}
            px={"4"}
            display={"flex"}
        >
            <Text fontWeight={"light"}>
                Pick Up Your Parcel From:
            </Text>
            <RadioGroup 
                onChange={setValue} 
                value={value}
                size={"lg"}
                fontWeight={"light"}
                ml={"5"}
            >
                <Stack 
                    direction={{ base: "column", md: "row", lg: "row" }}
                    spacing={{ base: 2, md: 4, lg: 6 }}
                >
                    <Radio value='1'>
                        Home
                    </Radio>
                    <Radio value='2'>
                        Office
                    </Radio>
                </Stack>
            </RadioGroup>
        </Box>
        <Stack
            py={"4"}
            px={"4"}
            spacing={3}
        >
            <Input placeholder='Name' />
            <Box
                display={"flex"}
                flexDirection={{ base: "column", md: "row", lg: "row" }}
            >
                <InputGroup 
                    mr={{ base: "none", md: "3", lg: "3" }}
                    mb={{ base: "3", md: "none", lg: "none" }}
                >
                    <InputLeftAddon children='+880' />
                    <Input 
                        type='tel' 
                        placeholder='Phone number'
                    />
                </InputGroup>
                <InputGroup>
                    <InputLeftAddon children='+880' />
                    <Input
                        type='tel' 
                        placeholder='Alternative Phone number'
                    />
                </InputGroup>
            </Box>
            <Box
                display={"flex"}
            >
                <Select 
                    placeholder={"Select City"}
                    mr={"3"}
                >
                    <option>Dhaka</option>
                    <option>Chattogram</option>
                    <option>Rajshahi</option>
                </Select>
                <Select placeholder='Select Area'>
                    <option>Dhaka</option>
                    <option>Chattogram</option>
                    <option>Rajshahi</option>
                </Select>
            </Box>
            <Textarea placeholder="Address" />
        </Stack>
    </Box>
  )
}

export default ShipmentCustomerForm