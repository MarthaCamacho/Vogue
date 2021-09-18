import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../Home';
import { Login } from '../containers/Login';
import { SingIn } from '../containers/SingIn';

const App = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/SingIn" component={SingIn} />
        </BrowserRouter>
    );

};

export default App;