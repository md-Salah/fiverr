import React, { Component } from "react";
import {
  Box,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  IconButton,
  ButtonGroup,
  Tooltip,
  Flex,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineFilter } from "react-icons/ai";
import { BookRow } from "../AllBook/BookRow";
import { FilterBook } from "./FilterBook";

const tableTitles = [
  { name: "Image" },
  { name: "Title", wide: "130px" },
  { name: "Author", wide: "120px" },
  { name: "Publisher", wide: "80px" },
  { name: "Translator", wide: "120px" },
  { name: "Publica. Year" },
  { name: "Edition", wide: "110px" },
  { name: "Printed Price" },
  { name: "Sell Price" },
  { name: "Discount Price" },
  { name: "Cost" },
  { name: "Qty" },
  { name: "Cover", wide:"110px", inputType: "Select", options: ["Hard Cover", "Paper back"] },
  { name: "Print Quality" },
  { name: "Condition", inputType: "Select", options: ["Old", "New"] },
  { name: "Total Page" },
  { name: "Category Tags" },
  { name: "Summary", wide: "160px", isScroll: true },
  { name: "Notes", wide: "125px", isScroll: true },
  {
    name: "Country",
    inputType: "Select",
    options: ["Bangladesh", "India", "USA", "UK"],
  },
  { name: "Language", inputType: "Select", options: ["Bangla", "English"] },
  { name: "ISBN" },
  { name: "Popularity" },
  { name: "Rating" },
  { name: "Review" },
  { name: "id" },
];

const BookCollection = [
  {
    Image: "#",
    Title: "বাদশাহ নামদার",
    Author: "হুমায়ূন আহমেদ",
    Publisher: "বিশ্বসাহিত্য কেন্দ্র",
    Translator: "মোতাহের হোসেন চৌধুরী",
    "Publica. Year": "2012",
    Edition: "2nd Editor, 2015",
    "Printed Price": "300",
    "Sell Price": "160",
    "Discount Price": "140",
    Cost: "50",
    Qty: "20",
    Cover: "Hard Cover",
    "Print Quality": "",
    Condition: "Old",
    "Total Page": "98",
    "Category Tags": ["War", "History", "Biography"],
    Summary:
      "দর আইনা গরচে খুদ নুমাই বাশদ পৈবস্তা জ খেশতন জুদাই বাশদ। খুদ রা ব মিসলে গোর দীদন অজব অস্ত; ঈ বুল অজবো কারে খুদাই বাশদ। যদিও দর্পণে আপন চেহারা দেখা যায় কিন্তু তা পৃথক থাকে নিজে নিজেকে অন্যরুপে দেখা আশ্চর্যের ব্যাপার।",
    Notes:
      "অর্ডার করলেই নিশ্চিত ১টি NESCAFE 3 in 1 এবং ৬৯৯৳+ অর্ডারে নিশ্চিত ১টি Chopstick noodles ফ্রি!",
    Country: "Bangladesh",
    Language: "Bangla",
    ISBN: "01155787414",
    Popularity: "Popular",
    Rating: "5",
    Review: "7 people reviewed",
    id: "144555",
  },
  {
    Image: "#",
    Title: "বাদশাহ নামদার",
    Author: "হুমায়ূন আহমেদ",
    Publisher: "বিশ্বসাহিত্য কেন্দ্র",
    Translator: "মোতাহের হোসেন চৌধুরী",
    "Publica. Year": "2012",
    Edition: "2nd Editor, 2015",
    "Printed Price": "300",
    "Sell Price": "160",
    "Discount Price": "140",
    Cost: "50",
    Qty: "20",
    Cover: "Hard Cover",
    "Print Quality": "",
    Condition: "Old",
    "Total Page": "98",
    "Category Tags": ["War", "History", "Biography"],
    Summary:
      "দর আইনা গরচে খুদ নুমাই বাশদ পৈবস্তা জ খেশতন জুদাই বাশদ। খুদ রা ব মিসলে গোর দীদন অজব অস্ত; ঈ বুল অজবো কারে খুদাই বাশদ। যদিও দর্পণে আপন চেহারা দেখা যায় কিন্তু তা পৃথক থাকে নিজে নিজেকে অন্যরুপে দেখা আশ্চর্যের ব্যাপার।",
    Notes:
      "অর্ডার করলেই নিশ্চিত ১টি NESCAFE 3 in 1 এবং ৬৯৯৳+ অর্ডারে নিশ্চিত ১টি Chopstick noodles ফ্রি!",
    Country: "Bangladesh",
    Language: "Bangla",
    ISBN: "01155787414",
    Popularity: "Popular",
    Rating: "5",
    Review: "7 people reviewed",
    id: "1588",
  },
  {
    Image: "#",
    Title: "বাদশাহ নামদার",
    Author: "হুমায়ূন আহমেদ",
    Publisher: "বিশ্বসাহিত্য কেন্দ্র",
    Translator: "মোতাহের হোসেন চৌধুরী",
    "Publica. Year": "2012",
    Edition: "2nd Editor, 2015",
    "Printed Price": "300",
    "Sell Price": "160",
    "Discount Price": "140",
    Cost: "50",
    Qty: "20",
    Cover: "Hard Cover",
    "Print Quality": "",
    Condition: "Old",
    "Total Page": "98",
    "Category Tags": ["War", "History", "Biography"],
    Summary:
      "দর আইনা গরচে খুদ নুমাই বাশদ পৈবস্তা জ খেশতন জুদাই বাশদ। খুদ রা ব মিসলে গোর দীদন অজব অস্ত; ঈ বুল অজবো কারে খুদাই বাশদ। যদিও দর্পণে আপন চেহারা দেখা যায় কিন্তু তা পৃথক থাকে নিজে নিজেকে অন্যরুপে দেখা আশ্চর্যের ব্যাপার।",
    Notes:
      "অর্ডার করলেই নিশ্চিত ১টি NESCAFE 3 in 1 এবং ৬৯৯৳+ অর্ডারে নিশ্চিত ১টি Chopstick noodles ফ্রি!",
    Country: "Bangladesh",
    Language: "Bangla",
    ISBN: "01155787414",
    Popularity: "Popular",
    Rating: "5",
    Review: "7 people reviewed",
    id: "745",
  },
];

export const AllBook = () => {
    return (
      <Box
        w="100%"
        boxShadow="base"
        borderRadius="md"
        overflow="auto"
        p="5"
        css={{ scrollbarWidth: "thin" }}
      >

        <FilterBook />

        <Table size="sm" variant="simple">
          <Thead>
            <Tr>
              {tableTitles.map(({ name, wide }) => (
                <Th
                  minW={wide}
                  key={name}
                  textTransform="capitalize"
                  boxShadow="base"
                >
                  <ButtonGroup display="flex" justifyContent="space-between">
                    <Tooltip label={name} closeDelay="500">
                      <Text noOfLines={1} my="auto">
                        {name}
                      </Text>
                    </Tooltip>
                    <IconButton
                      area-label="selectOption"
                      isRound
                      size="xs"
                      mr="-15px"
                      variant="ghost"
                      opacity="0.6"
                      icon={<BsThreeDotsVertical />}
                    />
                  </ButtonGroup>
                </Th>
              ))}
              <Th boxShadow='base'>Confirm</Th>
            </Tr>
          </Thead>
          <Tbody>
            {BookCollection.map((book) => (
              <BookRow key={book.id} book={book} tableTitles={tableTitles} />
            ))}
          </Tbody>
        </Table>        
      </Box>
    );
  }
