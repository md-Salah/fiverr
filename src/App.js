import React from "react";
import Navbar from "./Component/Navbar";
import RoutesContainer from "./Routes";

export default function App() {
  return (
    <div style={{fontFamily: "Mina"}}>
      <Navbar>
        <RoutesContainer />
      </Navbar>
    </div>
  );
}
