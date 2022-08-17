import {
    ModalBody,
    ModalContent,
    ModalCloseButton,
    ModalHeader,
    UnorderedList,
    ListItem,
} from "@chakra-ui/react";

export const AboutConditionRanking = () => {
    //Condition Ranking Details Description
    return (
      <ModalContent
        w={{ base: "90%", md: "100%", lg: "100%" }}
        mr={{ base: "4", md: "none", lg: "none" }}
      >
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
  
export const AboutPrintType = () => {
    //Print Type Details Descriptions
    return (
      <ModalContent 
        w={{ base: "90%", md: "100%", lg: "100%" }}
        mr={{ base: "4", md: "none", lg: "none" }}
      >
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