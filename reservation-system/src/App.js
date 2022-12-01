import React, {useState} from 'react';
import './App.css';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//pages
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Reserve from './components/pages/Reserve';



function App() {
  const [u_name, setName] = useState('Guest');
  const [l_name, setLName] = useState('Guest');
  const [f_name, setFName] = useState('Guest');


  return (
    <>
      <video src="/videos/resturant-1.mp4" autoPlay loop muted />
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home setFName={setFName} setName={setName} setLName={setLName}/>}></Route>
          <Route path="/signin" element={<Login setFName={setFName} setName={setName} setLName={setLName}/>}></Route>
          <Route path="/reserve" element={<Reserve u_name={u_name} f_name={f_name} l_name={l_name}/>}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Router>

    </>

  );
}

export default App;
