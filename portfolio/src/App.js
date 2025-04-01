import "./styles/App.css";
import "./styles/mediaqueries.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/components/layout/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router basename="/personal-website">
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="*" element={<div>404 Not Found</div>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;