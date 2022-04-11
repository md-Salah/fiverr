import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Component } from "react";
import { connect } from "react-redux";
// import ProductCart from "../CartAndCheckout/ProductCart";
// import "../CartAndCheckout/ProductCart.css";
import { booksCollection } from "../../../Redux/actionCreators";
import { BookDescription } from "./BookDescription/BookDescription";

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

        const selectedBook = this.props.books.filter((item) => {
            return item.id === state[0].id;
        })

        return (
            <Box h="100vh" pt='67px'>
                <BookDescription />
                {/* <BookDetailsTemplate selectedBook={selectedBook} /> */}
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
