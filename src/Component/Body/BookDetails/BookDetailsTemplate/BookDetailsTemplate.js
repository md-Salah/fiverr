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
// import "../../CartAndCheckout/ProductCart";
// import { Slider } from "infinite-react-carousel/lib";

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
      Condition: "New",
      PrintType: "Original",
    },
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
      Price: 60,
      DiscountPrice: 80,
      Cover: "Paperback",
      Category: "অনুবাদ: প্রবন্ধ",
      Rating: "***",
      Review: "5 people reviewed",
      AvailableCopy: 100,
      Condition: "Old",
      PrintType: "Original",
    },
  ];

  const PriceHolder = function (props) {

    return (
      <Box
        w={{ base: "46%", md: "90%" }}
        h={{ base: "initial", md: "46%" }}
        className="Shadow"
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Text
          textAlign={"center"}
          fontSize={{ base: "20px", md: "28px", lg: "40px" }}
          mt={{ base: "5px", md: "10px" }}
          color={"red"}
          fontWeight={"bold"}
        >
          {Info[props.index].Price + " Tk"}
        </Text>
        <Text
          textAlign={"center"}
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          my="4px"
        >
          {Info[props.index].Condition + ' & ' + Info[props.index].Cover}
        </Text>
        <Button
          my="5px"
          mx="5px"
          maxW="180px"
          w="80%"
          fontWeight={"normal"}
          _hover={{ "background-color": "yellow" }}
          size="md"
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
          className="Shadow"
          mt={{base:'25px' ,md:"40px"}}
          p="19"
          display={{ base: "div", md: "flex" }}
          justifyContent={"space-between"}
          alignContent={"center"}
        >
          <Flex
            display="flex"
            flexDirection={{ base: "column-reverse", sm: "row" }}
            w={{ base: "initial", md: "30%" }}
          >
            
            <Box 
                display="flex"
                flexDirection={{ base: "row", sm: "column" }}
                justifyContent={{base:"center", sm:'space-between'}}
                alignItems="center"
                p={{base:'5px', sm:'5px'}}
              >
                <Box p="1" m='1' border="2px solid #888">
                  <Image maxW={{base:'40px' ,sm:'55px'}} src={Info[0].img} />
                </Box>
                <Box p="1" m='1' border="2px solid #ccc">
                  <Image maxW={{base:'40px' ,sm:'55px'}} src={Info[0].img} />
                </Box>
                <Box p="1" m='1' border="2px solid #ccc">
                  <Image maxW={{base:'40px' ,sm:'55px'}} src={Info[0].img} />
                </Box>
                <Box p="1" m='1' border="2px solid #ccc">
                  <Image maxW={{base:'40px' ,sm:'55px'}} src={Info[0].img} />
                </Box>
                <Box p="1" m='1' border="2px solid #ccc" display={{base:'none', sm:'initial'}} >
                  <Image maxW={{base:'40px' ,sm:'55px'}} src={Info[0].img} />
                </Box>

              </Box>

            <Box
              p='40px'
              className="Shadow"
              display={"flex"}
              justifyContent={"center"}
              alignContent={"center"}
              bgImage={"url(../../frame.png)"}
            >
              <Image
                className="Shadow"
                w="initial"
                maxH={"280"}
                m="auto"
                src="../../Books/book.jpg"
                alt="Image"
              />
            </Box>

          </Flex>

          <Box
            mt={{base:"5", md:'initial'}}
            w={{ base: "initial", md: "45%" }}
            ml={{ base: "initial", md: "10" }}
            pl={{ base: "3", md: "10" }}
            display={"flex"}
            className="Shadow"
          >
            <Table variant={'unstyled'} m="5px" size={{ base: "sm", md: "lg" }}>
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

          <Flex
            border={"2px solid yellow"}
            borderRadius={"7px"}
            color={"black"}
            w={{ base: "100%", md: "20%" }}
            flexDirection={{ base: "row", md: "column" }}
            pt={{ base: "initial", md: "2%" }}
            justifyContent={"center"}
            alignItems={"center"}
            mt={{ base: "10px", md: "initial" }}
            py={{ base: "4px", md: "initial" }}
          >
            <PriceHolder index={0} />
            <PriceHolder index={1} />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
