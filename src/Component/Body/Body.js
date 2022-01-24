import { Route, Routes } from "react-router-dom";
import React from 'react';
import BookDetails from "./BookDetails/BookDetails";
import Home from "./Home/Home";
import CartAndCheckout from "./CartAndCheckout/CartAndCheckout";
import Admin from "./Admin/Admin";

export default function RoutesContainer() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/BookDetails' element={<BookDetails />} />
            <Route path='/CheckOut' element={<CartAndCheckout />} />
            <Route path='/Admin' element={<Admin />} />
        </Routes>
    )
}
