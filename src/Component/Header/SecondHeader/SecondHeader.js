import { Box,Stack } from "@chakra-ui/react";
import React from "react";

import MainContainer from "../../GeneralComponent/MainContainer";
import DropDown from "./DropDown";

const SecondHeader = () => {
  return (
    <Box 
      display={{
        base: "none",
        lg: "flex"
      }}
      bg="white" 
      w="100%" 
      boxShadow="base" 
      h="40px" 
      // overflowX={{base: 'auto', lg: 'none'}} 
      // css={{ scrollbarWidth:'none' }} 
    >
      <MainContainer>
        <Stack
          direction="row"
          h="inherit"
          justifyContent="space-between"
          alignItems="center"
          w={{base:'95%',md:'80%'}}
          mx='auto'
        >
          <DropDown title="Popular Genre" />
          <DropDown title="Subjects" />
          <DropDown title="Authors" />
          <DropDown title="Publishers" />
          <DropDown title="Islamic Books" />
          <DropDown title="University Books" />
          <DropDown title="HSC, Admission" />
          <DropDown title="School Books" />
        </Stack>
      </MainContainer>
    </Box>
  );
};

export default SecondHeader;
