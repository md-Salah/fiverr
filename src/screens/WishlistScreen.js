import React from "react";
import { 
    Text, 
    Box, 
    Breadcrumb, 
    BreadcrumbItem, 
    BreadcrumbLink,
    Alert,
    AlertIcon,
    Button 
} from "@chakra-ui/react";
import MainContainer from "../Component/GeneralComponent/MainContainer";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const WishlistScreen = () => {
    return (
        <Box 
            pt={{ base: "30%", md: "20%", lg: "8%" }} 
            pb={"9%"}
        >
            <MainContainer>
                <Text
                    className="Bangla"
                    fontSize={"2xl"}
                >
                    আপনার পছন্দের তালিকা
                </Text>
                <Breadcrumb
                    spacing='8px' 
                    separator={<ChevronRightIcon color='gray.500' />}
                    py={"3"}
                >
                    <BreadcrumbItem>
                        <BreadcrumbLink 
                            to="/"
                            color={"#008080"}
                        >
                            হোম
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink 
                            to="/wishlist"
                            color={"#008080"}
                        >
                            আপনার পছন্দের তালিকা
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Alert 
                    status='warning'
                    variant='left-accent'
                >
                    <AlertIcon />
                    Wishlist Not Found!
                </Alert>
                <Link to="/">
                    <Button 
                        mt={"3"}
                        colorScheme={"blue"}
                    >
                        Go To Homepage
                    </Button>
                </Link>
            </MainContainer>
        </Box>
    );
}

export default WishlistScreen;