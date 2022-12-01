import React from 'react';
// import '../../App.css';
import LoginForm from '../LoginForm';

function Login({setName, setLName, setFName}) {
    return (
        <>
            <LoginForm setName = {setName} setLName = {setLName} setFName = {setFName}/>
        </>
    );
}

export default Login;