import React from 'react';
import './app.css';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <Switch>
                <Route path='/' exact={true} component={Home}></Route>
                <Route path='/about' exact={true} component={About}></Route>
            </Switch>
        </>
    )
}

export default App;