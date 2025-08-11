import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home.js';
import NewProduct from './pages/NewProduct.js';
import QRGenerate from './pages/QRGenerate.js';
import QRScan from './pages/QRScan.js';
import Dashboard from './pages/Dashboard.js';
import MapPage from './pages/MapPage.js';
import CookieBanner from './components/CookieBanner.js';
import Navbar from './components/Navbar.js';

function App() {
  const [cookieAccepted, setCookieAccepted] = React.useState(false);

  React.useEffect(() => {
    const accepted = localStorage.getItem('cookieAccepted');
    if (accepted === 'true') setCookieAccepted(true);
  }, []);

  function acceptCookies() {
    localStorage.setItem('cookieAccepted', 'true');
    setCookieAccepted(true);
  }

  return React.createElement(
    BrowserRouter,
    null,
    React.createElement(Navbar),
    React.createElement(Routes, null,
      React.createElement(Route, {path: "/", element: React.createElement(Home)}),
      React.createElement(Route, {path: "/new-product", element: React.createElement(NewProduct)}),
      React.createElement(Route, {path: "/qr-generate", element: React.createElement(QRGenerate)}),
      React.createElement(Route, {path: "/qr-scan", element: React.createElement(QRScan)}),
      React.createElement(Route, {path: "/dashboard", element: React.createElement(Dashboard)}),
      React.createElement(Route, {path: "/map", element: React.createElement(MapPage)})
    ),
    !cookieAccepted && React.createElement(CookieBanner, {onAccept: acceptCookies})
  );
}

export default App;
