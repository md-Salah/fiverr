import React, { useState } from "react";
import {
  Tr,
  Tooltip,
  Text,
  Td,
  Input,
  Button,
  Circle,
  Select,
  FormControl,
} from "@chakra-ui/react";

export const TableRow = ({ book, tableTitles, updateBook }) => {
  const [bookDetails, setBookDetails] = useState({ ...book });

  const [selectedKey, setSelectedKey] = useState(null);
  const [updatedValue, setUpdatedValue] = useState("");
  const [btn, setBtn] = useState(0);

  const handleClick = (key) => {
    setSelectedKey(key);
    setUpdatedValue(bookDetails[key]);
  };

  const handleSubmit = () => {
    let updatedDetails = { ...bookDetails };
    updatedDetails[selectedKey] = updatedValue;
    setBookDetails(updatedDetails);

    let sum = 0;
    for (let key in updatedDetails) {
      if (updatedDetails[key] != book[key]) {
        sum = sum + 1;
      }
    }
    setBtn(sum);

    setSelectedKey(null);
  };

  const handleCofirmButton = (e) => {
    //updateBook(bookDetails);
    console.log(bookDetails, "is sent to database");
    setBtn(0);
  };


  return (
    <Tr>
      {tableTitles.map(
        ({ name, isScroll = false, inputType = "text", options = [] }) => {
          const key = name;
          const toggle = key !== selectedKey;
          const value = bookDetails[key];

          return (
            <Td key={key} onClick={() => handleClick(key)} boxShadow="sm">
              {inputType === "Select" ? (
                <Select variant="unstyled" size="xs">
                  {options.map((text) => (
                    <option key={text} value={text}>
                      {text}
                    </option>
                  ))}
                </Select>
              ) : toggle ? (
                <Tooltip
                  label={value}
                  openDelay="100"
                  closeDelay="100"
                  placement="auto"
                >
                  <Text
                    fontSize="xs"
                    noOfLines="2"
                    overflowY={isScroll ? "auto" : "hidden"}
                    css={{ scrollbarWidth: "thin" }}
                    mr={isScroll && "-7px"}
                  >
                    {value}
                  </Text>
                </Tooltip>
              ) : (
                <FormControl>
                  <Input
                    id="edit"
                    type="text"
                    variant="flushed"
                    w="100%"
                    size="xs"
                    h="32px"
                    px="1px"
                    value={updatedValue}
                    onChange={(e) => setUpdatedValue(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") handleSubmit(e);
                    }}
                  />
                </FormControl>
              )}
            </Td>
          );
        }
      )}
      {btn > 0 && (
        <Td key={book.id} p="1" boxShadow="sm">
          <Button
            size="sm"
            isDisabled={btn < 1}
            m="4px"
            colorScheme="teal"
            variant="outline"
            onClick={handleCofirmButton}
            rightIcon={
              <Circle
                textAlign="center"
                bg="red"
                color="white"
                pt="2px"
                fontWeight="bold"
                letterSpacing="wider"
                size="20px"
              >
                {btn}
              </Circle>
            }
          >
            Confirm
          </Button>
        </Td>
      )}
    </Tr>
  );
};
