import React from "react";
import { Box } from "@chakra-ui/react";
import Books from "../CartAndCheckout/Books/Books";
import Banner from "./Banner/Banner";
import "../CartAndCheckout/Books/Stylesheet/Books.css";

export default function Home() {
    return (
        <Box h="100vh">
            <Banner />
            <Box
                className="Shadow"
                mt="50px"
                mx={{ base: "30px", lg: "60px", xl: "90px" }}
            >
                <Books title="Popular Books" />
            </Box>

            <Box
                className="Shadow"
                mt="50px"
                mx={{ base: "30px", lg: "60px", xl: "90px" }}
            >
                <Books title="English Original Print Books" />
            </Box>

            {/* <Box
                className="Shadow"
                mt="50px"
                mx={{ base: "30px", lg: "60px", xl: "90px" }}
            >
                <ProductCart title="Suggestion Based On Your Likes" />
            </Box> */}
        </Box>
    );
}

