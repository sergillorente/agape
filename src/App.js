import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar/Index';
import HomePage from './pages/Home';
import Footer from './components/Footer';



const App = () => {
    return (
        <div>
            <NavBar />
            <Switch>
            <Route to="/" exact component={HomePage} />
            </Switch>
            <Footer />
        </div>
    )
};

export default App;