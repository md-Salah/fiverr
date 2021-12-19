import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import React from "react";
import "./ProductCart.css";
import { Slider } from "infinite-react-carousel/lib";

export default function BookDetailsTemplate() {
  const Info = [
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

  return (
    <Box w="100%" h="100vh">
      <Box px={{ base: "30px", lg: "60px", xl: "90px" }}>
        <Box mt="40px" p="19" className="Shadow" bg="yellow">

          <Box display={{base:'div', md:'flex'}}>

            <Flex display={'flex'} flexDirection={{base:'column-reverse', md:'row'}}>
            <Box className="Shadow" mr='3'>Image box</Box>
              <Box p={{ base: "10", xl: "10" }} className="Shadow">
                <Image maxH={"280"} src="../../Books/book.jpg" alt="Image" />
              </Box>
            </Flex>

            <Box className="Shadow"> Description </Box>

            <Box display={{ base: "none", lg: "initial" }} className="Shadow">
              Offer/Order Process
            </Box>

          </Box>
        </Box>
      </Box>
    </Box>
  );
}
