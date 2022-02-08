import React from "react";
import {
  Button,
  Flex,
  FormControl,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";

export const AddBook = () => {
  return (
    <FormControl>
      <Stack w={{ lg: "60%" }} mx="auto">
        <Input placeholder="Title" size="sm" />
        <Input placeholder="Author" size="sm" />
        <Flex>
          <Input w="40%" placeholder="Publisher" size="sm" />
          <Input w="40%" placeholder="Translator" size="sm" />
          <Input w="20%" placeholder="Edition" size="sm" />
        </Flex>
        <Flex>
          <Input placeholder="Actual Price" size="sm" />
          <Input placeholder="Sell Price" size="sm" />
          <Input placeholder="Discount Price" size="sm" />
          <Input maxW="20%" placeholder="Qty" size="sm" />
        </Flex>
        <Flex>
          <Input w="40%" placeholder="Cover Type" size="sm" />
          <Input w="40%" placeholder="Print Quality" size="sm" />
          <Input w="20%" placeholder="Cost" size="sm" />
        </Flex>
        <Flex>
          <Input w="40%" placeholder="No of Pages" size="sm" />
          <Input w="40%" placeholder="Condition" size="sm" />
        </Flex>
        <Input placeholder="Category tags" size="sm" />
        <Flex>
          <Textarea
            w="65%"
            placeholder="Details Description/ Caption"
            size="sm"
          ></Textarea>
          <Textarea w="45%" placeholder="Notes" size="sm"></Textarea>
        </Flex>
          <Button size="sm" colorScheme="teal">
            Add New To Database
          </Button>
          <Button size="sm" colorScheme="teal">
            Update Existing One
          </Button>
      </Stack>
    </FormControl>
  );
};
