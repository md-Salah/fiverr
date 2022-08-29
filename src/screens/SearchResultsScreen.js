import React, {useState} from 'react'
import SearchResultsScreenSm from './SearchResultsScreenSm'
import SearchResultsScreenLg from './SearchResultsScreenLg'
import { 
  Box, 
  useCheckboxGroup,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import MainContainer from '../Component/GeneralComponent/MainContainer';

const SearchResultsScreen = () => {
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
    <Box pt="120px" pb={"50px"}>
      <MainContainer>
        <Breadcrumb 
          spacing='8px' 
          separator={<ChevronRightIcon color='gray.500' />}
          p={"10px"}
          ml={"5%"}
        >
          <BreadcrumbItem>
            <BreadcrumbLink 
              href='/'
              color={"#008080"}
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink 
              href='/search'
              color={"#008080"}
            >
              Search Results
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Box display={{ base: "none", md: "none", lg: "block" }}>
            <SearchResultsScreenLg
                getCheckboxProps={getCheckboxProps}
                filterBy={filterBy}
                setFilterBy={setFilterBy}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                removeFilter={removeFilter}
            />
        </Box>
        <Box display={{ base: "block", md: "block", lg: "none" }}>
            <SearchResultsScreenSm
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                filterBy={filterBy}
            />
        </Box>
      </MainContainer>
    </Box>
  )
}

export default SearchResultsScreen