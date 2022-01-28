import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import PopoverData from "./PopoverData";
import BookDetailsTemplate from './BookDetailsTemplate/BookDetailsTemplate';
import { Component } from "react";
import { connect } from "react-redux";
// import ProductCart from "../CartAndCheckout/ProductCart";
// import "../CartAndCheckout/ProductCart.css";
import { booksCollection } from "../../../Redux/actionCreators";

const mapDispatchToProps = (dispatch) => {
    return {
        booksCollection: () => dispatch(booksCollection()),
    }
}

const mapStateToProps = (State) => {
    return {
        books: State.booksCollection,
    }
}


class BookDetails extends Component {
    componentDidMount() {
        this.props.booksCollection();
    }

    render() {
        const { state } = this.props.location;
        console.log(state[0]);

        const selectedBook = this.props.books.filter((item) => {
            return item.id === state[0].id;
        })
        console.log(selectedBook);

        return (
            <Box h="100vh" pt='67px'>
                <PopoverData />
                <BookDetailsTemplate selectedBook={selectedBook} />
                {/* <Box
                className="Shadow"
                mt="50px"
                mx={{ base: "30px", lg: "60px", xl: "90px" }}
            >
                <ProductCart title="Related Books From Previous Order History" />
            </Box>
            <Box
                className="Shadow"
                mt="50px"
                mx={{ base: "30px", lg: "60px", xl: "90px" }}
            >
                <ProductCart title="Horro Collection" />
            </Box> */}
            </Box>
            
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
