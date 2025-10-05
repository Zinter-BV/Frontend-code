import {
  APIProvider,
  Map,
  AdvancedMarker,
  useMap,
  useMapsLibrary,
} from "@vis.gl/react-google-maps";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const LocationMap = ({
  fromPickupLongitude,
  fromPickupLatitude,
  toDropOffLongitude,
  toDropOffLatitude,
}) => {
  const { pickUpLongitude, pickUpLatitude, dropOffLongitude, dropOffLatitude } =
    useSelector((state) => state.user.userMoveInfo);

  const point1 = {
    lat: Number(fromPickupLatitude) || Number(pickUpLatitude),
    lng: Number(fromPickupLongitude) || Number(pickUpLongitude),
  };

  const point2 = {
    lat: Number(toDropOffLatitude) || Number(dropOffLatitude),
    lng: Number(toDropOffLongitude) || Number(dropOffLongitude),
  };

  // const point1 = { lat: 59.437, lng: 24.7536 }; // Tallinn, Estonia
  // const point2 = { lat: 58.3776, lng: 26.729 }; // Tartu, Estonia

  // console.log(point3, "poinnt3");
  // console.log(point4, "poinnt4");

  return (
    <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <div className="pb-4 w-full rounded-[16px] h-[450px] md:w-[270px]">
        <Map defaultCenter={point1} defaultZoom={10} mapId="YOUR_MAP_ID">
          <AdvancedMarker position={point1} />
          <AdvancedMarker position={point2} />
          <DirectionsRoute point1={point1} point2={point2} />
        </Map>
      </div>
    </APIProvider>
  );
};

const DirectionsRoute = ({ point1, point2 }) => {
  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");
  const mapsLibrary = useMapsLibrary("maps");
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);

  useEffect(() => {
    if (!map || !routesLibrary || !mapsLibrary) return;

    const directionsService = new routesLibrary.DirectionsService();
    const directionsRenderer = new routesLibrary.DirectionsRenderer({
      map: map,
      suppressMarkers: true, // We're using our own markers
      polylineOptions: {
        strokeColor: "#4285F4",
        strokeWeight: 5,
        strokeOpacity: 0.8,
      },
    });

    directionsService.route(
      {
        origin: point1,
        destination: point2,
        travelMode: routesLibrary.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          directionsRenderer.setDirections(result);

          // Get distance and duration
          const route = result.routes[0].legs[0];
          setDistance(route.distance.text);
          setDuration(route.duration.text);
        } else {
          console.error("Directions request failed:", status);
        }
      }
    );

    return () => {
      directionsRenderer.setMap(null);
    };
  }, [map, routesLibrary, mapsLibrary, point1, point2]);
};

export default LocationMap;
