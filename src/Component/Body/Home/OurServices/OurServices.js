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
    <Box my="30px" bg="white">
      <MainContainer>
        <Heading textAlign="center" fontFamily="Nunito" mt="20px">
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
        </Text>
        <Box overflowX="auto" css={{scrollbarWidth: 'none'}}>
          <Flex
            justifyContent="space-between"
            alignItems="baseline"
            mt="30px"
            w="800px"
            mx='auto'
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
    <Box my="10px" p="15px" w="350px">
      <Circle size="40px" bg={color} mx="auto">
        <Icon color="white" as={icon} />
      </Circle>
      <Heading textAlign="center" size="sm" mt="10px" mb="5px">
        {title}
      </Heading>
      <Text textAlign="center" fontWeight="light" color="subHeading">
        {text}
      </Text>
    </Box>
  );
}

export default OurServices;
