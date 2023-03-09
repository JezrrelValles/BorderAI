import React from "react"
import { MapContainer, TileLayer, Polygon, useMap, Marker, Popup, Circle } from 'react-leaflet'
import { data } from "./data"
import { Icon } from "leaflet"
import './App.css';

const redOptions = { color: 'red' }

function App() {
  return (
    <MapContainer center={[31.446364799515877, -106.63501426130038]} zoom={10} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        data.features.map((coord) => {
          const coordinates = coord.geometry.coordinates[0]

          return (
            <Polygon
            pathOptions={{
              fillColor: "#ff8f23",
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
      {/* <Marker position={[31.687155193758485, -106.42686638757755]}>

      </Marker> */}
    </MapContainer>
  );
}

export default App;
