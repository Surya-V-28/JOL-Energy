import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

const NavLinks = () => {
    const [isAtTop, setIsAtTop] = useState(true);
    const [isMobile, setIsMobile] = useState(false); // Track if the device is mobile
    const location = useLocation();

    useEffect(() => {
        const scrollHandler = () => {
            setIsAtTop(window.pageYOffset <= 10); // true if at the top, false otherwise
        };

        const resizeHandler = () => {
            setIsMobile(window.innerWidth <= 768); // Consider mobile if width <= 768px
        };

        window.addEventListener('scroll', scrollHandler);
        window.addEventListener('resize', resizeHandler);

        // Set initial value for isMobile
        resizeHandler();

        // Clean up the event listeners on component unmount
        return () => {
            window.removeEventListener('scroll', scrollHandler);
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);

    const isGetInvolvedPath = location.pathname === '/get-involved';

    // Determine the text color based on path, scroll position, and mobile status
    const textColor = isGetInvolvedPath || isMobile ? 'black' : (isAtTop ? 'white' : 'black');

    return (
        <>
            <HashLink
                className="px-4 font-extrabold hover:text-gray-900"
                style={{ color: textColor }} 
                smooth to="/#hero"
            >
                Home
            </HashLink>
            <HashLink
                className="px-4 font-extrabold hover:text-gray-900"
                style={{ color: textColor }} 
                smooth to="/#about"
            >
                About Us
            </HashLink>
            <HashLink
                className="px-4 font-extrabold hover:text-gray-900"
                style={{ color: textColor }} 
                smooth to="/#process"
            >
                Our Process 
            </HashLink>
            <HashLink
                className="px-4 font-extrabold hover:text-gray-900"
                style={{ color: textColor }} 
                smooth to="/#blogs"
            >
                Blog
            </HashLink>
            <HashLink
                className="px-4 font-extrabold hover:text-gray-900"
                style={{ color: textColor }} 
                smooth to="/get-involved"
            >
                Careers
            </HashLink>
            <HashLink
                className="font-extrabold bg-[#fdcb0a] hover:bg-[#bf9a09] inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl"
                style={{ color: textColor }}
                smooth to="/#contact"
            >
                Contact Us
            </HashLink>
        </>
    );
}

export default NavLinks;
