import React from "react";
import '../App.css';
import './DisplaySection.css';
import { Button } from "./button";
import {useNavigate} from 'react-router-dom';


function DisplaySection ({setName, setLName, setFName}) {
    const navigate = useNavigate();

    const setGuest = () => {
        setName("Guest");
        setLName("Guest");
        setFName("Guest");
        navigate('/reserve');
    };
    const navigateReserve = () => {
        navigate('/reserve');
      };

    const navigateRegister= () => {
        navigate('/register');
      };

      const navigateSignIn= () => {
        navigate('/signin');
      };

    return (
        <div className="display-container">
            {/* <video src="/videos/resturant-1.mp4" autoPlay loop muted /> */}
            <h1>Welcome to XXXXX</h1>
            <p> </p>
            <div className="display-buttons">
                <Button onClick={()=>setGuest()} className='button' buttonStyle='button-outline' buttonSize='button-large'>
                    Continue As Guest
                </Button>
                <Button onClick={navigateSignIn} className='button' buttonStyle='button-primary' buttonSize='button-large'>
                    Sign In/Register
                </Button>
            </div>
        </div>

    )
}

export default DisplaySection