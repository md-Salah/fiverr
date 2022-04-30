import React, { useState } from "react";
import {
  Box,
  Flex,
  Select,
  Text,
  Icon,
  Stack,
  Checkbox,
  useCheckboxGroup,
  Input,
  NumberInput,
  NumberInputField,
  useNumberInput,
} from "@chakra-ui/react";
import { FaFilter, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdCancel, MdOutlinePersonSearch } from "react-icons/md";
import { BiCategory, BiBook } from "react-icons/bi";
import { ImBooks } from "react-icons/im";
import { BsShop } from "react-icons/bs";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const SearchResult = () => {
  const publishers = [
    " পাঞ্জেরী পাবলিকেশন্স",
    "আল-আমিন প্রকাশন",
    "আদর্শ",
    "পিয়ারসন",
    " চর্চা গ্রন্থ প্রকাশ",
    "শব্দশৈলী",
    "রুহামা পাবলিকেশন",
    "সাফল্য প্রকাশনী",
    "ইত্যাদি গ্রন্থ প্রকাশ",
    "বৈশাখী প্রকাশ",
  ];
  const authors = [
    "ডেল কার্নেগী",
    "ডাঃ লুৎফর রহমান",
    "মোস্তাক আহ্‌মাদ",
    "নেপোলিয়ন হিল",
    "ব্রায়ান ট্রেসি",
    "শিব খেরা",
    "রবার্ট টি. কিয়োসাকি",
    "রাজিব আহমেদ",
    "জোসেফ মারফি",
    "ড. নরম্যান ভিনসেন্ট পিল",
  ];
  const formats = [
    "Hardcover",
    "Paperback",
    "Original Print",
    "Local Print",
    "Premium Print",
  ];
  const conditions = ["New", "Like New", "Very Good", "Good", "Acceptable"];
  const categories = [
    "মোটিভেশন",
    "প্রোগ্রামিং",
    "ইসলামিক",
    "ইতিহাস",
    "মুক্তিযুদ্ধ",
    "দক্ষতা বৃদ্ধি",
    "ব্যবসা ও বিনিয়োগ",
  ];

  const {
    value: filterBy,
    setValue: setFilterBy,
    getCheckboxProps,
  } = useCheckboxGroup();

  const [pageNumber, setPageNumber] = useState(1);

  const handleIncrement = (pageNumber) => {
    const maxPageNumber = 80;
    if (pageNumber < maxPageNumber) setPageNumber(pageNumber + 1);
  };

  const handleDecrement = (pageNumber) => {
    let minPageNumber = 1;
    if (pageNumber > minPageNumber) setPageNumber(pageNumber - 1);
  };

  const removeFilter = (filter) => {
    let newFilter = filterBy.filter((text) => text != filter);
    setFilterBy(newFilter);
  };

  return (
    <Box mt="100px" mx="10%" mb="100px">
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
          <Box>Search Result</Box>
          
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
    </Box>
  );
};

export default SearchResult;
