import { Box, Text, useRadio } from "@chakra-ui/react";
import React from "react";

const DeliverySelectionBox = () => {
//   const { name, minPrice = "-", maxPrice = "-" } = props;
//   const { getInputProps, getCheckboxProps } = useRadio(props);

  return (
    <Box as="label">
      {/* <input {...getInputProps()} hidden /> */}
      <input hidden />

      <Box
        // {...getCheckboxProps()}
        cursor="pointer"
        _hover={{ backgroundColor: "#edf5f5" }}
        _checked={{ bg: "#bfe0dc" }}
        border="1px solid #008575"
        borderRadius="sm"
        my="5px"
        px="2px"
        w={{ base: "100px", md: "110px", lg: "120px" }}
        textAlign="center" 
        fontSize={"sm"}
        className="Bangla"
        // bgColor={"#f4f4f4"}
      >
        <Text 
          fontWeight="semibold" 
        >
          হোম ডেলিভারি (ঢাকার ভিতর) 
        </Text>
        <Text>
            সময়ঃ 3 দিন
        </Text>
        <Text>
            চার্জঃ 60 ৳
        </Text>
      </Box>
    </Box>
  );
};

export default DeliverySelectionBox;
