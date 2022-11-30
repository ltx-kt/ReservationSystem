import React from 'react';
import './App.css';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//pages
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';



function App() {
  return (
    <>
      <video src="/videos/resturant-1.mp4" autoPlay loop muted />
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/signin" element={<Login />}></Route>
          <Route path="/reserve" element={<h1>Reserve</h1>}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Router>

    </>

  );
}

export default App;
