
import React, { useEffect } from 'react';


function Home() {
  useEffect(() => {
    console.log('Home component mounted'); 
  }, []); 


  const containerStyle = {
    fontFamily: "'Playfair Display', serif",
    color: '#fff',
    backgroundColor: '#000',
    minHeight: '80vh',
    padding: '100px 20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '5rem',
    fontWeight: 300,
    letterSpacing: '0.25em',
    margin: 0,
    textTransform: 'uppercase',
    lineHeight: 1.1,
    color: '#fff',
  };


  const lineStyle = {
    width: '80px',
    height: '2px',
    backgroundColor: '#d4af37',
    margin: '32px 0',
    opacity: 0.8,
  };


  const pStyle = {
    fontSize: '1.3rem',
    maxWidth: '500px',
    fontWeight: 300,
    letterSpacing: '0.06em',
    lineHeight: 1.8,
    color: '#ccc',
    margin: 0,
  };

  
  return React.createElement(
    'div',                                    
    { style: containerStyle },                
    React.createElement('h1', { style: headingStyle }, 'DIOR'),
    React.createElement('div', { style: lineStyle }),
    React.createElement(
      'p',                                    
      { style: pStyle },                      
      'Experience the timeless elegance of Dior — where sophistication meets modern artistry in every creation.'
    )
  );
}
export default Home;







