import React, { Component } from 'react';

import horizontal_logo from './images/Premier_League_Logo.svg';
import MainPageTabs from './MainPageTabs';
import './App.css';
import 'react-tabs/style/react-tabs.css'
import 'react-table/react-table.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={horizontal_logo} className="Horizontal-logo" alt="logo" />
                    <h2 className="Header-text">Fantasy Football</h2>
                </header>
                <MainPageTabs />
            </div>
        );
    }
}

export default App;
