import { React, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Pin from "./Pin";

function Map({ posts }) {
  const [error, setError] = useState("");

  // Pune coordinates instead of London
  const defaultPosition = [18.5204, 73.8567]; // Pune, India coordinates

  return (
    <>
      {error && (
        <p className="text-red-400 text-center bg-red-400/10 py-2 rounded-lg border border-red-400/20">
          {error}
        </p>
      )}
      {posts.length > 0 ? (
        <MapContainer
          center={
            posts.length > 0 && posts[0].latitude && posts[0].longitude
              ? [parseFloat(posts[0].latitude), parseFloat(posts[0].longitude)]
              : defaultPosition
          }
          zoom={12}
          scrollWheelZoom={true}
          className="map-container w-full h-full rounded-md overflow-hidden outline-none"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {posts.map((post) => {
            const lat = parseFloat(post.latitude);
            const lng = parseFloat(post.longitude);

            // Validate coordinates before rendering pin
            if (!isNaN(lat) && !isNaN(lng)) {
              return (
                <Pin
                  position={[lat, lng]}
                  post={post}
                  key={post.id || post._id}
                />
              );
            }
            return null;
          })}
        </MapContainer>
      ) : (
        <h2 className="text-red-400 text-2xl text-center bg-red-400/10 py-2 rounded-lg border border-red-400/20 font-exo">
          Something went wroung 😕
        </h2>
      )}
    </>
  );
}

export default Map;
