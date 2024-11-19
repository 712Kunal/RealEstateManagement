import { React, useEffect, useState } from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import Pin from "./Pin";
import fetchTheData from "../lib/getPosts.js";

function Map() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  // FETCH THE DATA FROM THE BACKEND SERVER AFTER 5 SECONDS
  useEffect(() => {
    // setTimeout(() => {
    fetchTheData(setPosts, setError);
    // }, 2000);
  }, []);

  const position = [51.505, -0.09];
  console.log("mapposts:", posts);

  return (
    <MapContainer
      center={
        posts.length === 0 ? [posts[0].latitude, posts[0].longitude] : position
      }
      zoom={7}
      scrollWheelZoom={false}
      className="map-container w-full h-full rounded-md overflow-hidden outline-none"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {posts.length > 0 &&
        posts.map((post) => {
          <Pin position={post} key={post.Id} />;
        })}
    </MapContainer>
  );
}

export default Map;
