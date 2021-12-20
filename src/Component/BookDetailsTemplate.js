import {
  Text,
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Table,
  TableCaption,
  Tbody,
  Tr,
  Td,
  Thead,
  Th,
  Container,
  List,
  ListItem,
  ListIcon,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import "./ProductCart.css";
import { Slider } from "infinite-react-carousel/lib";

export default function BookDetailsTemplate() {
  const Info = [
    {
      Bookid: 100005222,
      Title: "লীলাবতীর মৃত্যু",
      Author: "হুমায়ূন আহমেদ",
      Translator: "মোতাহের হোসেন চৌধুরী",
      Publisher: "বিশ্বসাহিত্য কেন্দ্র",
      ISBN: 9841803593,
      Edition: "2nd Editor, 2015",
      NumberOfPages: 75,
      Country: "বাংলাদেশ",
      Language: "বাংলা",
      img: "../../Books/book1.jpg",
      Price: 100,
      DiscountPrice: 80,
      Cover: "Hard Cover",
      Category: "অনুবাদ: প্রবন্ধ",
      Rating: "***",
      Review: "5 people reviewed",
      AvailableCopy: 100,
      Condition: "New/Old",
      PrintType: "Original",
    },
    {
      Bookid: 100005222,
      Title: "সভ্যতা",
      Author: "ক্লাইভ বেল",
      Translator: "মোতাহের হোসেন চৌধুরী",
      Publisher: "বিশ্বসাহিত্য কেন্দ্র",
      ISBN: 9841803593,
      Edition: "2nd Editor, 2015",
      NumberOfPages: 75,
      Country: "বাংলাদেশ",
      Language: "বাংলা",
      img: "../../Books/book.jpg",
      Price: 100,
      DiscountPrice: 80,
      Cover: "Hard Cover",
      Category: "অনুবাদ: প্রবন্ধ",
      Rating: "***",
      Review: "5 people reviewed",
      AvailableCopy: 100,
      Condition: "New/Old",
      PrintType: "Original",
    },
  ];

  const PriceHolder = function (bookId) {
    return (
      <Box
        w={{base:'46%', md: "inherit"}}
        className="Shadow"
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Text
          textAlign={"center"}
          fontSize={{ base: "20px", md: "28px", lg:'40px' }}
          mt={{ base: "5px", md: "10px" }}
          color={"red"}
          fontWeight={"bold"}
        >
          {Info[0].Price + " Tk"}
        </Text>
        <Text textAlign={"center"} fontSize={{ base: "sm", md: "md", lg:'lg'}} my="4px">
          {"(নতুন & পেপারব্যাক)"}
        </Text>
        <Button
          my="5px"
          mx="5px"
          maxW="180px"
          w="80%"
          fontWeight={"normal"}
          _hover={{ "background-color": "yellow" }}
          size='md'
        >
          Add to Cart
        </Button>
      </Box>
    );
  };

  return (
    <Box w="100%">
      <Box mx={{ base: "30px", lg: "60px", xl: "90px" }}>
        <Box
         border={'2px solid yellow'}
          mt="40px"
          p="19"
          display={{ base: "div", md: "flex" }}
          justifyContent={"space-between"}
          alignContent={"center"}
        >
          <Flex
            display={"flex"}
            flexDirection={{ base: "column-reverse", sm: "row" }}
            w={{ base: "initial", md: "30%" }}
          >
            <Box className="Shadow" w={{ base: "100%", sm: "50px" }}>
              <Box
                variant={"simple"}
                display="flex"
                flexDirection={{ base: "row", sm: "column" }}
                h="100%"
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box p="1">
                  <Image src={Info[0].img} />
                </Box>
                <Box p="1">
                  <Image src={Info[0].img} />
                </Box>
                <Box p="1">
                  <Image src={Info[0].img} />
                </Box>
                <Box p="1">
                  <Image src={Info[0].img} />
                </Box>
                <Box p="1">
                  <Image src={Info[0].img} />
                </Box>
              </Box>
            </Box>
            <Box
              p={{ base: "10", xl: "10" }}
              className="Shadow"
              display={"flex"}
              justifyContent={"center"}
              alignContent={"center"}
            >
              <Image
                w="initial"
                maxH={"280"}
                m="auto"
                src="../../Books/book.jpg"
                alt="Image"
              />
            </Box>
          </Flex>

          <Box
            mt="5"
            w={{ base: "initial", md: "45%" }}
            ml={{ base: "initial", md: "10" }}
            display={"flex"}
          >
            <Table variant={"simple"} m="5px" size={{ base: "sm", md: "lg" }}>
              <Thead>
                <Tr>
                  <Th
                    colSpan={"2"}
                    textAlign={{ base: "center", sm: "left" }}
                    fontSize={"md"}
                  >
                    {Info[0].Title}
                  </Th>
                </Tr>
              </Thead>

              <Tbody>
                <Tr>
                  <Td>Author</Td>
                  <Td>{Info[0].Author}</Td>
                </Tr>
                <Tr>
                  <Td>Publisher</Td>
                  <Td>{Info[0].Publisher}</Td>
                </Tr>
                <Tr>
                  <Td>Edition</Td>
                  <Td>{Info[0].Edition}</Td>
                </Tr>
                <Tr>
                  <Td>Language</Td>
                  <Td>{Info[0].Language}</Td>
                </Tr>
                <Tr>
                  <Td>No of Page</Td>
                  <Td>{Info[0].NumberOfPages}</Td>
                </Tr>
                <Tr>
                  <Td>Condition</Td>
                  <Td>{Info[0].Condition}</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>

          <Box
            display={{ base: "none", md: "initial" }}
            border={"2px solid yellow"}
            borderRadius={"7px"}
            color={"black"}
            ml={{ base: "0", md: "20px" }}
            w={{ base: "100%", md: "20%" }}
          >
            <Container h="100%" py={"10%"} centerContent>
              <PriceHolder bookId={0} />
              <PriceHolder bookId={0} />
            </Container>
          </Box>

          <Flex
            display={{ base: "flex", md: "none" }}
            border={"2px solid yellow"}
            borderRadius={"7px"}
            color={"black"}
            w="100%"
            mt='10px'
            py='4px'
          >
              <PriceHolder bookId={0} />
              <PriceHolder bookId={0} />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
