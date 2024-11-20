import React from "react";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { Tooltip } from "react-leaflet/Tooltip";

function Pin({ position }) {
  
  console.log("position:", position);
  
  return (
    <div>
      <Marker position={[position.latitude, position.longitude]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
        <Tooltip>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Tooltip>
      </Marker>
    </div>
  );
}

export default Pin;
