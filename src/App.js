import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Details from "./components/Detailspage/Details";
import Login from "./components/Login Page/Login"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

        <Header />
        
        <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/details' element={<Details />} />
        <Route path='/' element={<Home />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
