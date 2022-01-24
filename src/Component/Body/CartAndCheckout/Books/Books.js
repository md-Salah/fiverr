import React from "react";
import "../Books/Stylesheet/Books.css";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Book from "../../Book/Book";
import { booksCollection } from "../../../../Redux/actionCreators";
import { Component } from "react";
import { connect } from "react-redux";
// import Slider from "infinite-react-carousel";

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

class Books extends Component {
  componentDidMount() {
    this.props.booksCollection();
  }

  render() {
    let popularBooks = null;
    let bookList = null;

    popularBooks = this.props.books.filter((item) => {
      return item.Popularity === 'high';
    })

    bookList = popularBooks.map((item) => {
      return (
        <Box>
          <Book
            id={item.id}
            key={item.id}
            bookName={item.bookName}
            priceNew={item.priceNew}
            priceOld={item.priceOld}
          />
        </Box>
      )
    })

    return (
      <Box h="460px" bg="white">
        <Box>
          <Heading
            mb="20px"
            pt="25px"
            color={"black"}
            fontWeight={"medium"}
            fontSize={{ base: "lg", md: "30" }}
            textAlign={{ base: "center", md: "left" }}
            fontFamily={"Mina"}
            letterSpacing={"wider"}
          >
            {this.props.title}
          </Heading>

          <Flex
            w="100%"
            h="100%"
            bg='white'
            justifyContent={{ base: "center", sm: "space-between" }}
          >
            {bookList}
          </Flex>
        </Box>
      </Box>
    )
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
