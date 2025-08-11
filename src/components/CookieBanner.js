import React from 'react';

function CookieBanner(props) {
  const style = {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#1A1A1A', 
    color: '#FAFAFA', 
    textAlign: 'center',
    padding: '18px 30px',
    fontFamily: '"Playfair Display", serif',
    fontSize: '15px',
    letterSpacing: '0.05em',
    zIndex: 1000,
    boxShadow: '0 -4px 12px rgba(0,0,0,0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15px',
  };

  const buttonStyle = {
    backgroundColor: '#FAFAFA', 
    border: '1px solid #FAFAFA',
    padding: '10px 25px',
    cursor: 'pointer',
    fontWeight: '700',
    fontFamily: '"Playfair Display", serif',
    fontSize: '14px',
    color: '#1A1A1A', 
    borderRadius: '25px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
    transition: 'all 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#1A1A1A', 
    color: '#FAFAFA',
    border: '1px solid #FAFAFA',
  };

  const [hover, setHover] = React.useState(false);

  return React.createElement(
    'div',
    { style },
    'We use cookies to enhance your experience.',
    React.createElement(
      'button',
      {
        style: hover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle,
        onClick: props.onAccept,
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        'aria-label': 'Accept cookies',
      },
      'Accept'
    )
  );
}

export default CookieBanner;

