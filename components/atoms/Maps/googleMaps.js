import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

export function MapContainer(props) {
    const style={height:'100%',width:'100%'}

  return (
  <Map google={props.google}  style={style} draggable={false} />)
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API
})(MapContainer);
