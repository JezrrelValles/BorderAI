import React from "react"
import { MapContainer, TileLayer, Polygon, Popup, LayersControl } from 'react-leaflet'
import { juarez, colonias } from "./data"
import proj4 from 'proj4';
import './App.css';

const current = '+proj=utm +zone=13 +datum=WGS84 +units=m +no_defs';
          
const target = 'EPSG:4326';

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
      <LayersControl.Overlay name="Colonias">
        {
        colonias.features.map((coord) => {
          const coordinates = coord.geometry.coordinates[0];

          const formatCoordinates = coordinates.map((coord) => {
            const newCoord = proj4(current, target).forward(coord);
            return [newCoord[1], newCoord[0]];
          });

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
              positions={formatCoordinates}>
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
