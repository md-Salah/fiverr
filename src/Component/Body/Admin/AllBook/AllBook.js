import React, { Component } from "react";
import {
  Box,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  HStack,
  Select,
  CheckboxGroup,
  Checkbox,
} from "@chakra-ui/react";
import { AiOutlineFilter } from "react-icons/ai";
import { ShowBook } from "./ShowBook";

const tableTitles = [
  ["Image"],
  ["Title", "130px"],
  ["Author", "80px"],
  ["Publisher", "80px"],
  ["Translator", "100px"],
  ["Publica. Year"],
  ["Edition"],
  ["Printed Price"],
  ["Sell Price"],
  ["Discount Price"],
  ["Cost"],
  ["Qty"],
  ["Cover"],
  ["Print Quality"],
  ["Condition"],
  ["Total Page"],
  ["Category Tags"],
  ["Summary", "110px"],
  ["Notes", "90px"],
  ["Country"],
  ["Language"],
  ["ISBN"],
  ["Popularity"],
  ["Rating"],
  ["Review"],
  ["id"],
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
];

export default class AllBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterBy: {
        selectedAuthor: "",
        authors: ["Humayun Ahmed", "Zafor iqbal", "Agatha Cristie"],
        selectedPublisher: "",
        publishers: ["Sheba Prokashoni", "Onno Prokash", "Somokalin Prokashoni"],
        selectedCondition: "",
        Conditions: ["Old", "New"],
        selectedCategories: [],
        categories: ["War", "History", "Biography", "Programming", "Learn English", "BCS", "Thriller", "Math", "HSC Admission", "Motivational"],
        selectedPrintQuality: "",
        printQualities: ["Orginal", "Local", "Premium", "Indian Orginal"]
      },
    };
  }

  render() {
    return (
      <Box w="100%">
        <HStack mb="15px" w={{base: '100%', md: '50%'}}>
          <Select placeholder="Author" size='small' variant='filled'>
           { this.state.filterBy.authors.map((value, i)=>(<option key={i} value={value}>{value}</option>)) }
          </Select>
          <Select placeholder="Publisher" size='small' variant='filled'>
          { this.state.filterBy.publishers.map((value, i)=>(<option key={i} value={value}>{value}</option>)) }
          </Select>
          <Select placeholder="Condition" size='small' variant='filled'>
          { this.state.filterBy.Conditions.map((value, i)=>(<option key={i} value={value}>{value}</option>)) }
          </Select>

          <Select placeholder="Category" size='small' variant='filled'>
          { this.state.filterBy.categories.map((value, i)=>(<option key={i} value={value}>{value}</option>)) }
          </Select>
          <Select placeholder="Print Quality" size='small' variant='filled'>
          { this.state.filterBy.printQualities.map((value, i)=>(<option key={i} value={value}>{value}</option>)) }
          </Select>
        </HStack>

        <Table
          size="sm"
          colorScheme="teal"
          fontSize="sm"
          variant="unstyled"
          maxW="inherit"
        >
          <Thead>
            <Tr>
              {tableTitles.map(([title, wide = "unset"]) => (
                <Th
                  overflow="hidden"
                  wordBreak="word-break"
                  key={title}
                  textTransform="capitalize"
                  letterSpacing="normal"
                  textAlign="center"
                  px="1"
                  minW={wide}
                  border="2px solid teal"
                  verticalAlign="top"
                >
                  {title}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {BookCollection.map((book) => (
              <ShowBook key={book.id} book={book} tableTitles={tableTitles} />
            ))}
          </Tbody>
        </Table>
      </Box>
    );
  }
}
