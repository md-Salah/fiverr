import React from "react";
import { Icon } from "@chakra-ui/icons";
import { Box, Flex, Text, useBoolean } from "@chakra-ui/react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const DropDown = ({ title }) => {
  const [toggle, setToggle] = useBoolean(false);

  return (
    <Box onMouseEnter={setToggle.on} onMouseLeave={setToggle.off}>
      <Flex
        alignItems="center"
        cursor="pointer"
        py="5px"
        borderBottom={toggle ? "2px solid teal" : "none"}
        h='30px'
      >
        <Text my='auto' fontSize="sm" color={toggle ? "teal" : "subHeading"} noOfLines='1'>
          {title}
        </Text>
        <Icon
          as={toggle ? BiChevronUp : BiChevronDown}
          color={toggle ? "teal" : "#707e80"}
        />
      </Flex>
      <Box
        display={toggle ? "initial" : "none"}
        boxShadow="md"
        p="25px"
        left="10%"
        w="80%"
        position="absolute"
        zIndex="2"
        bg="white"
      >
        Biographies & Memoirs Arts & Literature Cultural European Historical
        Leaders & Notable People Shop All Children's Action & Adventure Activity
        Books Animals Cars & Trucks Classics Shop All Education & Reference
        Catalogs Colleges Curriculum Dictionaries Education Shop All History
        African Ancient Asian Black History Canadian Shop All Literature &
        Fiction Anthologies Classics Contemporary Foreign Language Genre Fiction
        Shop All Mystery & Suspense Conspiracy Crime Detective Mysteries Spy
        Shop All Religion & Spirituality Agnosticism Astrology Atheism Buddhism
        Christian Shop All More Categories Romance Sci-Fi & Fantasy Science &
        Math Teen & Young Adult Health, Fitness & Dieting Shop All
      </Box>
    </Box>
  );
};

export default DropDown;
