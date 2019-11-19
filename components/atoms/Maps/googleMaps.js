import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

export function MapContainer(props) {
    const style={height: '320px', position: 'relative', overflow: 'hidden'}

  return (<div> 
  <Map google={props.google}  style={style} draggable={false} height={`100px`} />   
  </div>)
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API
})(MapContainer);
