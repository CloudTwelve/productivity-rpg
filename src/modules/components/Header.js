import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import '../../../logo.svg';


const Header = () => {
    return (
        <header className="header">
        <div className="logo">
            <Link to="/">
                <img src="/logo.svg" alt="Logo" />
            </Link>
        </div>
        <nav className="nav">
            <Link to="/">Pathway</Link>
            <Link to="/tasks">Tasks</Link>
        </nav>
        </header>
    );
}
