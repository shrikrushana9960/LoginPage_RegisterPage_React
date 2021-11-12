import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './Pages/Login';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Login />}></Route>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
