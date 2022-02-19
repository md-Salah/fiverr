import React, { useState } from "react";
import { Tr, Box, Text, Td, Input, Button, Circle } from "@chakra-ui/react";

export const ShowBook = ({ book, tableTitles, updateBook }) => {
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
    //updateBook(bookDetails);
    console.log(bookDetails, "is sent to database");
    setBtn(0);
  };

  return (
    <Tr>
      {tableTitles.map(([key]) => {
        const toggle = key !== selectedKey;
        const value = bookDetails[key];

        return (
          <Td
            border="1px solid teal"
            p='0'
            m='0'
            textAlign="center"
            key={key}
            onDoubleClick={() => handleDoubleClick(key)}
            h='45px'
            w='inherit'
            overflow='hidden'
          >
            {toggle ? (
              <Text h='inherit' overflowY='auto' m='1px' css={{scrollbarWidth: 'thin'}}>{value}</Text>
            ) : (
              <form onSubmit={handleSubmit}>
                <Input
                  bg='#FDEFF4'
                  fontSize='sm'
                  borderRadius='none'
                  m='0'
                  h='45px'
                  minW='50px'
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
      <Box p="1">
        <Button
          size="sm"
          isDisabled={btn < 1}
          m="4px"
          colorScheme="teal"
          variant="outline"
          onClick={handleUpdateButton}
          rightIcon={btn > 0 && (
            <Circle
              textAlign="center"
              bg="red"
              color='white'
              pt='2px'
              fontWeight="bold"
              letterSpacing="wider"
              size='20px'
            >
              {btn}
            </Circle>
          )}
        >
          Update
        </Button>
      </Box>
    </Tr>
  );
};
