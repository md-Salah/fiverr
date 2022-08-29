import { Box } from '@chakra-ui/react'
import React from 'react'

const MainContainer = ({children}) => {
  return (
    <Box w={"100%"} px={{ base: "3%", md: "4%", lg: "5%" }} h='inherit'>
      {children}
    </Box>
  )
}

export default MainContainer
