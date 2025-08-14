
import React from 'react';
import { Link } from 'react-router-dom';

// Navbar component - provides main navigation across all pages
function Navbar() {
  
  const style = {
    backgroundColor: '#000',                  
    color: '#fff',                           
    padding: '15px 40px',                    
    display: 'flex',                         
    justifyContent: 'center',                
    gap: '50px',                             
    fontFamily: "'Didot', 'Times New Roman', serif", 
    fontWeight: '500',                       
    fontSize: '1.1rem',                      
    letterSpacing: '0.15em',                 
    position: 'sticky',                      
    top: 0,                                  
    zIndex: 1000,                            
    borderBottom: '1px solid #fff',          
  };

  // Default link styling - styling for all navigation links
  const linkStyle = {
    color: '#fff',                           
    textDecoration: 'none',                  
    transition: 'color 0.3s ease',           
  };

  
  const linkHoverStyle = {
    color: '#ccc',                           
  };

  // function to generate the correct path for each navigation item
  // This ensures proper routing
  const getLinkPath = (text) => {
    if (text === 'Home') return '/';        
    return `/${text.toLowerCase().replace(' ', '-')}`; 
  };

  
  return React.createElement(
    'nav',                                   
    { style: style },
    
    // Map over navigation items to create individual links
    // Each item becomes a clickable Link component
    ...['Home', 'New Product', 'QR Generate', 'QR Scan', 'Dashboard', 'Map'].map((text, idx) => (
      React.createElement(
        Link,                                // React Router Link component for navigation
        {
          key: idx,                        
          to: getLinkPath(text),             
          style: linkStyle,                  
          onMouseEnter: e => (e.target.style.color = linkHoverStyle.color),    
          onMouseLeave: e => (e.target.style.color = linkStyle.color),       
        },
        text                                  
      )
    ))
  );
}


export default Navbar;

