import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import api from '../services/Api';
import { login } from "../services/auth";

export default function Login( { history } ) {
    
    const [ username, setUserName ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ mensagem, setMensagem ] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!username || !password) {
           setMensagem("Preencha e-mail e senha para continuar!");
        } else {            
            try{
                const response = await api.post('/signin', { username,  password });
                login(response.data.token);
                history.push('/main');
            } catch (err){
                setMensagem("Usuário ou Senha incorretos!");
            }
        }
    }
    
    return (
        <div className="container-fluid center-block">
            <form onSubmit={handleLogin}>
            
            <div className="container">
                {mensagem && <p className="alert alert-danger" role="alert">{mensagem}</p>}
            </div>

                <div className="form-group">
                    <div className="col-md-6 offset-md-3">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" className="form-control" id="username" 
                            placeholder="Username"
                            value={username}
                            onChange={e => setUserName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-md-6 offset-md-3">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" className="form-control" id="password" 
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-6 offset-md-3">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>

    );
}