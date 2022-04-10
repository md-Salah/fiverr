import React, { useState } from "react";
import {
  Box,
  Input,
  Button,
  InputGroup,
  InputRightAddon,
  InputLeftAddon,
  Select,
} from "@chakra-ui/react";
import { AutoCompleteInput } from "../../GeneralComponent/AutoCompleteInput";

const searchOn = ["বই", "লেখক", "প্রকাশনী", "বিষয়"];

export default function Search(props) {
  const [searchKey, setSearchKey] = useState(searchOn[0]);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText != "") {
      if(searchKey === "বই"){
        //Find searchText on book title
      }
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <InputGroup>
        <InputLeftAddon p="0">
          <Select
            onChange={(e) => setSearchKey(e.target.value)}
            borderRightRadius="0"
            bg="white"
          >
            {searchOn.map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </Select>
        </InputLeftAddon>

        <AutoCompleteInput
          id='search'
          type="text"
          placeholder="Search by Book / Author Name"
          value={searchText}
          setValue={setSearchText}
          options={['Humayun Ahmed', 'Zafor Iqbal', 'Programming']}
        />

        <InputRightAddon
          p="0"
          children={
            <Button
              type="submit"
              borderLeftRadius="none"
              borderRadius="inherit"
              colorScheme="blue"
              mr="-1"
            >
              Search
            </Button>
          }
        />
      </InputGroup>
    </form>
  );
}
