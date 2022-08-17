import { Route, Switch } from "react-router-dom";
import React from 'react';
import BookDetails from "./BookDetails/BookDetails";
import Home from "./Home/Home";
import Checkout from "./Checkout";
import Admin from "./Admin/Admin";
import { Auth } from "./Auth/Auth";
import SearchResult from "./Search/SearchResult";

export default function RoutesContainer() {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/BookDetails' exact component={BookDetails} />
            <Route path='/CheckOut' exact component={Checkout} />
            <Route path='/Admin' exact component={Admin} />
            <Route path='/Auth' exact component={Auth} />
            <Route path='/Search' exact component={SearchResult} />
        </Switch>
    )
}
