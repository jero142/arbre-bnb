import React, { useEffect, useState } from 'react';
import leavesImage from '/images/navbar-leaves.png';
import { Link } from 'react-router-dom';

// Define the Navbar component
const Navbar = () => {
  // State to track whether the navbar should be visible or hidden
  const [showNavbar, setShowNavbar] = useState(false);

  // Set up an effect to listen for mouse movement near the top of the screen
  useEffect(() => {
    // Event handler: show the navbar if the user's mouse is near the top of the viewport
    const handleMouseMove = (e) => {
      if (e.clientY < 80) {
        setShowNavbar(true); // Show navbar if mouse is within 80px from top
      } else {
        setShowNavbar(false); // Otherwise hide it
      }
    };

    // Attach the event listener to the window
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup: remove the event listener when component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array = runs once on mount

  return (
    // Apply "visible" or "hidden" class based on state
    <div className={`navbar ${showNavbar ? 'visible' : 'hidden'}`}>
      
      {/* Container for content inside the navbar */}
      <div className="navbar-content">
        
        {/* Leaves image for visual decoration */}
        <img src={leavesImage} alt="Leaves Navbar" className="navbar-image" />
        
        {/* Link back to the homepage */}
        <Link to="/" className="home-link">Home</Link>
      </div>
    </div>
  );
};


export default Navbar;