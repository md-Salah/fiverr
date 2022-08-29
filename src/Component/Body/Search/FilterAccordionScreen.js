import React from 'react'
import { 
    Box, 
    Button, 
    Text,
    Stack,
    Checkbox,
    useCheckboxGroup
} from '@chakra-ui/react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSquareCaretLeft } from '@fortawesome/free-regular-svg-icons';
import { 
    publishers,
    authors,
    formats,
    conditions,
    categories,
    sortParams
} from '../../../dev-data';
import AccordionContent from '../AccordionContent';

const FilterAccordionScreen = ({ setSortClicked }) => {
    const {
        value: filterBy,
        setValue: setFilterBy,
        getCheckboxProps,
      } = useCheckboxGroup(); 
  return (
    <Box>
        <Button
            leftIcon={
                <FontAwesomeIcon
                    icon={faSquareCaretLeft}
                />
            }
            display={'flex'}
            justifyContent={"flex-start"}
            w={"100vw"}
            onClick={() => setSortClicked(false)}
        >
            Back
        </Button>
        <Box
            backgroundColor={"#EFEFEF"}
            display={"flex"}
            alignItems={"center"}
            p={"3"}
        >
            <Text
                fontWeight={"bold"}
                color={"#008080"}
                fontSize={"large"}
                _hover={{ cursor: "pointer" }}
            >
                Clear
            </Text>
            <Text
                textAlign={"center"}
                fontSize={"xl"}
                px="30%"
            >
                Filter
            </Text>
        </Box>
        <AccordionContent
            title="Sort By"
            accordionItems={sortParams}
            getCheckboxProps={getCheckboxProps}
            filterParams={filterBy}
        />
        <AccordionContent
            title="Publishers"
            accordionItems={publishers}
            getCheckboxProps={getCheckboxProps} 
            filterParams={filterBy}
        />
        <AccordionContent
            title="Categories"
            accordionItems={categories}
            getCheckboxProps={getCheckboxProps}
            filterParams={filterBy}
        />
        <AccordionContent
            title="Authors"
            accordionItems={authors}
            getCheckboxProps={getCheckboxProps}
            filterParams={filterBy}
        />
        <AccordionContent
            title="Formats"
            accordionItems={formats}
            getCheckboxProps={getCheckboxProps}
            filterParams={filterBy}
        />
        <AccordionContent
            title="Conditions"
            accordionItems={conditions}
            getCheckboxProps={getCheckboxProps}
            filterParams={filterBy}
        />
    </Box>
  )
}

export default FilterAccordionScreen