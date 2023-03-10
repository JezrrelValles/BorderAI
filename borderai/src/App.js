import React from "react"
import { MapContainer, TileLayer, Polygon, Popup, LayersControl } from 'react-leaflet'
import { juarez, colonias } from "./data"
import proj4 from 'proj4';
import './App.css';

proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");
proj4.defs("EPSG:25830","+proj=utm +zone=13 +datum=WGS84 +units=m +no_defs';");

function App() {
  return (
    <MapContainer center={[31.446364799515877, -106.63501426130038]} zoom={10} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LayersControl position="topright">
      <LayersControl.Overlay name="Juárez">
      {
        juarez.features.map((coord) => {
          const coordinates = coord.geometry.coordinates[0]

          return (
            <Polygon
            pathOptions={{
              fillColor: "#f23302",
              fillOpacity: 0.7,
              weight: 2,
              opacity: 1,
              dashArray: "3",
              color: 'black'
            }}
            positions={coordinates}>
              <Popup>
                Ciudad Juárez
              </Popup>
            </Polygon>
          )
        })
      }
      </LayersControl.Overlay>
      <LayersControl.Overlay checked name="Colonias">
        {
          colonias.features.map((coord) => {
            const coordinates = coord.geometry.coordinates[0];

            const transformedCoords = coordinates.map((coord) =>
            proj4('EPSG:25830', 'EPSG:4326', coord));

            const swappedCoords = transformedCoords.map((coord) => [coord[1], coord[0]]);

            return (
              <Polygon
              pathOptions={{
                fillColor: "#f23302",
                fillOpacity: 0.7,
                weight: 2,
                opacity: 1,
                dashArray: "3",
                color: 'black'
              }}
              positions={swappedCoords}>
              </Polygon>
            )
          })
        }
      </LayersControl.Overlay>
    </LayersControl>
    </MapContainer>
  );
}

export default App;
