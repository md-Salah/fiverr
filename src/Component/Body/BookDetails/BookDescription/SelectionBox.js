import { Box, Text, useRadio } from "@chakra-ui/react";
import React from "react";

export const SelectionBox = (props) => {
  const { name, minPrice = "-", maxPrice = "-" } = props;
  const { getInputProps, getCheckboxProps } = useRadio(props);

  return (
    <Box as="label">
      <input {...getInputProps()} hidden />

      <Box
        {...getCheckboxProps()}
        cursor="pointer"
        fontSize="sm"
        _hover={{ backgroundColor: "#edf5f5" }}
        _checked={{ bg: "#bfe0dc" }}
        border="1px solid #008575"
        borderRadius="sm"
        my="5px"
        p="10px"
        minW='80px'
      >
        <Text textAlign="center" fontWeight="semibold" mb="3px">
          {name}
        </Text>
        <Text textAlign='center'>
          {minPrice == maxPrice
            ? `${minPrice}৳`
            : `${minPrice}৳ - ${maxPrice}৳`}
        </Text>
      </Box>
    </Box>
  );
};
