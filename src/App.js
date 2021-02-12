import React from 'react';

import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/home';
import Footer from './components/Footer';



class App extends React.Component {
    render() {
        return (
        <div>
            <NavBar />
            <HomePage />
            <Footer />
        </div>
    )};
};

export default App;