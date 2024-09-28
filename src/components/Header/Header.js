import React from 'react';
import logo1x from '../../assets/logo.png';
import logo2x from '../../assets/logo@2x.png';
import logo3x from '../../assets/logo@3x.png';
import './Header.css';

function Header() {
return (
    <div class="header">
        <div class="logo-container">
        <img  class="logo"
        src={logo1x}
        srcSet={`${logo1x} 1x,
                ${logo2x} 2x,
                ${logo3x} 3x`}
        alt="Company Logo"
        />
        <span class="logo-text">GDG RCOEM</span>
        </div>
        <div class ="nav">
            <div class="nav-item">Home</div>
            <div class="nav-item">Events</div>
            <div class="nav-item">Team</div>
            <div class="nav-item">Alumni</div>
            <div class="nav-item">Contact</div>
        </div>
    </div>

    
);
}

export default Header;