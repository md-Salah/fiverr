import React, { useState } from "react";
import {
  Box,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Icon,
  FormControl,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";

export default function Search(props) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(value);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <InputLeftElement>
            <Icon as={SearchIcon} />
          </InputLeftElement>
          <Input
            bg="white"
            variant="outline"
            type="text"
            placeholder="Search by Book / Author Name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <InputRightAddon p="0">
            <Button
              type='submit'
              borderLeftRadius="none"
              colorScheme="gray"
              mx="0"
            >
              Search
            </Button>
          </InputRightAddon>
        </InputGroup>
        </form>
    </Box>
  );
}
