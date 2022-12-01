import React, {useState, useEffect} from "react";
import { Link, useNavigate} from "react-router-dom";
import "./navigation.css";
import {Button} from './button';

function Navigation (){
    const navigate = useNavigate();

    const navigateSignIn = () => {
        navigate('/signin');
      };

    const navigateRegister = () => {
        navigate('/signin');
        };
    
    const navigateHome = () => {
        navigate('/');
        };


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
                    {/* <li className='nav-item'>
                        <Link to='/' className='navigation-links' onClick={closeMobileMenu}>
                            Make A Reservation Today
                        </Link>
                    </li> */}
                    {/* <li className='nav-item'>
                        <Link to='/signin' className='navigation-links-mobile' onClick={closeMobileMenu}>
                            Sign in/Register
                        </Link>
                    </li> */}
                    {/* <li className='nav-item'>
                        <Link to='/reserve' className='navigation-links' onClick={closeMobileMenu}>
                            Make A Reservation
                        </Link>
                    </li> */}
                </ul>
                {/* <Button onClick={navigateRegister} buttonStyle='button-outline'>REGISTER</Button> */}
                {/* <Button onClick={navigateSignIn} buttonStyle='button-outline'>SIGN IN</Button> */}
                {/* <Button onClick={navigateHome} buttonStyle='button-outline'>RESERVE NOW</Button> */}


           </div>
        </nav>
        </>
    )
}

export default Navigation