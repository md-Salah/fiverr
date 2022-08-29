import React from "react";
import {
  Box,
  Flex,
  Select,
  Text,
  Icon,
  Stack,
  Checkbox,
  NumberInput,
  NumberInputField,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaFilter, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdCancel, MdOutlinePersonSearch } from "react-icons/md";
import { BiCategory, BiBook } from "react-icons/bi";
import { ImBooks } from "react-icons/im";
import { BsShop } from "react-icons/bs";
import MainContainer from "../Component/GeneralComponent/MainContainer";
import Book from "../Component/Body/Book/Book";
import { allBooks } from "../dev-data";
import SecondSearchBar from "../Component/Body/Search/SecondSearchBar";
import {
  publishers,
  authors,
  formats,
  conditions,
  categories
} from "../dev-data";

const SearchResultsScreenLg = ({
  getCheckboxProps,
  filterBy,
  setFilterBy,
  pageNumber,
  setPageNumber,
  handleIncrement,
  handleDecrement,
  removeFilter
}) => {

  return (
    <Box>
      <MainContainer>
        {/* Title with sort by start here */}
        <Flex
          boxShadow="base"
          p="10px"
          bg="gray.100"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex>
            <Text> 1 - 30 of 12,629 results for</Text>
            <Text fontWeight="bold" ml="5px">
              "humayun ahmed"
            </Text>
          </Flex>
          <Flex>
            <Text mr="10px" pt="4px" fontWeight="bold">
              Sort by:
            </Text>
            <Select w="150px" size="sm" bg="white">
              <option value="Most Popular">Most Popular</option>
              <option value="BestSeller">BestSeller</option>
              <option value="Title (A to Z)">Title (A to Z)</option>
              <option value="Title (Z to A)">Title (Z to A)</option>
            </Select>

            <Text mr="10px" ml="25px" pt="4px" fontWeight="bold">
              Item per page:{" "}
            </Text>
            <Select w="80px" size="sm" bg="white">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </Select>
          </Flex>
        </Flex>
        {/* Title with sort by ends here */}

        <Flex mt="30px" flexDirection="row" justifyContent="space-between">
          {/* Filter section starts here */}
          <Stack w={{ base: "100%", md: "23%" }} gap="5">
            {/* Selected filters by start here */}
            <Box bg="white" boxShadow="base" p="10px">
              <Flex
                pb="5px"
                borderBottom="1px"
                borderColor="gray.200"
                justifyContent="space-between"
              >
                <Flex>
                  <Icon as={FaFilter} mt="3px" mr="5px" />
                  <Text fontSize="lg">Filter</Text>
                </Flex>
                <Text
                  pt="4px"
                  cursor="pointer"
                  color="blue.400"
                  _hover={{ color: "blue.600" }}
                  fontSize="sm"
                  fontWeight="bold"
                  onClick={() => {
                    setFilterBy([]);
                  }}
                >
                  CLEAR ALL
                </Text>
              </Flex>
              <Flex mt="10px" minH="50px" flexWrap="wrap">
                {filterBy.map((filter) => (
                  <Flex mr="12px" px="3px" h="min-content">
                    <Text> {filter} </Text>
                    <Icon
                      as={MdCancel}
                      ml="5px"
                      mt="2px"
                      cursor="pointer"
                      color="blue.400"
                      _hover={{ color: "blue.600" }}
                      onClick={() => {
                        removeFilter(filter);
                      }}
                    />
                  </Flex>
                ))}
              </Flex>
            </Box>
            {/* Selected filters end */}

            {/* Filter by Categories starts here */}
            <Box bg="white" boxShadow="base" p="10px">
              <Flex pb="5px" borderBottom="1px" borderColor="gray.200">
                <Icon as={BiCategory} mt="3px" mr="5px" />
                <Text fontSize="lg">Categories</Text>
              </Flex>
              <SecondSearchBar
                searchBarPlaceholder={"Search Categories"}
              />
              <Stack
                mt="10px"
                pl="5px"
                maxH="250px"
                overflowY="hidden"
                _hover={{ overflowY: "auto" }}
                css={{ scrollbarWidth: "thin" }}
                spacing="1"
              >
                {categories.map((category) => (
                  <Checkbox {...getCheckboxProps({ value: category })}>
                    {category}
                  </Checkbox>
                ))}
              </Stack>
            </Box>
            {/* Filter by Categories ends here */}

            {/* Filter by Author starts here */}
            <Box bg="white" boxShadow="base" p="10px">
              <Flex pb="5px" borderBottom="1px" borderColor="gray.200">
                <Icon as={MdOutlinePersonSearch} mt="3px" mr="5px" />
                <Text fontSize="lg">Author</Text>
              </Flex>
              <SecondSearchBar
                searchBarPlaceholder={"Search Authors"}
              />
              <Stack
                mt="10px"
                pl="5px"
                maxH="250px"
                overflowY="hidden"
                _hover={{ overflowY: "auto" }}
                css={{ scrollbarWidth: "thin" }}
                spacing="1"
              >
                {authors.map((author) => (
                  <Checkbox {...getCheckboxProps({ value: author })}>
                    {author}
                  </Checkbox>
                ))}
              </Stack>
            </Box>
            {/* Filter by Author ends here */}

            {/* Filter by publishers starts here */}
            <Box bg="white" boxShadow="base" p="10px">
              <Flex pb="5px" borderBottom="1px" borderColor="gray.200">
                <Icon as={BsShop} mt="3px" mr="5px" />
                <Text fontSize="lg">Publishers</Text>
              </Flex>
              <SecondSearchBar
                searchBarPlaceholder={"Search Publishers"}
              />
              <Stack
                mt="10px"
                pl="5px"
                maxH="250px"
                overflowY="hidden"
                _hover={{ overflowY: "auto" }}
                css={{ scrollbarWidth: "thin" }}
                spacing="1"
              >
                {publishers.map((publisher) => (
                  <Checkbox {...getCheckboxProps({ value: publisher })}>
                    {publisher}
                  </Checkbox>
                ))}
              </Stack>
            </Box>
            {/* Filter by publishers ends here */}

            {/* Filter by Condition starts here */}
            <Box bg="white" boxShadow="base" p="10px">
              <Flex pb="5px" borderBottom="1px" borderColor="gray.200">
                <Icon as={BiBook} mt="3px" mr="5px" />
                <Text fontSize="lg">Conditions</Text>
              </Flex>
              <Stack mt="10px" pl="5px" spacing="1">
                {conditions.map((condition) => (
                  <Checkbox {...getCheckboxProps({ value: condition })}>
                    {condition}
                  </Checkbox>
                ))}
              </Stack>
            </Box>
            {/* Filter by Condition ends here */}

            {/* Filter by Format starts here */}
            <Box bg="white" boxShadow="base" p="10px">
              <Flex pb="5px" borderBottom="1px" borderColor="gray.200">
                <Icon as={ImBooks} mt="3px" mr="5px" />
                <Text fontSize="lg">Formats</Text>
              </Flex>
              <Stack mt="10px" pl="5px" spacing="1">
                {formats.map((format) => (
                  <Checkbox {...getCheckboxProps({ value: format })}>
                    {format}
                  </Checkbox>
                ))}
              </Stack>
            </Box>
            {/* Filter by Format ends here */}
          </Stack>
          {/* Filter section ends here */}

          <Box
            bg="white"
            boxShadow="base"
            w={{ base: "100%", md: "74%" }}
            position="relative"
          >
            <Box>
              <SimpleGrid 
                columns={5} 
                columnGap={2}
                rowGap={3}
              >
                {
                  allBooks.map((book) => (
                    <Book book={book}/>
                  ))
                }
              </SimpleGrid>
            </Box>

            {/* Search box footer starts here */}
            <Flex
              bg="gray.200"
              w="100%"
              p="10px"
              bottom="0"
              position="absolute"
              alignItems="center"
              justifyContent="center"
            >
              <Icon
                as={FaChevronLeft}
                mx="15px"
                cursor="pointer"
                _hover={{ color: "blue.600" }}
                onClick={() => handleDecrement(pageNumber)}
              />
              <NumberInput
                size="sm"
                min={1}
                max={80}
                value={pageNumber}
                onChange={(page) => setPageNumber(parseInt(page))}
              >
                <NumberInputField
                  p="5px"
                  bg="white"
                  textAlign="center"
                  w="50px"
                />
              </NumberInput>
              <Text mx="10px" fontSize="sm">
                of
              </Text>
              <Text fontSize="sm" fontWeight="bold">
                {80}
              </Text>
              <Icon
                as={FaChevronRight}
                mx="15px"
                cursor="pointer"
                _hover={{ color: "blue.600" }}
                onClick={() => handleIncrement(pageNumber)}
              />
            </Flex>
            {/* Search box footer ends here */}
          </Box>
        </Flex>
      </MainContainer>
    </Box>
  );
};

export default SearchResultsScreenLg;
