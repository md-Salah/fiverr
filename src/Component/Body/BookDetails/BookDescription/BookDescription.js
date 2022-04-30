import React, { useEffect, useState } from "react";
import {
  Grid,
  GridItem,
  Image,
  Text,
  Icon,
  HStack,
  Flex,
  useRadioGroup,
  Button,
  Alert,
  AlertIcon,
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  UnorderedList,
  ListItem,
  ModalOverlay,
} from "@chakra-ui/react";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { BsInfoCircleFill } from "react-icons/bs";

import MainContainer from "../../../GeneralComponent/MainContainer";
import { book } from "./book";
import { SelectionBox } from "./SelectionBox";

export const BookDescription = () => {
  //State for changing cart button
  const [toggle, setToggle] = useState(true);

  //state for About print Modal pop-up
  const {
    isOpen: isPrintModal,
    onOpen: openPrintModal,
    onClose: closePrintModal,
  } = useDisclosure();

  //state for About condition modal pop-up
  const {
    isOpen: isConditionModal,
    onOpen: openConditionModal,
    onClose: closeConditionModal,
  } = useDisclosure();

  //State for selecting book cover type with chakra-ui radio
  const [cover, setCover] = useState("Hardcover");
  const { getRootProps: bookCoverRadioGroup, getRadioProps: bookCoverRadio } =
    useRadioGroup({
      name: "select-cover",
      defaultValue: cover,
      onChange: setCover,
    });

  //State for selecting book print qulality with chakra-ui radio
  const [print, setPrint] = useState("Local Print");
  const {
    getRootProps: printQualityRadioGroup,
    getRadioProps: printQualityRadio,
  } = useRadioGroup({
    name: "print-quality",
    defaultValue: print,
    onChange: setPrint,
  });

  //State for selecting book condition with chakra-ui radio
  const [condition, setCondition] = useState("Acceptable");
  const {
    getRootProps: bookConditionRadioGroup,
    getRadioProps: bookConditionRadio,
  } = useRadioGroup({
    name: "condition",
    defaultValue: condition,
    onChange: setCondition,
  });

  useEffect(() => {
    setToggle(true);
  }, [cover, print, condition]);

  return (
    <MainContainer>
      <Grid
        mt="20px"
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
        <GridItem colSpan={{base: '4', lg: '2'}} borderRight="1px solid #999">
          <Text fontSize="lg" fontWeight="bold">
            {book.title}
          </Text>
          <Flex>
            <Text mr="5px">by</Text>
            <Text color="teal" fontWeight="semibold">
              {book.Author}
            </Text>
          </Flex>

          {/* Select book cover */}
          <Text pt="30px">Cover Format</Text>
          <HStack {...bookCoverRadioGroup()}>
            {book.Cover.map((value) => (
              <SelectionBox
                {...bookCoverRadio({ value: value })}
                key={value}
                name={value}
                minPrice={100}
                maxPrice={600}
              />
            ))}
          </HStack>
          {/* Cover selection ends here */}

          {/* Select print quality */}
          <Flex mt="30px">
            <Text>Print Type</Text>
            <Icon
              as={BsInfoCircleFill}
              mt="3px"
              ml="10px"
              cursor="pointer"
              color="#35938b"
              onClick={openPrintModal}
            />
            <Modal isOpen={isPrintModal} onClose={closePrintModal} isCentered>
              <ModalOverlay />
              <AboutPrintType />
            </Modal>
          </Flex>
          <HStack {...printQualityRadioGroup()}>
            {book.PrintQuality.map((value) => (
              <SelectionBox
                {...printQualityRadio({ value: value })}
                key={value}
                name={value}
                minPrice={100}
                maxPrice={100}
              />
            ))}
          </HStack>
          {/* Print Quality selection ends here */}

          {/* Select book condition */}
          <Flex mt="30px">
            <Text>Select Condition</Text>
            <Icon
              as={BsInfoCircleFill}
              mt="3px"
              ml="10px"
              cursor="pointer"
              color="#35938b"
              onClick={openConditionModal}
            />
            {/* About condition Modal pop-up start */}
            <Modal
              isOpen={isConditionModal}
              onClose={closeConditionModal}
              isCentered
            >
              <ModalOverlay />
              <AboutConditionRanking />
            </Modal>
            {/* Modal ends */}
          </Flex>
          <HStack {...bookConditionRadioGroup()}>
            {book.Condition.map((value) => (
              <SelectionBox
                {...bookConditionRadio({ value: value })}
                key={value}
                name={value}
                minPrice={100}
                maxPrice={100}
              />
            ))}
          </HStack>
          {/* Condition Selection ends here */}
        </GridItem>
        {/* Title, select cover, print & condition selection part ends */}

        {/* Selected informations and Add to Cart starts here */}
        <GridItem colSpan={{base: '4', lg: '1'}}>
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
            <Text as="Del">৳1050</Text>
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
          {/* Add to cart & success button ends here */}
        </GridItem>
        {/* Selected informations and Add to Cart ends here */}
      </Grid>
    </MainContainer>
  );
};

const AboutConditionRanking = () => {
  //Condition Ranking Details Description
  return (
    <ModalContent>
      <ModalHeader>About Our Condition Ratings</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <UnorderedList spacing="3">
          <ListItem>
            New: A brand new, unused, unread copy in perfect condition.
          </ListItem>
          <ListItem>
            Like New: An apparently unread copy in perfect condition. Pages are
            clean and not marred by notes or folds of any kind.
          </ListItem>
          <ListItem>
            Very Good: A copy that has been read but remains in excellent
            condition. May have writing on the inside cover but pages are
            unmarred.
          </ListItem>
          <ListItem>
            Good: A copy that has been read but remains in clean condition. The
            cover and all pages are intact. The spine may show signs of wear.
            Pages can include notes and highlighting.
          </ListItem>
          <ListItem mb="15px">
            Acceptable: A readable copy. Pages can include considerable notes in
            pen or highlighter, but the notes do not obscure the text.
          </ListItem>
        </UnorderedList>
      </ModalBody>
    </ModalContent>
  );
};

const AboutPrintType = () => {
  //Print Type Details Descriptions
  return (
    <ModalContent>
      <ModalHeader>About Print Type</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <UnorderedList spacing="3">
          <ListItem>Publisher Print: Actual print from the publisher</ListItem>
          <ListItem>
            Local Print: Print from local market (May be Nilkhet)
          </ListItem>
          <ListItem mb="15px">
            Premium: Local market print with very good page quality
          </ListItem>
        </UnorderedList>
      </ModalBody>
    </ModalContent>
  );
};
