import { Box } from '@chakra-ui/react'
import React from 'react'

const MainContainer = ({children}) => {
  return (
    <Box mx={['30px', '60px', '120px', '150px']}>
        {children}
    </Box>
  )
}

export default MainContainer
