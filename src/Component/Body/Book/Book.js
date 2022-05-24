import React from "react";
import { Link } from "react-router-dom";
import { Box, Text, Image, Button, VStack, Tag, TagLabel } from "@chakra-ui/react";

export const Book = ({
  id,
  key,
  bookName,
  author = "Humayun ahmed",
  priceNew = "120",
  priceOld = "50",
}) => {
  const handleOnClick = () => {};

  return (
    <Box
      w="250px"
      bg="white"
      borderRadius="5px"
      boxShadow="base"
      onClick={() => handleOnClick(id)}
    >
      {/* Image box */}
      <Link
        to={{
          pathname: "/BookDetails",
          state: [{ id: id }],
        }}
      >
        <Box
          w="100%"
          h="280px"
          overflow="hidden"
          borderRadius="5px 5px 0 0"
          position="relative"
          _hover={{ opacity: 0.8 }}
        >
          <Image
            display="block"
            alt="Image"
            src="../../Books/badsha.jpg"
            maxH="100%"
            w="100%"
            fit="cover"
          />
          <Tag
            boxShadow='lg'
            position="absolute"
            bg='tomato'
            color='white'
            top="0"
            left='0'
            px="10px"
            py='3px'
            mt='15px'
            borderRadius="0 5px 5px 0"
            fontWeight='bold'
            letterSpacing="wide"
          >
            <TagLabel className="Bangla">পুরাতন বই</TagLabel>
          </Tag>
        </Box>
      </Link>

      {/* Details box */}
      <VStack w="100%" pb="15px">
        <Link
          to={{
            pathname: "/BookDetails",
            state: [{ id: id }],
          }}
        >
          <Text
            _hover={{ "text-decoration": "underline" }}
            className="BookTitle"
            textAlign="center"
            fontSize="20px"
            mt="10px"
          >
            {bookName}
          </Text>
        </Link>
        <Text textAlign="center" fontSize="16px" fontWeight="bold" color="teal">
          {`Price: ${priceNew} Tk`}
        </Text>
        <Button
          borderRadius="5px"
          w="70%"
          size="sm"
          _hover={{ "background-color": "tomato", color: "white" }}
        >
          Add to Cart
        </Button>

        <Text
          textAlign="center"
          fontSize="12px"
          letterSpacing="widest"
          pt="10px"
        >
          {`More Conditions: ${priceOld} - ${priceNew} Tk`}
        </Text>

        <Button
          borderRadius="5px"
          size="sm"
          w="80%"
          colorScheme="teal"
          _hover={{ "background-color": "teal", color: "white" }}
        >
          View Details
        </Button>
      </VStack>
    </Box>
  );
};

export default Book;
