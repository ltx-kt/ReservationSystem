import React from "react";
import '../App.css';
import './DisplaySection.css';
import { Button } from "./button";
import {useNavigate} from 'react-router-dom';


function DisplaySection () {
    const navigate = useNavigate();

    const navigateReserve = () => {
        navigate('/reserve');
      };

    const navigateRegister= () => {
        navigate('/register');
      };

    return (
        <div className="display-container">
            {/* <video src="/videos/resturant-1.mp4" autoPlay loop muted /> */}
            <h1>Welcome to XXXXX</h1>
            <p> </p>
            <div className="display-buttons">
                <Button onClick={navigateRegister} className='button' buttonStyle='button-outline' buttonSize='button-large'>
                    Make an Account
                </Button>
                <Button onClick={navigateReserve} className='button' buttonStyle='button-primary' buttonSize='button-large'>
                    Make a reservation
                </Button>
            </div>
        </div>

    )
}

export default DisplaySection