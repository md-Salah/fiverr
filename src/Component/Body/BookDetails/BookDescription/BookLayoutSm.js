import React, {useState} from 'react';
import { 
  Box, 
  Image, 
  Stack, 
  Text,
  Flex,
  Select,
  Button,
  Alert,
  AlertIcon,
  HStack,
  Icon,
  Modal,
  ModalOverlay
} from '@chakra-ui/react';
import { book } from './book';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faChevronRight, faStar, faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { BsInfoCircleFill } from "react-icons/bs";
import { AboutConditionRanking, AboutPrintType } from '../Modals/BookModal';

const BookLayoutSm = ({ 
  onOpen, 
  condition, 
  cover,
  toggle,
  setToggle,
  isPrintModal,
  openPrintModal,
  closePrintModal,
  isConditionModal,
  openConditionModal,
  closeConditionModal 
}) => {
  const [values, setValues] = useState([ 1, 2, 3, 4, 5 ]);
  return (
    <Box>
        <Box 
          display={"flex"}
          alignItems={"flex-start"}
        >
          <Image 
            src={book.url} 
            alt={book.title} 
            w={"40%"} 
          />
          <Stack
            ml={"5%"}
            spacing={2}
          >
            <Text
              fontWeight={"bold"}
              fontSize={"lg"}
            >
              {book.title}
            </Text>
            <Text
              display={"inline-flex"}
            >
              by
              <Text
                fontWeight={"semibold"}
                ml={"2"}
                color={"#008080"}
                _hover={{ textDecoration: "underline" }}
              >
                {book.Author}
              </Text>
            </Text>
            <Box>
              <Box
                display={"flex"}
                alignItems={"flex-end"}
              >
                <Text
                  color={"#A31023"}
                  fontSize={"x-large"}
                  fontWeight={"bold"}
                  mr={"2"}
                >
                  ৳{book.priceNew}
                </Text>
                <Text
                  fontSize={"large"}
                  fontWeight={"semibold"}
                  color={"gray.600"}
                >
                  Save ৳{book.priceNew - book.priceOld}!
                </Text>
              </Box>
              <Text
                display={"inline-flex"}
                color={"gray.700"}
              >
                List Price:
                <Text
                  textDecoration={"line-through"}
                  textDecorationThickness={"0.3px"}
                  ml={"1"}
                >
                  ৳{book.priceOld}
                </Text>
              </Text>
            </Box>
          </Stack>
        </Box>
        <Box 
          py={"3"}
        >
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
            <Text fontWeight={"semibold"} color={"#008080"}>
              17 Reviews
            </Text>
        </Box>
        <Stack 
          spacing={3}
          py={"3"}
        >
        <Box
          display={"flex"}
          // display={{ base: "flex", lg: "none" }}
          flexDirection={"column"}
          alignItems={"flex-start"}
        >
          <Flex mb={"1"}>
            <Text>
              Select Format
            </Text>
            <Icon
              as={BsInfoCircleFill}
              mt="3px"
              ml="10px"
              cursor="pointer"
              color="#35938b"
              onClick={openPrintModal}
            />
            <Modal 
              isOpen={isPrintModal} 
              onClose={closePrintModal} 
              isCentered
            >
              <ModalOverlay />
              <AboutPrintType />
            </Modal>
          </Flex>
          <Box 
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            onClick={onOpen}
            border={"1px solid #ccc"}
            p={"3"}
            boxShadow={"base"}
            cursor={"pointer"}
            _hover={{ 
              backgroundColor: "#f4f4f4", 
              color: "#008080",
              border: "1.5px solid #008080"
            }}
            w={"90%"}
          >
            <Text display={"inline-flex"}>
              Format: 
              <Text 
                ml={"2"}
                fontWeight={"semibold"}
              >
                {cover} ({"৳" + 150})
              </Text>
            </Text>
            <FontAwesomeIcon icon={faChevronRight}/>
          </Box>
        </Box>
        <Box
          display={"flex"}
          // display={{ base: "flex", lg: "none" }}
          flexDirection={"column"}
          alignItems={"flex-start"}
        >
          <Flex>
            <Text>
              Select Condition
            </Text>
            <Icon
              as={BsInfoCircleFill}
              mt="3px"
              ml="10px"
              cursor="pointer"
              color="#35938b"
              onClick={openConditionModal}
            />
            <Modal 
              isOpen={isConditionModal} 
              onClose={closeConditionModal} 
              isCentered
            >
              <ModalOverlay />
              <AboutConditionRanking />
            </Modal>
          </Flex>
          <Box 
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            onClick={onOpen}
            border={"1px solid #ccc"}
            p={"3"}
            boxShadow={"base"}
            cursor={"pointer"}
            _hover={{ 
              backgroundColor: "#f4f4f4", 
              color: "#008080",
              border: "1.5px solid #008080"
            }}
            w={"90%"}
          >
            <Text display={"inline-flex"}>
              Condition: 
              <Text 
                ml={"2"}
                fontWeight={"semibold"}
              >
                {condition} ({"৳" + 150})
              </Text>
            </Text>
            <FontAwesomeIcon icon={faChevronRight}/>
          </Box>
        </Box>
      </Stack>
      <Box
        display={"inline-flex"}
        alignItems={"center"}
      >
        <Text mr="3">
          Quantity:
        </Text>
        <Select 
          placeholder={values[0]}
          variant={"outline"}
        >
            {
              values.map((val) => (
                <option>
                  {val}
                </option>
              ))
            }
        </Select>
        <Text fontSize={"sm"}>
          49 available
        </Text>
      </Box>
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
      <HStack 
        py={"5"} 
        justifyContent="center" 
        spacing="20px"
      >
        <Icon as={FaFacebookSquare} boxSize="22px" cursor="pointer" />
        <Icon as={FaInstagram} boxSize="22px" cursor="pointer" />
        <Icon as={FaTwitterSquare} boxSize="22px" cursor="pointer" />
        <Icon as={IoShareSocial} boxSize="22px" cursor="pointer" />
      </HStack>
    </Box>
  )
}

export default BookLayoutSm