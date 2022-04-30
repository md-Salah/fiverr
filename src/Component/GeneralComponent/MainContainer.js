import { Box } from '@chakra-ui/react'
import React from 'react'

const MainContainer = ({children}) => {
  return (
    <Box mx={['20px', '30px', '60px', '150px']} h='inherit'>
        {children}
    </Box>
  )
}

export default MainContainer
