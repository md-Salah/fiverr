import axios from "axios";
import * as actionTypes from './actionTypes';

export const loadBooks = (books) => {
    // console.log(books);
    return {
        type: actionTypes.LOAD_BOOKS,
        payload: books,
    }
}

export const selectedCar = (car) => {
    return {
        type: actionTypes.SELECTED_CAR,
        payload: car,
    }
}

export const booksCollection = () => dispatch => {
    axios.get('http://localhost:3001/BookCollection')
        // .then(response => console.log(response.data))
        .then(response => dispatch(loadBooks(response.data)))
}

export const postInvoiceInfo = (carName, carPrice, customerName, date) => dispatch => {
    let invoiceData = {
        carName: carName,
        carPrice: carPrice,
        customerName: customerName,
        date: date
    }

    axios.post('http://localhost:3001/Invoice', invoiceData)
        .then(response => console.log(response.data))
}