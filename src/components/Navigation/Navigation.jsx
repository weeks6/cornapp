import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


import './Navigation.scss'
import PlayComponent from '../PlayComponent/PlayComponent';

export default class Navigation extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            expanded: false,
        }

        this.openNav = () => {
            this.setState({
                expanded: !this.state.expanded,
            })
        }
    }

    render() {
        return(
            <Router>
                <nav className={this.state.expanded ? "navbar navbar__expanded" : "navbar"}>
                    <ul className="navbar-nav">
                        <li className="nav-item logo"
                            onClick={this.openNav}>
                            <div href="#" className="nav-link">
                                <i className="material-icons nav-icon">menu</i>
                                <span className={ this.state.expanded ? "link-text link-text__enabled" : "link-text link-text__disabled logo"}>Corn</span>
                            </div>
                        </li>

                        <li className="nav-item">
                            <Link to="/play" href="#" className="nav-link">
                                <i className="material-icons nav-icon">play_arrow</i>
                                <span className={ this.state.expanded ? "link-text link-text__enabled" : "link-text link-text__disabled"}>Play</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link">
                                <i className="material-icons nav-icon">dashboard</i>
                                <span className={ this.state.expanded ? "link-text link-text__enabled" : "link-text link-text__disabled"}>Dashboard</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/community" className="nav-link">
                                <i className="material-icons nav-icon">people_outline</i>
                                <span className={ this.state.expanded ? "link-text link-text__enabled" : "link-text link-text__disabled"}>Community</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/settings" className="nav-link">
                                <i className="material-icons nav-icon">settings</i>
                                <span className={ this.state.expanded ? "link-text link-text__enabled" : "link-text link-text__disabled"}>Settings</span>
                            </Link>
                        </li>

                    </ul>
                </nav>


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