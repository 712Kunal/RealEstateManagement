import { React, useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Pin from "./Pin";
import fetchTheData from "../lib/getPosts.js";

function Map() {
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // CALLING THE FUNCTION TO FETCH THE POSTS FROM THE BACKEND SERVER
    fetchTheData(setPosts, setError);
  }, []);

  const defaultPosition = [51.5074, -0.1278];
  console.log(posts);

  return (
    <MapContainer
      center={
        posts.length === 1
          ? [posts[0].latitude, posts[0].longitude]
          : defaultPosition
      }
      zoom={7}
      scrollWheelZoom={false}
      className="map-container w-full h-full rounded-md overflow-hidden outline-none"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {posts.length > 0 ? (
        posts.map((post) => (
          <Pin
            position={[parseFloat(post.latitude), parseFloat(post.longitude)]}
            key={post.id || post._id}
          />
        ))
      ) : (
        <div className="text-center text-gray-500 py-8">Loading map...</div>
      )}
    </MapContainer>
  );
}

export default Map;
