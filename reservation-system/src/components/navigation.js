import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import {Button} from './button';

function Navigation (){
    const [click, setClick] = useState(false);
    const[button, setButton] = useState(true);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <=960){
            setButton(false)
        }
        else{
            setButton(true)
        }
    };
    useEffect( () => { 
        showButton();
    }, []);
    window.addEventListener('resize',showButton);
    return (
        <>
        <nav className="Navigation">
           <div className="Navigation-container">
                <Link to="/" className="navigation-logo" onClick={closeMobileMenu}>
                    Resturant <i className="fa-solid fa-shrimp" />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'navigation-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='navigation-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/signin' className='navigation-links-mobile' onClick={closeMobileMenu}>
                            Sign in/Register
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/reserve' className='navigation-links' onClick={closeMobileMenu}>
                            Make A Reservation
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='button-outline'>SIGN IN</Button>}
           </div>
        </nav>
        </>
    )
}

export default Navigation