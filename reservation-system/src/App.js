import React from 'react';
import './App.css';
import Navigation from './components/navigation';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
    <>
    <Router>
      <Navigation />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/signin" element={<h1>Sign In</h1>}></Route>
          <Route path="/reserve" element={<h1>Reserve</h1>}></Route>
          <Route path="/register" element={<h1>Register</h1>}></Route>
        </Routes>
    </Router>
    
    </>

  );
}

export default App;
