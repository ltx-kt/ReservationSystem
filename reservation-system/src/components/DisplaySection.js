import React from "react";
import '../App.css';
import './DisplaySection.css';
import { Button } from "./button";

function DisplaySection () {
    return (
        <div className="display-container">
            <video src="/videos/resturant-1.mp4" autoPlay loop muted />
            <h1>Welcome to XXXXX</h1>
            <p> </p>
            <div className="display-buttons">
                <Button className='button' buttonStyle='button-outline' buttonSize='button-large'>
                    Make an Account
                </Button>
                <Button className='button' buttonStyle='button-primary' buttonSize='button-large'>
                    Make a reservation
                </Button>
            </div>
        </div>

    )
}

export default DisplaySection