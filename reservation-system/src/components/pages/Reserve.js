import React from 'react';
// import '../../App.css';
import ReserveForm from '../ReserveForm';

function Reserve ({u_name, l_name, f_name}) {
    return (
        <>
            <ReserveForm u_name = {u_name} l_name = {l_name} f_name = {f_name}/>
        </>
    );
}

export default Reserve;