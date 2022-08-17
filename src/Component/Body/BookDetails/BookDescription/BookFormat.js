import React, {useEffect} from 'react';
import { 
  Box,
  Text,
  Icon,
  HStack,
  Flex,
  useRadioGroup,
  useDisclosure,
  Modal,
  ModalOverlay,
} from '@chakra-ui/react';
import { BsInfoCircleFill } from "react-icons/bs";
import { book } from "./book";
import {SelectionBox} from "./SelectionBox";
import { AboutPrintType, AboutConditionRanking } from '../Modals/BookModal';

const BookFormat = ({
    toggle,
    setToggle,
    cover,
    setCover,
    condition,
    setCondition,
    print,
    setPrint,
    isPrintModal,
    openPrintModal,
    closePrintModal,
    isConditionModal,
    openConditionModal,
    closeConditionModal
}) => {

  //State for selecting book cover type with chakra-ui radio
  const { getRootProps: bookCoverRadioGroup, getRadioProps: bookCoverRadio } =
    useRadioGroup({
      name: "select-cover",
      defaultValue: cover,
      onChange: setCover,
    });

  //State for selecting book print qulality with chakra-ui radio
  const {
    getRootProps: printQualityRadioGroup,
    getRadioProps: printQualityRadio,
  } = useRadioGroup({
    name: "print-quality",
    defaultValue: print,
    onChange: setPrint,
  });

  //State for selecting book condition with chakra-ui radio
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
    <Box>
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
        <HStack 
            {...bookConditionRadioGroup()} 
            overflowX={{ 
                base: "scroll", 
                lg: "none" 
            }}
        >
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

    </Box>
  )
}
  

export default BookFormat