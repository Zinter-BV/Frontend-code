import { APIProvider, Map } from "@vis.gl/react-google-maps";
import React from "react";

const LocationMap = () => {
  const position = {
    lat: 53.43,
    lng: 10,
  };
  return (
    <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "400px", width: "300px" }}>
        <Map defaultCenter={position} defaultZoom={10} />
      </div>
    </APIProvider>
  );
};

export default LocationMap;
