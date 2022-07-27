import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Details from "./components/Detailspage/Details";
import Login from "./components/Login Page/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

        <Header />
        
        <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/home' element={<Home />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
