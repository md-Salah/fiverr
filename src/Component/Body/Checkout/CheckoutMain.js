import React from 'react';
import { 
  Box, 
  Stack, 
  Text,
  RadioGroup,
  Radio, 
  Button,
  useDisclosure,
  Input,
  HStack
} from '@chakra-ui/react';
import DeliverySelectionBox from './DeliverySelectionBox';
import { Link } from 'react-router-dom';

const CheckoutMain = () => {
  const [value, setValue] = React.useState('1');
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Box
      border={"2px solid #ccc"}
      p={"6"}
      borderRadius={"3"}
      boxShadow={"base"}
      backgroundColor={"#FFFFFF"}
      borderTopColor={"#008080"}
      w={{ base: "100%", md: "80%", lg: "35%" }}
      // mx={{ base: "auto", md: "auto", lg: "none" }}
      mt={{ base: "7", md: "5", lg: "none" }}
      textColor={"#333333"}
      className="Bangla"
      fontSize={"xl"}
    >
      <Box
        py={"3"}
      >
        <Stack 
          borderBottom={"1px solid #ccc"}
          pb={"3"}
          w={"100%"}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Text>
              দাম:
            </Text>
            <Text>
              2,320 ৳
            </Text>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Text>
              ছাড়:
            </Text>
            <Text>
              −880 ৳
            </Text>
          </Box>
        </Stack>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          py={"3"}
          borderBottom={"1px solid #ccc"}
        >
          <Text>
            মোট:
          </Text>
          <Text>
            1,440 ৳
          </Text>
        </Box>
        <Stack
          spacing={8}
          py={"4"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            py={"2"}
            // h={"80px"}
          >
            <Text>
              শিপিং চার্জ:
            </Text>
            <HStack >
              <DeliverySelectionBox/>
              <DeliverySelectionBox/>
              <DeliverySelectionBox/>

            </HStack>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Text>
              সর্বমোট:
            </Text>
            <Text fontWeight={"600"}>
              1,490 ৳
            </Text>
          </Box>
        </Stack>
      </Box>
      <Stack
        alignItems={"center"}
        spacing={4}
      >
        <Button
          w={"100%"}
          colorScheme={"teal"}
          fontSize={"font_bn"}
          fontWeight={"thin"}
        >
          <Link to="/shipment">
            অর্ডার সম্পন্ন করুন 
          </Link>
        </Button>
        {
          isOpen ? (
            <Box
              display={"flex"}
              alignItems={"center"}
            >
              <Input placeholder='এখানে প্রমো কোড দিন ' size="sm" mr={"2"}/>
              <Button 
                size={"sm"}
                colorScheme={"teal"}
              >
                সাবমিট
              </Button>
            </Box>
          ) : (
          <Text
            color={"#008080"}
            _hover={{ 
              textDecoration: "underline",
              cursor: "pointer" 
            }}
            onClick={() => setIsOpen(true)}
          >
            প্রমোকোড থাকলে এখানে ক্লিক করুন
          </Text>
          )
        }
      </Stack>
    </Box>
  )
}

export default CheckoutMain