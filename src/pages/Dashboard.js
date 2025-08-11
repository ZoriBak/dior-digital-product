import React from 'react';

function Dashboard() {
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

  return (
    <div style={containerStyle}>
      
      <div style={sidebarStyle}>
        <div>
          <div style={sidebarHeaderStyle}>DIOR Admin</div>
          <div style={navItemStyle}>Dashboard</div>
          <div style={navItemStyle}>Products</div>
          <div style={navItemStyle}>Orders</div>
          <div style={navItemStyle}>Analytics</div>
          <div style={navItemStyle}>QR Generator</div>
          <div style={navItemStyle}>Settings</div>
        </div>
        <div style={{ fontSize: '0.85rem', textAlign: 'center', opacity: 0.6 }}>
          © 2025 Dior
        </div>
      </div>

   
      <div style={mainStyle}>
        
        <div style={topBarStyle}>
          <h2 style={headingStyle}>Dashboard</h2>
          <div style={{ fontSize: '1rem', color: '#555' }}>Welcome, Admin</div>
        </div>

       
        <div style={cardGridStyle}>
          <div style={cardStyle}>
            <div style={cardTitleStyle}>Total Products</div>
            <div style={cardValueStyle}>128</div>
          </div>
          <div style={cardStyle}>
            <div style={cardTitleStyle}>Monthly Sales</div>
            <div style={cardValueStyle}>$12,430</div>
          </div>
          <div style={cardStyle}>
            <div style={cardTitleStyle}>Pending Orders</div>
            <div style={cardValueStyle}>14</div>
          </div>
          <div style={cardStyle}>
            <div style={cardTitleStyle}>Boutiques</div>
            <div style={cardValueStyle}>5</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;





