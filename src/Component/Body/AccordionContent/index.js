import React from 'react'
import {
    Box,
    Checkbox,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Stack,
    HStack,
    Text
} from "@chakra-ui/react";

const AccordionContent = ({
    title,
    accordionItems,
    getCheckboxProps,
    filterParams
}) => {
  return (
    <Accordion allowToggle size="lg">
        <AccordionItem>
            <h2>
            <AccordionButton>
                <Box flex={"1"} textAlign='left'>
                    {title}
                </Box>
                <Box
                    display={"flex"}
                    alignItems={"center"}
                >
                    <HStack>
                        {
                            [1, 2].map(() => (
                            <Text
                                fontSize={"sm"}
                                color={"teal"}
                                fontWeight={"thin"}
                            >
                                Most Popular,
                            </Text>
                        ))
                    }
                    </HStack>
                    <AccordionIcon />
                </Box>
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <Stack
                    mt="5px"
                    pl="5px"
                    maxH="250px"
                    overflowY="hidden"
                    _hover={{ overflowY: "auto" }}
                    css={{ scrollbarWidth: "thin" }}
                    spacing="2"
                >
                    {
                        accordionItems.map((item) => (
                        <Checkbox 
                            {...getCheckboxProps({ value: item })}
                            size={"lg"}
                            color={"teal"}
                        >
                            {item}
                        </Checkbox>
                        ))
                    }
                </Stack>
            </AccordionPanel>
        </AccordionItem>
    </Accordion>
  )
}

export default AccordionContent