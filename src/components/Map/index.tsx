import * as React from "react";
import MapWithGeoman from "./map/MapWithGeoman";
import { Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

const defaultPosition = {
  lat: -19.9202684,
  lng: -43.9548901,
  zoom: 22
};



export default function Map() {
  const position: [number, number] = [defaultPosition.lat, defaultPosition.lng];
  const blueMaker = L.icon({
    iconUrl: 'https://res.cloudinary.com/dje6m1lab/image/upload/v1654371500/141-1410207_eule-clipart_cuwcly.png',
    iconSize:     [31, 39], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


  const onSelectionCircleAdded = () => console.log("circle added");
  const onSelectionCircleMoved = () => console.log("circle moved");
  const onSelectionCircleRemoved = () => console.log("circle removed");

  return (
    <MapWithGeoman
      className="map"
      center={position}
      zoom={defaultPosition.zoom}
      onSelectionCircleAdded={onSelectionCircleAdded}
      onSelectionCircleMoved={onSelectionCircleMoved}
      onSelectionCircleRemoved={onSelectionCircleRemoved}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={blueMaker}>
        <Popup>
          Av. Augusto de Lima 1962 -
         Igreja Batista do Barro Preto
        </Popup>
      </Marker>
    </MapWithGeoman>
  );
}
