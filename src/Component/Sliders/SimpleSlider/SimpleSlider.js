import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Book from "../../Body/Book/Book";
import { allBooks } from "../../../dev-data";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box, Tooltip } from "@chakra-ui/react";
import '../Carousel/Carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const SimpleSlider = ({ title }) => {
    const sliderRef = useRef(null);

    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   ref:{sliderRef},
    //   slidesToShow: 3,
    //   slidesToScroll: 3,
    //   swipeToSlide: true
    // };
    return (
      <Box h="500px" position={"relative"}>
        <Box 
          display={"flex"} 
          alignItems={"center"}
          justifyContent={"space-between"}
          border={'1px solid #ccc'}
          p={"3"}
          boxShadow={"base"}
        >
          <h4 className="carousel_title">
            {title}
          </h4>
            <Box display={"flex"}>
              <Link to="/search" className="mybutton">
                See All
              </Link>
              <Box 
                display={"flex"} 
                alignItems={"center"}
              >
                <Tooltip label="prev">
                  <Box 
                    onClick={() => sliderRef.current.slickPrev()}
                    _hover={{ color: "#008080", cursor: "pointer" }}
                    mr={"1"}
                  >
                    <FontAwesomeIcon 
                      icon={faChevronCircleLeft}
                      size={"lg"}
                    />
                  </Box>
                </Tooltip>
                <Tooltip label="next">
                  <Box 
                    onClick={() => sliderRef.current.slickNext()}
                    _hover={{ color: "#008080", cursor: "pointer" }}
                  >
                    <FontAwesomeIcon 
                      icon={faChevronCircleRight}
                      size={"lg"}
                    />
                  </Box>
                </Tooltip>
              </Box>
            </Box>
        </Box> 
        <Box py={"3"}>
          <Slider
            ref={sliderRef}
            slidesToShow={3}
            slidesToScroll={2}
            responsive={[
              {
                breakpoint: 1920,
                settings: {
                  slidesToShow: 6,
                  slidesToScroll: 6,
                  infinite: true
                }
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  infinite: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              }
            ]}
          >
              {
                  allBooks.map((book) => (
                      <Box>

                      <Book book={book} />

                      </Box>
                  ))
              }
          </Slider>
        </Box>
      </Box>
    );
}

export default SimpleSlider;