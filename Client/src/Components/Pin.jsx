import React from "react";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { Tooltip } from "react-leaflet/Tooltip";

function Pin({ position }) {
  return (
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
      <Tooltip>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Tooltip>
    </Marker>
  );
}

export default Pin;
