import React from 'react';
import { Link } from 'react-router-dom';

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

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  const linkHoverStyle = {
    color: '#ccc',
  };

  return (
    <nav style={style}>
      {['Home', 'New Product', 'QR Generate', 'QR Scan', 'Dashboard', 'Map'].map((text, idx) => (
        <Link
          key={idx}
          to={`/${text.toLowerCase().replace(' ', '-')}`}
          style={linkStyle}
          onMouseEnter={e => (e.target.style.color = linkHoverStyle.color)}
          onMouseLeave={e => (e.target.style.color = linkStyle.color)}
        >
          {text}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;

