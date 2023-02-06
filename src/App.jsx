import * as React from 'react';
import './App.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MapContainer, TileLayer } from 'react-leaflet';

function App() {
  return (
    <div className="App">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default App;
