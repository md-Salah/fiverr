import React, {useState} from 'react'
import { 
    Box, 
    Flex, 
    Tag, 
    Text,
    TagLabel,
    TagCloseButton, 
    SimpleGrid,
    NumberInput,
    NumberInputField,
    Icon,
} from '@chakra-ui/react'
import MainContainer from '../../GeneralComponent/MainContainer'
import Book from '../Book/Book'
import { allBooks } from '../../../dev-data'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SimpleSlider from '../../Sliders/SimpleSlider/SimpleSlider'

const SearchResultsScreenBefore = ({
    pageNumber,
    setPageNumber,
    handleIncrement,
    handleDecrement,
    filterParams,
    setSortClicked
}) => {
  return (
    <Box>
            <Box
                boxShadow="base"
                p="10px"
                bg="gray.100"
            >
                <Flex>
                    <Text> 1 - 30 of 12,629 results for</Text>
                    <Text fontWeight="bold" ml="5px">
                    "humayun ahmed"
                    </Text>
                </Flex>
            </Box>
      <MainContainer>
        {/* Title with sort by start here */}
            <Box
                py={"3"}
            >
                <Text
                    fontWeight={"bold"}
                    textAlign={"right"}
                    color={"#008080"}
                    _hover={{ 
                        textDecoration: "underline",
                        cursor: "pointer"
                    }}
                    onClick={() => setSortClicked(true)}
                >
                    Sort & Filter
                </Text>
                <SimpleGrid 
                    columns={{ base: 3, md: 4 }} 
                    columnGap={2} 
                    py={"2"}
                    rowGap={2}
                >
                    {
                        filterParams.map((param) => (
                            <Tag
                                size={"sm"}
                                borderRadius='full'
                                variant='solid'
                                colorScheme="gray"
                                p={"2"}
                            >
                                <TagLabel>
                                    {param}
                                </TagLabel>
                                <TagCloseButton />
                            </Tag>
                        ))
                    }
                </SimpleGrid>
            </Box>
            <SimpleGrid 
                columns={{ base: 2, md: 4 }} 
                columnGap={2} 
                rowGap={4}
            >
                {
                    allBooks.map((book) => (
                        <Book book={book}/>
                    ))
                }
            </SimpleGrid>
            <Flex
              bg="gray.200"
              w="100%"
              p="10px"
              bottom="0"
            //   position="absolute"
              alignItems="center"
              justifyContent="center"
              my={"5"}
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
            <SimpleSlider title="Bestsellers" />
        </MainContainer>
    </Box>
  )
}

export default SearchResultsScreenBefore