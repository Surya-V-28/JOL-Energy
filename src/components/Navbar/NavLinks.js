import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const scrollHandler = () => {
            setIsAtTop(window.pageYOffset <= 10); // true if at the top, false otherwise
        };

        window.addEventListener('scroll', scrollHandler);
        
        // Clean up the event listener on component unmount
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    const textColor = isAtTop ? 'white' : 'black'; // Change color based on scroll position

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
                smooth to="/#projects-all"
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
                smooth to="/#contact"
            >
                Careers
            </HashLink>
            <HashLink
                className="font-extrabold bg-[#fdcb0a] hover:bg-[#bf9a09] inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl"
                style={{ color: textColor }} // Apply dynamic text color
                smooth to="/get-involved"
            >
                Contact Us
            </HashLink>
        </>
    );
}

export default NavLinks;
