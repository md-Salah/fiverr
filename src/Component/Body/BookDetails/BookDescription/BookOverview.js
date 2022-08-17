import React, {useState} from 'react'
import { 
    Box, 
    Text, 
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel, 
    Stack
} from '@chakra-ui/react'

const BookOverview = () => {
    const [overviewShown, setOverviewShown] = useState(false);
  return (
    <Box>
        <Text 
            fontSize={"3xl"}
        >
            Book Overview
        </Text>
        <Box>
            <Text
                noOfLines={overviewShown ? "full" : "3"}
            >
                In this "brave and heartbreaking novel that digs its claws into you and doesn't let go, 
                long after you've finished it" (Anna Todd, New York Times bestselling author) from the 
                #1 New York Times bestselling author of All Your Perfects , a workaholic with a 
                too-good-to-be-true romance can't stop thinking about her first love. Lily hasn't 
                always had it easy, but that's never stopped her from working hard for the life she wants.
                She's come a long way from the small town where she grew up--she graduated from college,
                moved to Boston, and started her own business. And when she feels a spark with a gorgeous
                neurosurgeon named Ryle Kincaid, everything in Lily's life seems too good to be true. 
                Ryle is assertive, stubborn, maybe even a little arrogant. He's also sensitive, brilliant, 
                and has a total soft spot for Lily. And the way he looks in scrubs certainly doesn't hurt. 
                Lily can't get him out of her head. But Ryle's complete aversion to relationships is disturbing. 
                Even as Lily finds herself becoming the exception to his "no dating" rule, she can't help but 
                wonder what made him that way in the first place. As questions about her new relationship overwhelm 
                her, so do thoughts of Atlas Corrigan--her first love and a link to the past she left behind. 
                He was her kindred spirit, her protector. When Atlas suddenly reappears, everything Lily has built 
                with Ryle is threatened. An honest, evocative, and tender novel, It Ends with Us is "a glorious and 
                touching read, a forever keeper. The kind of book that gets handed down" ( USA TODAY ).
            </Text>
            {
                overviewShown ? (
                    <Text
                        color="#008080"
                        fontWeight={"semibold"}
                        _hover={{ 
                            textDecoration: "underline",
                            cursor: "pointer" 
                        }}
                        onClick={() => setOverviewShown(false)}
                    >
                        Read Less
                    </Text>
                ) : (
                    <Text
                        color="#008080"
                        fontWeight={"semibold"}
                        _hover={{ 
                            textDecoration: "underline",
                            cursor: "pointer" 
                        }}
                        onClick={() => setOverviewShown(true)}
                    >
                        Read Full Overview
                    </Text>
                )
            }
        </Box>
        <Box
            border={"0.3px solid #ccc"}
            boxShadow="base"
            my="5"
        >
            <Tabs
                backgroundColor={"gray.100"}
            >
                <TabList pl={"10"} pt={"2"}>
                    <Tab mr={"2"}>Edition Details</Tab>
                    <Tab mr={"2"}>Professional Reviews</Tab>
                    <Tab mr={"2"}>Awards</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel px={"5"}>
                        <Stack
                            ml={"3"}
                        >
                            <Text 
                                display={"inline-flex"}
                            >
                                Format:
                                <Text ml={"2"}>
                                    Paperback
                                </Text>
                            </Text>
                            <Text 
                                display={"inline-flex"}
                            >
                                Language:
                                <Text ml={"2"}>
                                    English
                                </Text>
                            </Text>
                            <Text 
                                display={"inline-flex"}
                            >
                                ISBN:
                                <Text ml={"2"}>
                                    1538724731
                                </Text>
                            </Text>
                            <Text 
                                display={"inline-flex"}
                            >
                                ISBN13:
                                <Text ml={"2"}>
                                    9781538724736
                                </Text>
                            </Text>
                            <Text 
                                display={"inline-flex"}
                            >
                                Release Date:
                                <Text ml={"2"}>
                                    October 2021
                                </Text>
                            </Text>
                            <Text 
                                display={"inline-flex"}
                            >
                                Publisher:
                                <Text ml={"2"}>
                                    Grand Central Publishing
                                </Text>
                            </Text>
                            <Text 
                                display={"inline-flex"}
                            >
                                Length:
                                <Text ml={"2"}>
                                    336 Pages
                                </Text>
                            </Text>
                            <Text 
                                display={"inline-flex"}
                            >
                                Weight:
                                <Text ml={"2"}>
                                    0.59 lbs.
                                </Text>
                            </Text>
                            <Text 
                                display={"inline-flex"}
                            >
                                Dimensions:
                                <Text ml={"2"}>
                                    0.8" x 8.3" x 5.5"
                                </Text>
                            </Text>
                        </Stack>
                    </TabPanel>
                    <TabPanel px={"5"}>
                    <p>two!</p>
                    </TabPanel>
                    <TabPanel px={"5"}>
                    <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    </Box>
  )
}

export default BookOverview