import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './ViewLocationMap.css';

const center = {
  lat: 6.5244,
  lng: 3.3792
};

const ViewLocationMap = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerClassName="map-container"
        center={center}
        zoom={14}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default ViewLocationMap;
