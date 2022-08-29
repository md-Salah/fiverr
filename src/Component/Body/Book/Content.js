import React from 'react'
import { 
    Box, 
    Button, 
    Flex, 
    Image, 
    Stack, 
    Text, 
    Tag, 
    TagLabel 
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const ContentBefore = ({ book }) => {
  return (
    <Box>
        <Flex
            flexDirection="column"
            alignItems={"center"}
        >
            <Box
                w="120px"
                h={'200px'}
                py="2"
                zIndex="10"
            >
                <Image 
                    src={book.image} 
                    w="100%"
                    h="100%"
                    border={"none"}
                />
                {/* <Tag
                    boxShadow='lg'
                    position="absolute"
                    bg='tomato'
                    color='white'
                    top="0"
                    left='0'
                    px="10px"
                    py='3px'
                    mt='15px'
                    borderRadius="0 5px 5px 0"
                    fontWeight='bold'
                    letterSpacing="wide"
                >
                <TagLabel className="Bangla">
                    পুরাতন বই
                </TagLabel>
            </Tag> */}
            </Box>
            <Stack
                display={"flex"}
                flexDirection="column"
                alignItems={"center"}
                textAlign='center'
                py={"2"}
                spacing={"0"}
            >
                <Link to="/bookDetails">
                    <Text 
                        className='Bangla'
                        fontWeight={"500"}
                        noOfLines={'2'}
                        _hover={{ 
                            textDecoration: "underline", 
                            textDecorationThickness: "1px",
                            color: "teal"
                        }}
                        h="53px"
                        w="100%"
                        fontSize="xl"
                    >
                        {book.title}
                    </Text>
                </Link>
                <Link to="/Search">
                    <Text
                        className='Bangla'
                        py="2"
                        fontWeight={"500"}
                        color={"gray.600"}
                        _hover={{ 
                            textDecoration: "underline", 
                            textDecorationThickness: "0.5px",
                            color: "teal"
                        }}
                        fontSize={"large"}
                    >
                        {book.author}
                    </Text>
                </Link>
                <Flex
                    alignItems={"center"}
                > 
                    <Text
                        fontWeight="bold"
                        color={"gray.500"}
                        fontSize="sm"
                        textDecoration={"line-through"}
                        mr="3"
                    >
                        {book.price} ৳
                    </Text>
                    <Text
                        fontWeight="bold"
                        fontSize="md"
                    >
                        {book.price} ৳
                    </Text>
                </Flex>
            </Stack>
            <Button 
                // colorScheme="#FFAD33"
                colorScheme='teal'
                bg="#3B9D9D"
                w="full"
                borderRadius={"none"}
                bottom={"0"}
            >
                Add to Cart
            </Button>
        </Flex>
    </Box>
  )
}

export const ContentAfter = () => {
    return (
        <Box
            pos="abosolute"
            zIndex="10"
        >   
            <Box
                display="flex" 
                flexDirection="column"
                alignItems="center"
                mt="50%"
            >
                <Button 
                    // colorScheme="#FFAD33"
                    colorScheme='yellow'
                >
                    Add to Cart
                </Button>
            </Box>
            <Link to="/bookDetails">
                <Button 
                    colorScheme="teal"
                    w="full"
                    mt="86%"
                    borderRadius="none"
                >
                    View Details
                </Button>
            </Link>
        </Box>
    )
}