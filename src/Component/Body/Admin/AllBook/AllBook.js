import React, { Component } from "react";
import { Box, Table, Thead, Tr, Th, Tbody } from "@chakra-ui/react";
import db from "../../../../Database/db.json";
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
  ["Submit"],
];

export default class AllBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Author: "",
      Publisher: "",
      Language: "",
      Condition: "",
    };
  }

  render() {
    return (
      <Box>
        <Table size="sm" colorScheme="teal" fontSize="sm" variant="unstyled">
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
            {db.BookCollection.map((book) => (
              <ShowBook key={book.id} book={book} />
            ))}
          </Tbody>
        </Table>
      </Box>
    );
  }
}
