
import React, { useState, useEffect } from 'react';

import QRCode from 'qrcode';

// QRGenerate component - allows users to create QR codes for products or links
function QRGenerate() {
  //  the input link/URL will be converted to QR code
  const [link, setLink] = useState('');
  
  //  storing the generated QR code image URL (data URL)
  const [qrUrl, setQrUrl] = useState('');
  
 
  const [error, setError] = useState('');

  // useEffect hook - runs whenever the 'link' state changes
  // This automatically generates a new QR code when user types
  useEffect(() => {
    // If no link is provided, clear QR code and errors
    if (!link) {
      setQrUrl('');                           // Clear QR code
      setError('');                            // Clear any error messages
      return;                                  // Exit early
    }

    // Generate QR code from the provided link
    // QRCode.toDataURL converts text to a data URL containing the QR image
    QRCode.toDataURL(link, { 
      width: 200,                              // QR code size in pixels
      margin: 2                                // White space around QR code
    })
      .then(url => {
        // Success: store the generated QR code URL and clear errors
        setQrUrl(url);                         // Save the QR code image URL
        setError('');                           // Clear any previous errors
      })
      .catch(() => {
        // Error: clear QR code and show error message
        setQrUrl('');                          // Clear the failed QR code
        setError('Failed to generate QR code. Please check the link.'); // Show error
      });
  }, [link]);

 
  const containerStyle = {
    textAlign: 'center',
    marginTop: '40px',
    fontFamily: '"Times New Roman", serif',
    color: '#000',
    maxWidth: '480px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  
  const inputStyle = {
    padding: '12px',
    fontSize: '1rem',
    width: '100%',
    maxWidth: '400px',
    border: '1px solid #aaa',
    borderRadius: '4px',
    fontFamily: '"Times New Roman", serif',
    marginBottom: '20px',
  };

  const linkStyle = {
    color: '#d4af37',
    fontWeight: 'bold',
    textDecoration: 'none',
    wordBreak: 'break-word',
    marginTop: '15px',
    display: 'inline-block',
  };

  
  const errorStyle = {
    color: 'red',
    marginTop: '10px',
  };

  return React.createElement(
    'div',                                     
    { style: containerStyle },
    
    
    React.createElement('h2', null, 'Generate QR Code for Your Product'),
    
    // URL input field - user types the link they want to convert
    React.createElement('input', {
      type: 'text',                            // Text input type
      placeholder: 'Enter a URL here',         // Helpful placeholder text
      value: link,                             // Controlled input value
      onChange: e => setLink(e.target.value),  // Update link state when typing
      style: inputStyle,                       // Apply input styling
    }),
    
    error && React.createElement('div', { style: errorStyle }, error),
    
    // Generated QR code image - shows the created QR code
    qrUrl && React.createElement('img', {
      src: qrUrl,                              
      alt: 'QR Code',                          
      style: { marginTop: '20px' },            
    }),
    
    // Clickable link - shows the original URL below the QR code
    qrUrl && React.createElement(
      'a',                                    
      { 
        href: link,                            // Link destination
        target: '_blank',                      // Open in new tab
        rel: 'noreferrer',                    
        style: linkStyle                       
      },
      link                                     // Display the actual URL text
    )
  );
}


export default QRGenerate;


