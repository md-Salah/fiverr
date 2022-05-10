import { Box } from '@chakra-ui/react'
import React from 'react'

const MainContainer = ({children}) => {
  return (
    <Box w={{base: '90%', lg: '80%'}} mx='auto' h='inherit'>
        {children}
    </Box>
  )
}

export default MainContainer
