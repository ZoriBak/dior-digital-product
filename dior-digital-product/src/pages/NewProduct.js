 
import React, { useState } from 'react';

// NewProduct component - form for adding new products to the system
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

  // "Add New Product" title
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

  // Form data  - stores the values of all form fields
  const [formData, setFormData] = useState({ 
    name: '',                                // Product name field
    size: '',                                // Product size field
    model: ''                                // Product model field
  });
  
  // Error state - stores errors for each field
  const [errors, setErrors] = useState({});

  // Validation function - checks if all required fields are filled
  function validate() {
    const errs = {};                        
    
    // Check if name field is empty 
    if (!formData.name.trim()) errs.name = 'Name is required';
    
    // Check if size field is empty 
    if (!formData.size.trim()) errs.size = 'Size is required';
    
    // Check if model field is empty 
    if (!formData.model.trim()) errs.model = 'Model is required';
    
    setErrors(errs);                         
    
    // Return true if no errors , false if there are errors
    return Object.keys(errs).length === 0;
  }

  
  function handleChange(e) {
    const { name, value } = e.target;       
    
   
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  // Form submission - processes the form when submitted
  function handleSubmit(e) {
    e.preventDefault();                       
    // Validate the form before proceeding
    if (!validate()) return;                 // Stop if validation fails

    // Display success message 
    alert('Product submitted: ' + JSON.stringify(formData));
  }

  return React.createElement(
    'div',                                   
    { style: containerStyle },
    
    
    React.createElement('h2', { style: headingStyle }, 'Add New Product'),
    
    // Form element with submission 
    React.createElement(
      'form',
      { onSubmit: handleSubmit, noValidate: true }, 
      
      // Name section
      React.createElement('label', { htmlFor: 'name', style: labelStyle }, 'Name'),

      // Display error message if name validation fails
      errors.name && React.createElement('div', { style: errorStyle }, errors.name),
      // Name input field
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

      // Model field section
      React.createElement('label', { htmlFor: 'model', style: labelStyle }, 'Model'),
      // Display error message if model validation fails
      errors.model && React.createElement('div', { style: errorStyle }, errors.model),
      // Model input field
      React.createElement('input', {
        style: inputStyle,
        type: 'text',
        id: 'model',                         
        name: 'model',                       
        value: formData.model,               
        onChange: handleChange,              
      }),

      // Submit button
      React.createElement(
        'button',
        { type: 'submit', style: buttonStyle },
        'Submit'
      )
    )
  );
}


export default NewProduct;



