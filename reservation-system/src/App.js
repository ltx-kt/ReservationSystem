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
        </Routes>
    </Router>
    
    </>

  );
}

export default App;
