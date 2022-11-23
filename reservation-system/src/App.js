import React from 'react';
import './App.css';
import Navigation from './components/navigation';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Navigation />
        <Routes>
          <Route path='/' exact />
        </Routes>
    </Router>
    
    </>

  );
}

export default App;
