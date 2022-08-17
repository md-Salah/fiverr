import React, { Component } from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import { Box } from '@chakra-ui/react';

const Main = () => {
    return (
        <Box>
            <Header/>
            <Body/>
            {/* <Carousel 
                elements={allBooks} 
                width={170} 
                height={170}
                title={'Book Slider'}
                isItemTitle={true} 
            /> */}
            <Footer/>
        </Box>
    );
}

export default Main;
