import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function Map() {
  const containerStyle = {
    fontFamily: "'Playfair Display', serif",
    color: '#1a1a1a',
    backgroundColor: '#fff',
    height: '80vh',
    padding: '40px 20px',
    display: 'flex',
    flexDirection: 'column',
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 300,
    marginBottom: '24px',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    textAlign: 'center',
  };

  const mainContentStyle = {
    display: 'flex',
    flex: 1,
    gap: '20px',
  };

  const mapStyle = {
    flex: 2,
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    border: '1px solid #ddd',
    height: '60vh',
  };

  const listStyle = {
    flex: 1,
    overflowY: 'auto',
    borderRadius: '8px',
    border: '1px solid #ddd',
    padding: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    backgroundColor: '#fafafa',
  };

  const searchStyle = {
    marginBottom: '16px',
    padding: '10px 15px',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    outline: 'none',
    width: '100%',
    maxWidth: '400px',
    alignSelf: 'center',
  };

  const stores = [
    { id: 1, coords: [48.866667, 2.333333], address: 'Paris Store, 15 Rue de la Paix, Paris' },
    { id: 2, coords: [43.296482, 5.36978], address: 'Marseille Store, 12 Quai des Belges, Marseille' },
    { id: 3, coords: [45.764043, 4.835659], address: 'Lyon Store, 20 Rue de la République, Lyon' },
    { id: 4, coords: [50.62925, 3.057256], address: 'Lille Store, 33 Rue Faidherbe, Lille' },
    { id: 5, coords: [43.604652, 1.444209], address: 'Toulouse Store, 11 Place du Capitole, Toulouse' },
    { id: 6, coords: [44.837789, -0.57918], address: 'Bordeaux Store, 5 Cours de l’Intendance, Bordeaux' },
    { id: 7, coords: [49.258329, 4.031696], address: 'Reims Store, 7 Place Drouet d’Erlon, Reims' },
    { id: 8, coords: [47.218371, -1.553621], address: 'Nantes Store, 25 Rue Crébillon, Nantes' },
    { id: 9, coords: [45.188529, 5.724524], address: 'Grenoble Store, 10 Rue Lafayette, Grenoble' },
    { id: 10, coords: [43.710173, 7.261953], address: 'Nice Store, 18 Avenue Jean Médecin, Nice' },
  ];

  const [search, setSearch] = useState('');
  const [filteredStores, setFilteredStores] = useState(stores);
  const mapRef = useRef(null);
  const markersRef = useRef({});

  useEffect(() => {
    mapRef.current = L.map('map').setView([48.8566, 2.3522], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapRef.current);

    stores.forEach(({ id, coords, address }) => {
      const marker = L.marker(coords)
        .addTo(mapRef.current)
        .bindPopup(`<b>Dior Boutique</b><br>${address}`);
      markersRef.current[id] = marker;
    });

    return () => {
      mapRef.current.remove();
      markersRef.current = {};
    };
  }, []);

  // Filter stores by search input
  useEffect(() => {
    const filtered = stores.filter((store) =>
      store.address.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredStores(filtered);
  }, [search]);

  // When clicking store in list, fly to marker and open popup
  function handleStoreClick(store) {
    const marker = markersRef.current[store.id];
    if (marker) {
      mapRef.current.flyTo(store.coords, 13, { duration: 1.5 });
      marker.openPopup();
    }
  }

  return React.createElement(
    'div',
    { style: containerStyle },
    React.createElement('h2', { style: headingStyle }, 'Our Boutiques'),
    React.createElement('input', {
      type: 'search',
      placeholder: 'Search stores...',
      value: search,
      onChange: (e) => setSearch(e.target.value),
      style: searchStyle,
    }),
    React.createElement(
      'div',
      { style: mainContentStyle },
      React.createElement('div', { id: 'map', style: mapStyle }),
      React.createElement(
        'div',
        { style: listStyle },
        filteredStores.length === 0
          ? React.createElement('p', null, 'No stores found')
          : filteredStores.map((store) =>
              React.createElement(
                'div',
                {
                  key: store.id,
                  onClick: () => handleStoreClick(store),
                  style: {
                    cursor: 'pointer',
                    padding: '10px',
                    borderBottom: '1px solid #ddd',
                    fontSize: '1rem',
                    color: '#111',
                    userSelect: 'none',
                    transition: 'background-color 0.2s',
                  },
                  onMouseEnter: (e) => (e.currentTarget.style.backgroundColor = '#f0f0f0'),
                  onMouseLeave: (e) => (e.currentTarget.style.backgroundColor = 'transparent'),
                },
                store.address
              )
            )
      )
    )
  );
}

export default Map;



