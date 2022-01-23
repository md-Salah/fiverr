import React from "react";
import { Box, Divider, Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import Search from "../Search";
import ProductCart from "../CartAndCheckout/ProductCart";
import "../CartAndCheckout/ProductCart.css";

export default function Home() {
    return (
        <Box h="100vh">
            <Banner />
            <Box
                className="Shadow"
                mt="50px"
                mx={{ base: "30px", lg: "60px", xl: "90px" }}
            >
                <ProductCart title="Popular Books" />
            </Box>

            <Box
                className="Shadow"
                mt="50px"
                mx={{ base: "30px", lg: "60px", xl: "90px" }}
            >
                <ProductCart title="English Original Print Books" />
            </Box>

            <Box
                className="Shadow"
                mt="50px"
                mx={{ base: "30px", lg: "60px", xl: "90px" }}
            >
                <ProductCart title="Suggestion Based On Your Likes" />
            </Box>
        </Box>
    );
}

function Banner() {
    const mainTitle =
        "It's the Possibility of Having a Dream Come True That Makes Life Interesting";
    const author = "Paulo Coelho";
    return (
        <Box bg="#686868" h={{ base: "240px", sm: "330px", lg: "460px" }} mt='81px'>
            <Box px={{ base: "30px", lg: "60px", xl: "90px" }}>
                <Box maxW={{ base: "100%", md: "70%", lg: "60%" }}>
                    <Text
                        color="white"
                        fontSize={{
                            base: "15px",
                            sm: "20px",
                            md: "25px",
                            lg: "30px",
                            xl: "40px",
                        }}
                        fontWeight={{ base: "bold", lg: "semibold" }}
                        pt={{ base: "30px", lg: "80px" }}
                        textAlign={{ base: "center", sm: "left" }}
                        lineHeight="1.6"
                    >
                        {mainTitle}
                    </Text>
                    <Text
                        color="white"
                        fontSize={{
                            base: "13px",
                            sm: "14px",
                            md: "16px",
                            lg: "18px",
                            xl: "20px",
                        }}
                        pt={{ base: "3px", md: "1px", lg: "8px" }}
                        pb={{ base: "15px", md: "25px", lg: "40px" }}
                        lineHeight={{ base: "30px", sm: "55px" }}
                        textAlign={{ base: "center", sm: "left" }}
                    >
                        - {author}
                    </Text>
                    <Search isNav={false} />
                </Box>
            </Box>
        </Box>
    );
}
