import React from "react";
// import { BrowserRouter as Router,swicth } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <div className="w-full min-h-screen h-auto bg-[#171717]">
        <Router>
          <Navbar />
          <Home />
        </Router>
      </div>
    </>
  );
}

export default App;