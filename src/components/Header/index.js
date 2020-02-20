import React from 'react';
import Nav from '../Nav';
import './styles.css';

const Header = () => (
    <div className="top">
        <header id="main-header">
            <h1>Pomodoro Watch</h1>
            <Nav></Nav>
        </header>
        
    </div>
);

export default Header;