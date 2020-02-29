import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

// components
import Navigation from './components/Navigation/Navigation'

class App extends React.Component {

    render() {
        return (
            <Navigation />
        )
    }
}

ReactDOM.render(
    <App classname="container"/>,
    document.getElementById('root')
);
  