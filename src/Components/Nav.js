import React from 'react';
import {Link} from 'react-router-dom';

export function Nav() {
    return (
        <header>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/bus-eta">Bus ETA</Link>
            </li>
            <li>
                <Link to="/train-eta">Train ETA</Link>
            </li>
            <li>
                <Link to="/maps">Maps</Link>
            </li>
            <li>
                <Link to="/favorites">Favorites</Link>
            </li>
            <li>
                <Link to="/weather">Weather</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            </ul>
        </header>
    );
}