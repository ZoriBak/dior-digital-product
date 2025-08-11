import React, { useState } from 'react';

function NewProduct() {
  const containerStyle = {
    fontFamily: "'Playfair Display', serif",
    color: '#1a1a1a',
    backgroundColor: '#fff',
    minHeight: '80vh',
    padding: '60px 20px',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '480px',
    margin: '0 auto',
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 300,
    marginBottom: '40px',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    textAlign: 'center',
  };

  const labelStyle = {
    fontWeight: 400,
    marginBottom: '8px',
    fontSize: '1rem',
  };

  const inputStyle = {
    width: '100%',         
    padding: '14px 12px',   
    fontSize: '1.1rem',     
    marginBottom: '24px',
    border: '1px solid #aaa',
    borderRadius: '4px',
    fontFamily: "'Playfair Display', serif",
    boxSizing: 'border-box', 
  };

  const buttonStyle = {
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    padding: '16px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    borderRadius: '2px',
    fontWeight: 400,
    width: '100%',         
  };

  const errorStyle = {
    color: 'red',
    marginBottom: '16px',
    fontSize: '0.9rem',
  };

  const [formData, setFormData] = useState({ name: '', size: '', model: '' });
  const [errors, setErrors] = useState({});

  function validate() {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.size.trim()) errs.size = 'Size is required';
    if (!formData.model.trim()) errs.model = 'Model is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    
    alert('Product submitted: ' + JSON.stringify(formData));
  }

  return React.createElement(
    'div',
    { style: containerStyle },
    React.createElement('h2', { style: headingStyle }, 'Add New Product'),
    React.createElement(
      'form',
      { onSubmit: handleSubmit, noValidate: true },
      React.createElement('label', { htmlFor: 'name', style: labelStyle }, 'Name'),
      errors.name && React.createElement('div', { style: errorStyle }, errors.name),
      React.createElement('input', {
        style: inputStyle,
        type: 'text',
        id: 'name',
        name: 'name',
        value: formData.name,
        onChange: handleChange,
      }),

      React.createElement('label', { htmlFor: 'size', style: labelStyle }, 'Size'),
      errors.size && React.createElement('div', { style: errorStyle }, errors.size),
      React.createElement('input', {
        style: inputStyle,
        type: 'text',
        id: 'size',
        name: 'size',
        value: formData.size,
        onChange: handleChange,
      }),

      React.createElement('label', { htmlFor: 'model', style: labelStyle }, 'Model'),
      errors.model && React.createElement('div', { style: errorStyle }, errors.model),
      React.createElement('input', {
        style: inputStyle,
        type: 'text',
        id: 'model',
        name: 'model',
        value: formData.model,
        onChange: handleChange,
      }),

      React.createElement(
        'button',
        { type: 'submit', style: buttonStyle },
        'Submit'
      )
    )
  );
}

export default NewProduct;



