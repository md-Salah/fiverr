import React, {useState} from 'react'
import { Box } from '@chakra-ui/react'
import SearchResultsScreenBefore from '../Component/Body/Search/SearchResultsScreenBefore'
import FilterAccordionScreen from '../Component/Body/Search/FilterAccordionScreen';

const SearchResultsScreenSm = ({
    pageNumber,
    setPageNumber,
    handleIncrement,
    handleDecrement,
    filterBy
}) => {
    const [sortClicked, setSortClicked] = useState(false);
  return (
    <Box>
        {
            sortClicked ? (
                <FilterAccordionScreen
                    setSortClicked={setSortClicked}
                />
            ) : (
                <SearchResultsScreenBefore
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                    handleDecrement={handleDecrement}
                    handleIncrement={handleIncrement}
                    filterParams={filterBy}
                    setSortClicked={setSortClicked}
                />
            )
        }
    </Box>
  )
}

export default SearchResultsScreenSm