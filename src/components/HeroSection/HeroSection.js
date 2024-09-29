import React from 'react';
import OBJECTS from '../../assets/OBJECTS.png';
import OBJECTS2x from '../../assets/OBJECTS@2x.png';
import OBJECTS3x from '../../assets/OBJECTS@3x.png';
import './HeroSection.css';

function HeroSection(){
    return(
        <div>
            <div className="hero-title">
                <span className="g">G</span>
                <span className="o">o</span>
                <span className="o">o</span>
                <span className="g">g</span>
                <span className="l">l</span>
                <span className="e">e</span>
                <span className="DeveloperGroups"> Developer Groups</span>
            </div>
            <div className="hero-subtitle">RBU Chapter</div>
            <div class="hero-image">
            <img  
                src={OBJECTS}
                srcSet={`${OBJECTS} 1x,
                ${OBJECTS2x} 2x,
                ${OBJECTS3x} 3x`}
                alt="HeroSectionImage"
            />
            </div>
            <div className="content">
                <p>
                Google Developer Student Clubs are community groups for college and university students interested in Google developer technologies.
                </p>
            </div>
            
        </div>
    );
}
export default HeroSection;