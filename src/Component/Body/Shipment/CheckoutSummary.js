import React from 'react';
import { 
    Box,
    Text,
    Stack,
     RadioGroup,
     Radio,
     Button,
     Input
} from '@chakra-ui/react';

const CheckoutSummary = () => {
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
        w={{ base: "100%", md: "100%", lg: "40%" }}
        // mx={{ base: "auto", md: "auto", lg: "none" }}
      //   mt={{ base: "7", md: "5", lg: "none" }}
        textColor={"#333333"}
        className="font_bn"
        fontSize={"large"}
        mt={{ base: "10", md: "10", lg:  "20" }}
    >
        <Box>
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
              alignItems={"flex-start"}
              justifyContent={"space-between"}
              py={"3"}
              h={"50px"}
            >
              <Text>
                শিপিং চার্জ:
              </Text>
              <Text 
                display={"inline-flex"}
                fontSize={"sm"}
              >
                হোম ডেলিভারি (ঢাকার ভিতর)
                <Text ml={"1"}>
                  45 ৳
                </Text>
              </Text>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              py={"3"}
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
      </Box>
  )
}

export default CheckoutSummary