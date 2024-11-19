import { React, useEffect, useState } from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import Pin from "./Pin";
import fetchTheData from "../lib/getPosts.js";

function Map() {
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // CALLING THE FUNCTION TO FETCH THE POSTS FROM THE BACKEND SERVER
    fetchTheData(setPosts, setError);
  }, []);

  const defaultPosition = [51.505, -0.09];
  console.log("mapposts:", posts);

  return (
    <MapContainer
      center={
        posts.length > 0
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
      {posts.map((post) => (
        <Pin position={post} key={post.id || post._id} />
      ))}
    </MapContainer>
  );
}

export default Map;
