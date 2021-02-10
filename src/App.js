import React from 'react';

import NavBar from './components/NavBar/NavBar';
import Meeting from './components/Meeting/Meeting';
import Histories from './components/Histories/Histories';

class App extends React.Component {
    render() {
        return (
        <div>
            <NavBar />
            <Meeting />
            <Histories />
        </div>
    )};
};

export default App;