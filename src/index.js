import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";


import './index.scss';

// components
import Navigation from './components/Navigation/Navigation'
import PlayComponent from './components/PlayComponent/PlayComponent';

class App extends React.Component {

    render() {
        return (
            
            <Router basename="/cornapp/">
                <Navigation />

                <Switch>
                    <Route path="/play">
                        <PlayComponent className="play-component container"/>
                    </Route>
                    <Route path="/dashboard">
                        <h1 className="container">Dashboard component</h1>
                    </Route>
                    <Route path="/community">
                        <h1 className="container">Community component</h1>
                    </Route>
                    <Route path="/settings">
                        <h1 className="container">Settings component</h1>
                    </Route>
                    <Route path="/">
                        <PlayComponent className="play-component container"/>
                    </Route>
                </Switch>

            </Router>
        )
    }
}

ReactDOM.render(
    <App classname="container"/>,
    document.getElementById('root')
);
  