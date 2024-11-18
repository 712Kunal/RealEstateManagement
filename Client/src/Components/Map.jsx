import React from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import Pin from "./Pin";

function Map() {
  const position = [51.505, -0.09];

  return (
    <MapContainer
      center={position}
      zoom={7}
      scrollWheelZoom={false}
      className="map-container w-full h-full rounded-md overflow-hidden outline-none"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Pin position={position} />
    </MapContainer>
  );
}

export default Map;
