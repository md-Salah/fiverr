import React from 'react';
import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import SearchBar from '../../Search/SearchBar';

function Banner() {
    return (
        <Box 
            mt={"5"}
            position={"relative"}
            // display={"inline-block"}
            w={"100%"}
            h={{ base: "32vh", md: "100vh", lg: "130vh" }}
        >
            {/* <Box
                w={"100%"}
                h={"100%"}
                position={"absolute"}
            > */}
                <Image 
                    src={"../../../../../../images/cover image.jpg"}
                    backgroundRepeat={"no-repeat"}
                    backgroundSize={"cover"}
                    backgroundPosition={"center"}
                    filter={"brightness(60%)"}
                    w={"100%"}
                h={"100%"}
                position={"absolute"}
                />
            {/* </Box> */}
            <Box
                zIndex={"10"}
                backgroundColor={"yellow"}
                position={"absolute"}
                verticalAlign={"center"}
            >
                {/* <SearchBar size="lg" /> */}
                <Text>dnjkasndjkdkjh</Text>
            </Box>
        </Box>
    );
}


export default Banner;
