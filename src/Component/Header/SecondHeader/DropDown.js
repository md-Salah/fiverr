import React from "react";
import { Icon } from "@chakra-ui/icons";
import { Box, Flex, Text, useBoolean } from "@chakra-ui/react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import {
  UnorderedList
} from '@chakra-ui/react';
import { dropdownData, sideElems } from '../../../dev-data';
import './style.css';

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
        py="15px"
        px="35px"
        left="10%"
        w="80%"
        position="absolute"
        zIndex="2"
        bg="white"
      >
        <Flex
          flexDirection="row"
          justifyContent="space-between"
        >
          <UnorderedList>
            {
              dropdownData.map((data) => (
                <Text 
                  cursor='pointer' 
                  color="#363636" 
                  className="dropdown__elem"
                  pb="2"
                >
                  {data.title}
                </Text>
              ))
            }
          </UnorderedList>
          <UnorderedList>
            {
              sideElems.map((elem) => (
                <Text cursor='pointer' color="#319C90">
                  {elem.title}
                </Text>
              ))
            }
          </UnorderedList>
        </Flex>
      </Box>
    </Box>
  );
};

export default DropDown;
