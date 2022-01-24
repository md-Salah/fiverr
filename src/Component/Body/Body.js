import { Route, Switch } from "react-router-dom";
import React from 'react';
import BookDetails from "./BookDetails/BookDetails";
import Home from "./Home/Home";
import CartAndCheckout from "./CartAndCheckout/CartAndCheckout";
import Admin from "./Admin/Admin";

export default function RoutesContainer() {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/BookDetails' exact component={BookDetails} />
            <Route path='/CheckOut' exact component={CartAndCheckout} />
            <Route path='/Admin' exact component={Admin} />
        </Switch>
    )
}
