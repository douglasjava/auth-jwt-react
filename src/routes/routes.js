import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoute from '../services/PrivateRoute';

import Login from '../pages/login';
import Main from '../pages/Main';
import Painel from '../pages/Painel';
import NotFound from '../pages/error/404';  

 const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/login" exact component={Login}/>
            <Route path="/painel" exact component={Painel}/>
            <PrivateRoute path="/main" exact component={Main} />
            <Route exact path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
 )

export default Routes;