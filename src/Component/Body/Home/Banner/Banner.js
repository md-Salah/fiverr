import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import SearchBar from '../../Search/SearchBar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MainContainer from '../../../GeneralComponent/MainContainer';

function Banner() {
    return (
        <Box 
            mt={"7%"}
            // display={"inline-block"}
            w={"100%"}
        >
            <MainContainer>
                <Box position='relative'>
                    <Slider
                        slidesToShow={1}
                        slidesToScroll={1}
                        infinite={true}
                        autoplay={true}
                        dots={true}
                    >
                        {
                            [1,2,3].map(() => (
                                <Image 
                                    src={"../../../../../../images/cover image.jpg"}
                                    backgroundRepeat={"no-repeat"}
                                    backgroundSize={"cover"}
                                    backgroundPosition={"center"}
                                    filter={"brightness(60%)"}
                                    w={"100%"}
                                    maxH={"500px"}
                                    // position={"absolute"}
                                />
                            ))
                        }
                    </Slider>

                </Box>
            </MainContainer>
        </Box>
    );
}


export default Banner;
