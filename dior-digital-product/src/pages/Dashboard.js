
import React from 'react';
import { useNavigate } from 'react-router-dom';


function Dashboard() {
  
  const navigate = useNavigate();

  
  const containerStyle = {
    display: 'flex',
    fontFamily: "'Playfair Display', serif",
    color: '#1A1A1A',
    backgroundColor: '#FAFAFA',
    minHeight: '100vh',
  };


  const sidebarStyle = {
    width: '240px',
    backgroundColor: '#1A1A1A',
    color: '#FAFAFA',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '2px 0 8px rgba(0,0,0,0.05)',
  };


  const sidebarHeaderStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '40px',
    textAlign: 'center',
    borderBottom: '1px solid #B0B0B0',
    paddingBottom: '10px',
    letterSpacing: '0.05em',
  };

 
  const navItemStyle = {
    padding: '12px 0',
    cursor: 'pointer',
    fontWeight: '500',
    borderBottom: '1px solid rgba(176,176,176,0.25)',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#B0B0B0',
    },
  };

  
  const mainStyle = {
    flex: 1,
    padding: '30px',
    backgroundColor: '#F5F5F5',
  };

  
  const topBarStyle = {
    backgroundColor: '#FFFFFF',
    padding: '15px 20px',
    borderRadius: '6px',
    marginBottom: '30px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  
  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 300,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#1A1A1A',
  };

  
  const cardGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  };

  
  const cardStyle = {
    backgroundColor: '#FFFFFF',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
    borderTop: '3px solid #B0B0B0',
  };

  
  const cardTitleStyle = {
    fontSize: '1.1rem',
    marginBottom: '10px',
    fontWeight: 'bold',
    color: '#1A1A1A',
  };

  
  const cardValueStyle = {
    fontSize: '1.8rem',
    fontWeight: '300',
    color: '#4D4D4D',
  };

  // Navigation  - routes to different pages based on clicked item
  const handleNavigation = (page) => {
    console.log('Navigating to:', page);    
    
    if (page === 'home') {
      console.log('Navigating to home page - using direct approach');
      
      if (window.location.pathname !== '/') {
        window.location.href = '/';          // Navigate to home if not already there
      } else {
        
        window.location.reload();
      }
      return;
    }
    
    //  React Router navigation
    switch(page) {
      case 'dashboard':
        navigate('/dashboard');               // Stay on dashboard
        break;
      case 'products':
        navigate('/new-product');            // Go to product creation form
        break;
      case 'qr-generator':
        navigate('/qr-generate');            // Go to QR code generation
        break;
      case 'map':
        navigate('/map');                    // Go to interactive map
        break;
      case 'qr-scan':
        navigate('/qr-scan');                // Go to QR code scanner
        break;
      default:
        break;
    }
  };


  return React.createElement(
    'div',                                 
    { style: containerStyle },
    
   
    React.createElement('div', { style: sidebarStyle },
      React.createElement('div', null,
 
        React.createElement('div', { style: sidebarHeaderStyle }, 'DIOR Admin'),
        
        // Navigation items - each is clickable and navigates to different pages
        React.createElement('div', { 
          style: navItemStyle, 
          onClick: () => handleNavigation('dashboard'),
          onMouseEnter: (e) => e.target.style.color = '#B0B0B0',  
          onMouseLeave: (e) => e.target.style.color = '#FAFAFA'    
        }, 'Dashboard'),
        
        React.createElement('div', { 
          style: navItemStyle, 
          onClick: () => handleNavigation('products'),
          onMouseEnter: (e) => e.target.style.color = '#B0B0B0',
          onMouseLeave: (e) => e.target.style.color = '#FAFAFA'
        }, 'Products'),
        
        React.createElement('div', { 
          style: navItemStyle, 
          onClick: () => handleNavigation('qr-generator'),
          onMouseEnter: (e) => e.target.style.color = '#B0B0B0',
          onMouseLeave: (e) => e.target.style.color = '#FAFAFA'
        }, 'QR Generator'),
        
        React.createElement('div', { 
          style: navItemStyle, 
          onClick: () => handleNavigation('map'),
          onMouseEnter: (e) => e.target.style.color = '#B0B0B0',
          onMouseLeave: (e) => e.target.style.color = '#FAFAFA'
        }, 'Map'),
        
        React.createElement('div', { 
          style: navItemStyle, 
          onClick: () => handleNavigation('qr-scan'),
          onMouseEnter: (e) => e.target.style.color = '#B0B0B0',
          onMouseLeave: (e) => e.target.style.color = '#FAFAFA'
        }, 'QR Scanner'),
        
        React.createElement('div', { 
          style: navItemStyle, 
          onClick: () => handleNavigation('home'),
          onMouseEnter: (e) => e.target.style.color = '#B0B0B0',
          onMouseLeave: (e) => e.target.style.color = '#FAFAFA'
        }, 'Home'),
      ),
      
    
      React.createElement('div', { style: { fontSize: '0.85rem', textAlign: 'center', opacity: 0.6 } }, '© 2025 Dior')
    ),

   
    React.createElement('div', { style: mainStyle },
      // Top bar with title and welcome message
      React.createElement('div', { style: topBarStyle },
        React.createElement('h2', { style: headingStyle }, 'Dashboard'),
        React.createElement('div', { style: { fontSize: '1rem', color: '#555' } }, 'Welcome, Admin')
      ),

      
      React.createElement('div', { style: cardGridStyle },
        // Total Products 
        React.createElement('div', { style: cardStyle },
          React.createElement('div', { style: cardTitleStyle }, 'Total Products'),
          React.createElement('div', { style: cardValueStyle }, '128')
        ),
        
        // Monthly Sales
        React.createElement('div', { style: cardStyle },
          React.createElement('div', { style: cardTitleStyle }, 'Monthly Sales'),
          React.createElement('div', { style: cardValueStyle }, '$12,430')
        ),
        
        // Pending Orders 
        React.createElement('div', { style: cardStyle },
          React.createElement('div', { style: cardTitleStyle }, 'Pending Orders'),
          React.createElement('div', { style: cardValueStyle }, '14')
        ),
        
        // Boutiques card
        React.createElement('div', { style: cardStyle },
          React.createElement('div', { style: cardTitleStyle }, 'Boutiques'),
          React.createElement('div', { style: cardValueStyle }, '5')
        )
      )
    )
  );
}


export default Dashboard;





