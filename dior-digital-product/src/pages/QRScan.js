
import React from 'react';

// QRScan component - allows users to scan QR codes using their device camera
function QRScan() {
  // useRef hook creates a reference to the video element for camera access
  const videoRef = React.useRef(null);
  
  // State for displaying messages to the user about scanning status
  const [message, setMessage] = React.useState('Click start to scan QR code');

  const containerStyle = {
    fontFamily: '"Times New Roman", serif',
    color: '#000',
    padding: '20px',
    textAlign: 'center'
  };

  
  const videoStyle = {
    width: '320px',
    height: '240px',
    border: '1px solid #d4af37',
    marginBottom: '15px'
  };

  // Camera access function - starts the camera and begins scanning process
  async function startScan() {
    // Check if the browser supports camera access
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        // Request access to the user's camera
        // uses the back camera on mobile devices
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' }
        });
        
        
        if (videoRef.current) {
          videoRef.current.srcObject = stream;  // Connect camera stream to video element
          videoRef.current.setAttribute('playsinline', true); // iOS compatibility
          videoRef.current.play();              // Start playing the camera feed
          setMessage('Scanning... (Not fully implemented)'); // Update user status
        
        }
      } catch (err) {
        // Handle camera access errors (permission denied, no camera, etc.)
        setMessage('Error accessing camera: ' + err.message);
      }
    } else {
      // Handle browsers that don't support camera API
      setMessage('Camera API not supported in this browser.');
    }
  }

  // Return the QR scanner component structure
  return React.createElement(
    'div',                                     
    { style: containerStyle },
    
   
    React.createElement('video', {
      ref: videoRef,                           // Reference for camera access
      style: videoStyle                        // Apply video styling
    }),
    
    // Status message display
    React.createElement('div', null, message),
    
    // Start scanning button
    React.createElement('button', {
      onClick: startScan,                      
      style: {                                 
        marginTop: '10px',                    
        padding: '8px 16px',                   
        backgroundColor: '#d4af37',            
        border: 'none',                        
        cursor: 'pointer',                    
        fontWeight: 'bold'                    
      }
    }, 'Start Scan')                           
  );
}


export default QRScan;
