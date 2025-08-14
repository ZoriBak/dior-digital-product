
import React from 'react';
import {
  BrowserRouter,  
  Routes,         
  Route,          
} from 'react-router-dom';


import Home from './pages/Home.js';           // Landing page component
import NewProduct from './pages/NewProduct.js'; // Product creation form
import QRGenerate from './pages/QRGenerate.js'; // QR code generation tool
import QRScan from './pages/QRScan.js';       // QR code scanner
import Dashboard from './pages/Dashboard.js'; // Admin dashboard
import MapPage from './pages/MapPage.js';     // Interactive map view

import Navbar from './components/Navbar.js';             // Main navigation bar

function App() {
  
  return React.createElement(
    BrowserRouter,  
    null,           
    // Navigation bar appears on all pages
    React.createElement(Navbar),
    
    React.createElement(Routes, null,
      React.createElement(Route, {path: "/", element: React.createElement(Home, {key: 'home'})}),
      
      React.createElement(Route, {path: "/new-product", element: React.createElement(NewProduct)}),

      React.createElement(Route, {path: "/qr-generate", element: React.createElement(QRGenerate)}),
     
      React.createElement(Route, {path: "/qr-scan", element: React.createElement(QRScan)}),
     
      React.createElement(Route, {path: "/dashboard", element: React.createElement(Dashboard)}),
     
      React.createElement(Route, {path: "/map", element: React.createElement(MapPage)})
    )
  );
}


export default App;
