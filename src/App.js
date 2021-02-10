import React from 'react';

import NavBar from './components/NavBar/NavBar';
import Meeting from './components/Meeting/Meeting';
import Histories from './components/Histories/Histories';
import Footer from './components/Footer/Footer';



class App extends React.Component {
    render() {
        return (
        <div>
            <NavBar />
            <Meeting />
            <Histories />
            <Footer />
        </div>
    )};
};

export default App;