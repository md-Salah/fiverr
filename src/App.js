import React from "react";
import Main from "./Component/Main";
import { Provider } from "react-redux";
import store from "./Redux/store";

export default function App() {
  return (
    <div style={{ fontFamily: "Mina" }}>
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}
