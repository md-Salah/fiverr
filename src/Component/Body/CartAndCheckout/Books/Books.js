import React from "react";
import "../Books/Stylesheet/Books.css";
import { Box, Heading, HStack } from "@chakra-ui/react";
import Book from "../../Book/Book";
import { booksCollection } from "../../../../Redux/actionCreators";
import { Component } from "react";
import { connect } from "react-redux";
// import Slider from "infinite-react-carousel";

const mapDispatchToProps = (dispatch) => {
  return {
    booksCollection: () => dispatch(booksCollection()),
  };
};

const mapStateToProps = (State) => {
  return {
    books: State.booksCollection,
  };
};

class Books extends Component {
  componentDidMount() {
    this.props.booksCollection();
  }

  render() {
    let popularBooks = null;
    let bookList = null;

    // console.log(this.props.books);

    popularBooks = this.props.books.filter((item) => {
      return item.Popularity === "Popular";
    });

    // console.log(popularBooks);

    bookList = popularBooks.map((item, i) => {
      return (
        <div key={i}>
          <Book
            id={item.id}
            key={item.id}
            bookName={item.Title}
            priceNew={item.priceNew}
            priceOld={item.priceOld}
          />
        </div>
      );
    });

    // console.log(bookList);

    return (
      <Box bg="white" mt="50px">
        <Heading
          mt="20px"
          mb="40px"
          color="text"
          fontWeight="md"
          fontSize={{ base: "lg", md: "30" }}
          textAlign={{ base: "center", md: "left" }}
          letterSpacing="wider"
        >
          {this.props.title}
        </Heading>

        {/* Show books */}
        <HStack
          // bg='red'
          gap="10"
        >
          {bookList}
        </HStack>
      </Box>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);

// const SimpleSlider = () => {
//   <Slider dots>
//     <Flex
//       bg="white"
//       h="100%"
//       justifyContent={{ base: "center", sm: "space-around" }}
//     >
//       <Box>
//         <Product />
//       </Box>
//       <Box display={{ base: "none", sm: "initial" }}>
//         <Product />
//       </Box>
//       <Box display={{ base: "none", md: "initial" }}>
//         <Product />
//       </Box>
//       <Box display={{ base: "none", lg: "initial" }}>
//         <Product />
//       </Box>
//       <Box display={{ base: "none", xl: "initial" }}>
//         <Product />
//       </Box>
//     </Flex>
//   </Slider>;
// };
