import React from 'react';
import '../../App.css';
import DisplaySection from '../DisplaySection';

function Home ({setName, setLName, setFName}) {
    return (
        
        <>
            <DisplaySection setName= {setName} setLName = {setLName} setFName = {setFName}/>
        </>
    )
}

export default Home;