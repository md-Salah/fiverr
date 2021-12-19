import { Route, Routes } from "react-router-dom";
import React from 'react';
import BookDetails from "../Pages/BookDetails";
import Home from "../Pages/Home";

export default function RoutesContainer() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='BookDetails' element={<BookDetails />} />
        </Routes>
    )
}
