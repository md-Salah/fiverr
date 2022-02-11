import React, { useState } from "react";
import { Tr, Box, Td, Input, Button, Circle } from "@chakra-ui/react";

export const ShowBook = ({ book, setBook }) => {
  const [bookDetails, setBookDetails] = useState({ ...book });
  const [selectedKey, setSelectedKey] = useState(null);
  const [updatedValue, setUpdatedValue] = useState("");

  const [btn, setBtn] = useState(0);

  const handleDoubleClick = (key) => {
    setSelectedKey(key);
    setUpdatedValue(bookDetails[key]);
  };

  const handleSubmit = (e) => {
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

    e.preventDefault();
    setSelectedKey(null);
  };

  const handleUpdateButton = (e) => {
    //setBook(bookDetails);
    console.log(bookDetails, "is sent to database");
    setBtn(0);
  };

  return (
    <Tr>
      {Object.entries(bookDetails).map(([key, value]) => {
        const toggle = key !== selectedKey;

        return (
          <Td
            overflow='hidden'
            wordBreak='word-break'
            textOverflow='ellipsis'
            border="1px solid teal"
            px="1"
            textAlign="center"
            key={key}
            value={value}
            onDoubleClick={() => handleDoubleClick(key)}
            mx='-300px'
          >
            {toggle ? (
              value
            ) : (
              <form onSubmit={handleSubmit}>
                <Input
                  type="text"
                  px="1"
                  value={updatedValue}
                  onChange={(e) => setUpdatedValue(e.target.value)}
                />
              </form>
            )}
          </Td>
        );
      })}
      <Td p="0" border="2px solid teal">
        {btn > 0 && (
          <Box
            p="2px"
            textAlign="center"
            color="red"
            fontWeight="bold"
            letterSpacing="wider"
          >
            {"0" + btn}
          </Box>
        )}
        <Button
          size="sm"
          isDisabled={btn < 1}
          m="4px"
          colorScheme="teal"
          variant="outline"
          onClick={handleUpdateButton}
          flexDirection="column"
        >
          Update
        </Button>
      </Td>
    </Tr>
  );
};
