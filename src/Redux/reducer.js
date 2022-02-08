import * as actionTypes from "./actionTypes";

const INITIAL_STATE = {
    booksCollection: [],
    cart: [],
    invoice: [],
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.CUSTOMER_LIST:
            return {
                ...state,
                customers: action.payload,
            }
        case actionTypes.INVOICE_LIST:
            return {
                ...state,
                invoice: action.payload,
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                customerName: action.payload.customerName,
            }
        case actionTypes.AUTH_FAILED:
            return {
                ...state,
                errorMsg: action.payload,
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                displayName: null,
            }
        case actionTypes.LOAD_BOOKS:
            return {
                ...state,
                booksCollection: action.payload,
            }
        case actionTypes.LOAD_CART:
            return {
                ...state,
                cart: action.payload,
            }
        default:
            return state;
    }
}