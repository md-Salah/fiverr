import React from 'react';
import {
    Grid,
    GridItem,
    Image,
    HStack,
    Icon,
    Flex,
    Text,
    Box,
    Button,
    Alert,
    AlertIcon,
    Stack
} from "@chakra-ui/react";
import BookFormat from './BookFormat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { book } from "./book";
import { faHeartCirclePlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";

const BookLayoutLg = ({ 
    toggle, 
    setToggle,
    cover,
    setCover,
    condition,
    setCondition,
    setPrint,
    print,
    isPrintModal,
    openPrintModal,
    closePrintModal,
    isConditionModal,
    openConditionModal,
    closeConditionModal
}) => {
  return (
    <Grid
        mb="20px"
        templateColumns="repeat(4, 1fr)"
        gap="5"
        borderBottom="1px solid #999"
    >
        {/* Image and share icons start */}
        <GridItem maxW="250px" colSpan={{base: '4', lg:'1'}}>
          <Image src={book.url} alt="Book Img" maxH="400px" w="100%" />

          {/* Share icons start here */}
          <HStack mt="15px" justifyContent="center" spacing="20px">
            <Icon as={FaFacebookSquare} boxSize="22px" cursor="pointer" />
            <Icon as={FaInstagram} boxSize="22px" cursor="pointer" />
            <Icon as={FaTwitterSquare} boxSize="22px" cursor="pointer" />
            <Icon as={IoShareSocial} boxSize="22px" cursor="pointer" />
          </HStack>
          {/* Share icons end here */}
          <Flex my="20px">
            <Text mr="5px">ISBN:</Text>
            <Text fontWeight="semibold">{book.ISBN}</Text>
          </Flex>
        </GridItem>
        {/* Image and Share icons end */}

        {/* Title, select cover, print & condition selection part start */}
        <GridItem 
          colSpan={{base: '4', lg: '2'}} 
          borderRight="1px solid #999"
        >
          <Stack>
            <Text fontSize="lg" fontWeight="bold">
              {book.title}
            </Text>
            <Flex>
              <Text mr="5px">by</Text>
              <Text color="teal" fontWeight="semibold">
                {book.Author}
              </Text>
            </Flex>
            <Flex>
              {
                [1,2,3,4].map((star) => (
                  <FontAwesomeIcon 
                    icon={faStar} 
                    color="#FFCC33"
                    size="lg"
                  />
                ))
              }
            </Flex>
          </Stack>


          {/* Select book cover */}
            <BookFormat
              toggle={toggle}
              setToggle={setToggle}
              cover={cover}
              setCover={setCover}
              condition={condition}
              setCondition={setCondition}
              print={print}
              setPrint={setPrint}
              isPrintModal={isPrintModal}
              openPrintModal={openPrintModal}
              closePrintModal={closePrintModal}
              isConditionModal={isConditionModal}
              openConditionModal={openConditionModal}
              closeConditionModal={closeConditionModal}
            />
          {/* Condition Selection ends here */}
        </GridItem>
        
        {/* Title, select cover, print & condition selection part ends */}

        {/* Selected informations and Add to Cart starts here */}
        <GridItem 
          colSpan={{base: '4', lg: '1'}}
        >
          <Text fontSize="lg">Selected</Text>
          <Flex mt="10px">
            <Text mr="5px">Cover:</Text>
            <Text fontWeight="bold">{cover}</Text>
          </Flex>
          <Flex mt="10px">
            <Text mr="5px">Print:</Text>
            <Text fontWeight="bold">{print}</Text>
          </Flex>
          <Flex mt="10px">
            <Text mr="5px">Condition:</Text>
            <Text fontWeight="bold">{condition}</Text>
          </Flex>

          {/* Price information start */}
          <Text mt="20px" fontSize="3xl" fontWeight="bold" color="#a31023">
            {"৳" + 150}
          </Text>
          <Text fontWeight="bold">Save ৳100!</Text>
          <Flex color="#999">
            <Text mr="10px">মুদ্রিত মূল্য</Text>
            <Text as="Del">৳ 1050</Text>
          </Flex>
          {/* Price information end */}

          <Text pt="20px">{`${book.AvailableCopy} Available`}</Text>

          {/* Add to cart & Success button starts here */}
          {toggle ? (
            <Button
              colorScheme="yellow"
              bg="#ffcc33"
              w="80%"
              mt="30px"
              ml="10%"
              boxShadow="lg"
              onClick={() => setToggle(!toggle)}
            >
              Add to Cart
            </Button>
          ) : (
            <>
              <Button
                colorScheme="green"
                w="80%"
                mt="30px"
                ml="10%"
                boxShadow="lg"
              >
                View Cart
              </Button>
              <Alert
                status="success"
                variant="solid"
                mt="30px"
                borderRadius="lg"
              >
                <AlertIcon />
                Added to your Cart
              </Alert>
            </>
          )}
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            mt={"5"}
            color="#008080"
            _hover={{
              textDecoration: "underline",
              cursor: "pointer"
            }}
          >
            <FontAwesomeIcon 
              icon={faHeartCirclePlus} 
              size={"lg"}
            />
            <Text 
              ml={"2"}
              fontWeight={"semibold"}
            >
              Add to Wish List
            </Text>
          </Box>
          {/* Add to cart & success button ends here */}
        </GridItem>
        {/* Selected informations and Add to Cart ends here */}
      </Grid>
  )
}

export default BookLayoutLg