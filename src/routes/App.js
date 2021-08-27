import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../Home';
import Login from '../containers/Login';

const App = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login}/>
        </BrowserRouter>
    );

};

export default App;