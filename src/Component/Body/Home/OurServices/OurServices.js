import { Icon } from "@chakra-ui/icons";
import {
  Box,
  Circle,
  Flex,
  Heading,
  HStack,
  Square,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FiTruck } from "react-icons/fi";
import { BiBook } from "react-icons/bi";
import { MdAttachMoney } from "react-icons/md";
import MainContainer from "../../../GeneralComponent/MainContainer";

const OurServices = () => {
  return (
    <Box my="40px">
      <MainContainer>
        {/* <Heading textAlign="center" fontFamily="Nunito" mt="20px">
          Why Pathok Point!
        </Heading>
        <Text
          textAlign="center"
          noOfLines="2"
          w="50%"
          mx="auto"
          pt="10px"
          fontFamily="Bangla"
          fontSize="xl"
        >
          পুরাতন বইয়ের জগতে দেশজুড়ে পাঠক পয়েন্ট একনাম। <br /> আপনার প্রিয় বইগুলো
          অর্ডার করা যাবে নতুন ও পুরাতন উভয় কন্ডিশনে।
        </Text> */}
        <Box bg="gray.200">
          <Flex
            flexDirection={"column"}
            // justifyContent="space-between"
            // mt="30px"
            w="100%"
            px={"4"}
            // mx='auto'
          >
            {/* Fast Delivery */}
            {Service(
              FiTruck,
              "#f4556d",
              "Fast Delivery",
              "We provide super fast delivery within the country"
            )}
            {/* Fast Delivery ends */}

            {/* Fixed Price */}
            {Service(
              MdAttachMoney,
              "#69b39c",
              "Fixed Price",
              "We know you don't love burging. Just click and get your book, pricing headache is ours"
            )}
            {/* Fixed price ends */}

            {/* Both Old and New books */}
            {Service(
              BiBook,
              "orange",
              "New & Old books",
              "Buy New and Old books from our website, just a click away"
            )}
            {/* Both Old and New books ends */}
          </Flex>
        </Box>
      </MainContainer>
    </Box>
  );
};

function Service(icon, color, title, text) {
  return (
    <Box 
      my="10px" 
      p="15px" 
      w={{ base: "100%", md: "50%", lg: "40%" }}
      display={"flex"}
      alignItems={"flex-start"}
    >
      <Circle size="60px" bg={color}>
        <Icon color="white" as={icon} fontSize={"lg"} />
      </Circle>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        ml={"4"}
      >
        <Heading textAlign="center" size="sm" mt="10px" mb="5px">
          {title}
        </Heading>
        <Text fontWeight="light" color="subHeading">
          {text}
        </Text>
      </Box>
    </Box>
  );
}

export default OurServices;
