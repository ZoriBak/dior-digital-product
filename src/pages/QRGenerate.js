import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';

function QRGenerate() {
  const [link, setLink] = useState('');
  const [qrUrl, setQrUrl] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!link) {
      setQrUrl('');
      setError('');
      return;
    }

    QRCode.toDataURL(link, { width: 200, margin: 2 })
      .then(url => {
        setQrUrl(url);
        setError('');
      })
      .catch(() => {
        setQrUrl('');
        setError('Failed to generate QR code. Please check the link.');
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
    React.createElement('input', {
      type: 'text',
      placeholder: 'Enter a URL here',
      value: link,
      onChange: e => setLink(e.target.value),
      style: inputStyle,
    }),
    error && React.createElement('div', { style: errorStyle }, error),
    qrUrl &&
      React.createElement('img', {
        src: qrUrl,
        alt: 'QR Code',
        style: { marginTop: '20px' },
      }),
    qrUrl &&
      React.createElement(
        'a',
        { href: link, target: '_blank', rel: 'noreferrer', style: linkStyle },
        link
      )
  );
}

export default QRGenerate;


