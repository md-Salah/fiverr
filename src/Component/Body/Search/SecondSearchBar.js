import React from 'react'
import { Box, Input } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SecondSearchBar = ({searchBarPlaceholder}) => {
  return (
    <Box
        display={"flex"}
        alignItems={"center"}
        position="relative"
        py={"4"}
    >
        <Input 
            type="text" 
            placeholder={searchBarPlaceholder}
            position={"absolute"}
            size={"sm"}
        />
        <Box
            position={"absolute"}
            zIndex={"9"}
            right={"0"}
            pr={"3"}
        >
            <FontAwesomeIcon
                icon={faMagnifyingGlass}
            />
        </Box>
    </Box>
  )
}

export default SecondSearchBar