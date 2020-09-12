import React from 'react';
import {ToastContainer} from "react-toastify";
import './App.css';

import Canvas from "../Canvas/Canvas";

function App() {
  return (
      <div className={"App"}>
          <ToastContainer />
          <Canvas />
      </div>
  );
}

export default App;
