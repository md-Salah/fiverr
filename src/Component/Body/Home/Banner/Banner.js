import React from 'react';
import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";

function Banner() {
    return (
        <Box 
            mt={"5"}
            position={"relative"}
        >
            <Image 
                src={"../../../../../../images/cover image.jpg"}
            />
            <Box
                zIndex={"10"}
                backgroundColor={"#f4f4f4"}
            >
                <Text>
                    Hello World
                </Text>
            </Box>
        </Box>
    );
}


export default Banner;
