import React, { useState } from "react";
import {
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import SimpleSlider from "../../../Sliders/SimpleSlider/SimpleSlider";

import BookOverview from "./BookOverview";
import BookDrawer from "./BookDrawer";
import BookLayoutLg from "./BookLayoutLg";
import BookLayoutSm from "./BookLayoutSm";

export const BookDescription = () => {
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

  // //State for changing cart button
  const [toggle, setToggle] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // //State for selecting book cover type with chakra-ui radio
  const [cover, setCover] = useState("Hardcover");

  // //State for selecting book print qulality with chakra-ui radio
  const [print, setPrint] = useState("Local Print");

  // //State for selecting book condition with chakra-ui radio
  const [condition, setCondition] = useState("Acceptable");

  return (
    <Box w={{base: '95%', lg: '85%'}} mx='auto' h='inherit' my={"5%"}>
      <Box
        display={{ base: "none", md: "none", lg: "block" }}
      >
        <BookLayoutLg
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
      </Box>
      <Box display={{ base: "block", md: "block", lg: "none" }}>
        <BookLayoutSm 
          onOpen={onOpen}
          cover={cover}
          toggle={toggle}
          setToggle={setToggle}
          isPrintModal={isPrintModal}
          openPrintModal={openPrintModal}
          closePrintModal={closePrintModal}
          isConditionModal={isConditionModal}
          openConditionModal={openConditionModal}
          closeConditionModal={closeConditionModal}
        />
      </Box>
      <BookDrawer
        toggle={toggle}
        setToggle={setToggle}
        cover={cover}
        setCover={setCover}
        condition={condition}
        setCondition={setCondition}
        print={print}
        setPrint={setPrint}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
      <BookOverview/>
      <SimpleSlider title="You Might Also Enjoy"/>
    </Box>
  );
};