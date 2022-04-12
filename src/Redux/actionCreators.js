import axios from "axios";
import * as actionTypes from './actionTypes';

export const loadBooks = (books) => {
    return {
        type: actionTypes.LOAD_BOOKS,
        payload: books,
    }
}

export const loadCart = (cart) => {
    return {
        type: actionTypes.LOAD_CART,
        payload: cart,
    }
}

// post section starts here
export const bookInput = (newBook) => dispatch => {
    axios.post('http://localhost:3001/BookCollection', newBook)
        .then(response => console.log(response.data))
}

export const shippingAndOrderInput = (shippingAndOrderDetails) => dispatch => {
    axios.post('http://localhost:3001/ShippingAndOrderDetails', shippingAndOrderDetails)
  }
export const CartInput = (bookId, bookName, bookPrice, bookPublisher, bookCondition, bookCover, bookCount, isSelected) => dispatch => {
    let cartData = {
        bookId: bookId,
        bookName: bookName,
        bookPublisher: bookPublisher,
        bookPrice: bookPrice,
        bookCondition: bookCondition,
        bookCover: bookCover,
        bookCount: bookCount,
        isSelected: isSelected
    }

    axios.post('http://localhost:3001/Cart', cartData)
        .then(response => console.log(response))
}
// post section ends here

// get section starts here
export const booksCollection = () => dispatch => {
    axios.get('http://localhost:3001/BookCollection')
        .then(response => dispatch(loadBooks(response.data)))
}

export const CartDetails = () => dispatch => {
    axios.get('http://localhost:3001/Cart')
        .then(response => dispatch(loadCart(response.data)))
}
// get section ends here

// put section starts here
export const updateCartDetails = (book, isSelected) => dispatch => {
    axios.put(`http://localhost:3001/Cart/${book.id}`, { ...book, isSelected: isSelected })
        .then(response => console.log(response.data.isSelected))
}

export const updateBookCount = (book, bookCount) => dispatch => {
    axios.put(`http://localhost:3001/Cart/${book.id}`, { ...book, bookCount: bookCount })
    // .then(response => console.log(response.data.bookCount))
}
// put section ends here
