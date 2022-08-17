import React, {useState} from 'react'
import { Box, useBoolean, Button } from '@chakra-ui/react'
import {ContentBefore, ContentAfter} from './Content';

const Book = ({book}) => {
  return (
    <Box
        w="178px"
        maxH={"max-content"}
        // border="1px solid #ccc"
        cursor="pointer"
        // pos="relative"
        // bg="yellow"
        _hover={{
          border: "1px solid #ccc", 
          boxShadow: "base", 
          backgroundColor: "gray.100" 
        }}
    >
      <ContentBefore book={book}/>
    </Box>
  )
}

export default Book