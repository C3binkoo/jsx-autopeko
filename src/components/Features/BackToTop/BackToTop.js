// src/components/BackToTopButton/BackToTopButton.js
import React, { useState, useEffect } from 'react';
import './BackToTop.css';
const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show the button when scrolling down
    const toggleVisibility = () => {
        if (window.scrollY > window.innerHeight / 3) { // Show when below the first screen
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll back to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scroll effect
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className={`back-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
            <i class="fa fa-arrow-up"></i>
        </div>
    );
};

export default BackToTopButton;
