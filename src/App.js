import React from "react";
import Main from "./Component/Main";
import { Provider } from "react-redux";
import store from "./Redux/store";
import './App.css';

export default function App() {
  return (
    <div style={{ fontFamily: "Apercu" }}>
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}
