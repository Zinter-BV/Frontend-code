import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
  Marker,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
  position: "relative",
};

const center = {
  lat: 52.373169,
  lng: 4.89066,
};

const MovementMap = () => {
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [travelMode, setTravelMode] = useState("DRIVING");

  // Replace with any location you want
  const origin = "Keizersgracht 123, 1015 CJ Amsterdam";
  const destination = "Rozengracht 55, 1016 LZ Amsterdam";

  //   const origin = 'G28, Unit 1 Lekki Paradise 3 Estate, Chevron Drive, Lekki, Lagos State, Nigeria';
  //   const desti+nation = '15 John Ejakita Lekki';

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <div style={{ position: "relative" }}>
        {/* Control Panel */}
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            zIndex: 1,
            background: "white",
            padding: "12px",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
            maxWidth: "300px",
          }}
        >
          <div style={{ marginBottom: "8px" }}>
            <strong>Starting From:</strong>
            <div>{origin}</div>
          </div>
          <div style={{ marginBottom: "8px" }}>
            <strong>Destination:</strong>
            <div>{destination}</div>
          </div>
          <div>
            <label style={{ fontWeight: "bold", marginRight: "8px" }}>
              Mode:
            </label>
            <select
              value={travelMode}
              onChange={(e) => setTravelMode(e.target.value)}
              style={{ padding: "4px" }}
            >
              <option value="DRIVING">Driving</option>
              <option value="WALKING">Walking</option>
              <option value="BICYCLING">Bicycling</option>
              <option value="TRANSIT">Transit</option>
            </select>
          </div>
        </div>

        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
          <DirectionsService
            options={{
              destination,
              origin,
              travelMode: travelMode,
            }}
            callback={(response) => {
              if (response !== null && response.status === "OK") {
                setDirectionsResponse(response);
              } else {
                console.error("Directions request failed:", response);
              }
            }}
          />

          {directionsResponse && (
            <>
              <DirectionsRenderer
                directions={directionsResponse}
                options={{
                  suppressMarkers: false, // 👈 Hides default A/B markers
                }}
              />
              {/* <Marker
        position={directionsResponse.routes[0].legs[0].start_location}
        label="Starting Point"
      />
      <Marker
        position={directionsResponse.routes[0].legs[0].end_location}
        label="Destination"
      /> */}
            </>
          )}
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default MovementMap;
