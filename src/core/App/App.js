import React from 'react';
import {ToastContainer} from "react-toastify";
import './App.css';

import Navbar from "../Navbar/Navbar";
import Canvas from "../Canvas/Canvas";
import Dock from "../Dock/Dock";

function App() {
  return (
      <div className={"App"}>
          <ToastContainer />
          <Navbar />
          <Canvas />
          <Dock />
      </div>
  );
}

export default App;
