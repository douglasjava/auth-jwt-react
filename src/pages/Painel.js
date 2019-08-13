import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Select from 'react-select';

import handlePainel from '../services/PainelServices';

export default function Painel() {
    
    const techCompanies = [
        { label: "Apple", value: 1 },
        { label: "Facebook", value: 2 },
        { label: "Netflix", value: 3 },
        { label: "Tesla", value: 4 },
        { label: "Amazon", value: 5 },
        { label: "Alphabet", value: 6 },
    ];

    const [ selectedOption, setSelectedOption ] = useState('');

    return (
        <div className="container-fluid center-block">
            <form onSubmit={handlePainel}>
                <div className="col-md-3 offset-md-3">
                    <Select options={ techCompanies } onChange={e => setSelectedOption(e.value)}/>
                </div> 
                <div className="col-md-6 offset-md-3">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>                           
            </form>
        </div>
    );
}