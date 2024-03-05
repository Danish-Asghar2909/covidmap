import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import worldGeoJSON from './custom.geo.json'
const MapComponent = ({ data }) => {

  // Function to style the GeoJSON based on data
  const style = (feature) => {
    const countryData = data.find((item) => item.country === feature.properties.name);
    const tested = countryData ? countryData.tested : 0;
    // You can customize styling based on other data like infected, deceased, etc.
    return {
      fillColor: getColor(tested), // Define your color function
      weight: 1,
      opacity: 1,
      color: 'white',
      fillOpacity: 0.7,
    };
  };

  // Function to determine color based on tested value
  const getColor = (tested) => {
    return tested > 20000 ? '#800026' :
           tested > 15000 ? '#BD0026' :
           tested > 10000 ? '#E31A1C' :
           tested > 5000 ? '#FC4E2A' :
           tested > 1000 ? '#FD8D3C' :
           '#FEB24C';
  };

  // Function to bind popup with data
  const onEachFeature = (feature, layer) => {
    const countryData = data.find((item) => item.country === feature.properties.name);
    layer.bindPopup(`<strong>${feature.properties.name}</strong><br>
                    Tested: ${countryData ? countryData.tested : 'N/A'}<br>
                    Infected: ${countryData ? countryData.infected : 'N/A'}<br>
                    Deceased: ${countryData ? countryData.deceased : 'N/A'}`);
  };

  return (
    <MapContainer style={{ height: '100vh' }} zoom={2} center={[0, 0]}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON
        data={worldGeoJSON}
        style={style}
        onEachFeature={onEachFeature}
      />
    </MapContainer>
  );
};

export default MapComponent;
