import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';

import api from '../services/Api';
import { logout } from '../services/auth';

export default function Header( { history } ) {

    const [ success, setSuccess ] = useState(false)

    const handleLogout = async () => {      
        const response = await api.delete('/logout', {});
        logout(response.data.token);
        setSuccess(true);
    }

    if(success){
       return <Redirect to='/login'/>
    }

    return (
        <div className="container">
            <h1>Header CESA</h1>
            <button type="button" onClick={() => handleLogout()} >Sair</button>
        </div>
    );
}