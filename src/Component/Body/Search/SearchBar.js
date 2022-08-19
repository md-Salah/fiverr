import React, { useState } from "react";
import { Button, Flex } from "@chakra-ui/react";
import { AutoCompleteInput } from "../../GeneralComponent/AutoCompleteInput";
import { Link } from "react-router-dom";

export default function SearchBar({ size }) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText != "") {
      //Find searchText on book title
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <Flex
        p="5px"
        bg="white"
        alignItems="center"
        w={["100%", "100%", "300px", "400px"]}
        boxShadow="base"
        borderRadius="sm"
      >
        <AutoCompleteInput
          size={size}
          variant="unstyled"
          placeholder="Search by Book / Author Name"
          value={searchText}
          setValue={setSearchText}
          options={["Humayun Ahmed", "Zafor Iqbal", "Programming"]}
        />

        <Link to="/Search">
          <Button
            size={size}
            type="submit"
            borderRadius="none"
            colorScheme="teal"
          >
            Search
          </Button>
        </Link>
      </Flex>
    </form>
  );
}
