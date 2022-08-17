import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { bannerImages } from '../../../dev-data';
import { Box, Image } from '@chakra-ui/react';

const BannerSlider = () => {
  return (
    <Box>
        <Slider
            dots={true}
            slidesToShow={1}
            slidesToScroll={1}
            infinite={true}
        >
            <Box>
                {
                    bannerImages.map((image) => (
                        <Image
                            src={image.image}
                        />
                    ))
                }
            </Box>
        </Slider>
    </Box>
  )
}

export default BannerSlider