import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import { hot } from "react-hot-loader";
import "./styles/tailwind.css";
import { jsPDF } from "jspdf";
import Talk from "./Talk";
function App() {
  return (
    <div className="App">
      <Talk />
    </div>
  );
}

export default hot(module)(App);
