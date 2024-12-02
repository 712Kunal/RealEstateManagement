import React from "react";
import { Marker } from "react-leaflet/Marker";
import { Tooltip } from "react-leaflet/Tooltip";
import { Card, CardContent, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

function Pin({ position, post }) {
  return (
    <Marker position={position}>
      <Tooltip interactive placement="top" arrow> 
        <Card sx={{ maxWidth: 200 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={post.Images[0]}
            title="green iguana"
          />
          <CardContent>
            <Typography variant="h6" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: {post.price}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="!text-xs"
            >
              Bedrooms: {post.bedrooms}
            </Typography>
          </CardContent>
        </Card>
      </Tooltip>
    </Marker>
  );
}

export default Pin;
