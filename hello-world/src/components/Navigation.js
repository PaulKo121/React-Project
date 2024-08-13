import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const Navigation = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    );
};

export default Navigation;