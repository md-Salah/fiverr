import axios from "axios";
import * as actionTypes from './actionTypes';

export const loadBooks = (books) => {
    return {
        type: actionTypes.LOAD_BOOKS,
        payload: books,
    }
}

export const booksCollection = () => dispatch => {
    axios.get('http://localhost:3001/BookCollection')
        .then(response => dispatch(loadBooks(response.data)))
}

export const CartDetails = () => dispatch => {
    axios.get('http://localhost:3001/Cart')
        .then(response => console.log(response))
}

export const CartInput = (bookId, bookName, bookPrice, bookPublisher, bookCondition, bookCover) => dispatch => {
    let cartData = {
        bookId: bookId,
        bookName: bookName,
        bookPublisher: bookPublisher,
        bookPrice: bookPrice,
        bookCondition: bookCondition,
        bookCover: bookCover,
    }

    axios.post('http://localhost:3001/Cart', cartData)
        .then(response => dispatch(CartDetails(response)))
}