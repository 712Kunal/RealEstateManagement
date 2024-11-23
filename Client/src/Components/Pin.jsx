import React from "react";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { Tooltip } from "react-leaflet/Tooltip";

function Pin({ position, post }) {
  // Add error checking for position
  if (!position || !Array.isArray(position) || position.length !== 2 || 
      isNaN(position[0]) || isNaN(position[1])) {
    console.error('Invalid position:', position);
    return null;
  }

  return (
    <Marker position={position}>
      <Popup>
        <div className="p-2">
          <h3 className="font-bold">{post?.title || 'Property'}</h3>
          <p className="text-sm">{post?.location || 'Location not specified'}</p>
          {post?.price && <p className="text-sm">Price: ${post.price}</p>}
        </div>
      </Popup>
      <Tooltip>Click for details</Tooltip>
    </Marker>
  );
}

export default Pin;