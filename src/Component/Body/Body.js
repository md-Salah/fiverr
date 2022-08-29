import { Route, Switch } from "react-router-dom";
import React from 'react';
import BookDetailsScreen from "../../screens/BookDetailsScreen";
import Admin from "./Admin/Admin";
import { Auth } from "./Auth/Auth";
import ShipmentScreen from "../../screens/ShipmentScreen";
import CheckoutScreen from "../../screens/CheckoutScreen";
import HomeScreen from "../../screens/HomeScreen";
import SearchResultsScreen from "../../screens/SearchResultsScreen";
import WishlistScreen from "../../screens/WishlistScreen";
import OrderScreen from "../../screens/OrderScreen";

export default function RoutesContainer() {
    return (
        <Switch>
            <Route path='/' exact component={HomeScreen} />
            <Route path='/BookDetails' exact component={BookDetailsScreen} />
            <Route path='/CheckOut' exact component={CheckoutScreen} />
            <Route path='/Admin' exact component={Admin} />
            <Route path='/Auth' exact component={Auth} />
            <Route path='/Search' exact component={SearchResultsScreen} />
            <Route path='/Shipment' exact component={ShipmentScreen} />
            <Route path='/Wishlist' exact component={WishlistScreen} />
            <Route path='/Order' exact component={OrderScreen} />
        </Switch>
    )
}
