import React from "react"
import { MapContainer, TileLayer, Polygon, Popup, LayersControl, FeatureGroup } from 'react-leaflet'
import { juarez, colonias} from "./data"
import './App.css';

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
              fillColor: "#ec4921",
              fillOpacity: 0.7,
              weight: 2,
              opacity: 1,
              dashArray: "3",
              color: '#252627'
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
        <FeatureGroup pathOptions={{ color: '#252627' }}>
          {
            colonias.features.map((coord) => {
              const coordinates = coord.geometry.coordinates[0].map((item) => [item[1], item[0]]);

              const name = coord.properties.name;

              const type = coord.properties.TIPO;
              
              return (
                <Polygon
                  pathOptions={{
                    fillColor: "#32a6b3",
                    fillOpacity: 0.7,
                    weight: 2,
                    opacity: 1,
                    dashArray: "3",
                    color: '#252627'
                  }}
                  positions={coordinates}>
                  <Popup>
                    {type}, {name}
                  </Popup>
                </Polygon>
              )
            })
          }
        </FeatureGroup>
      </LayersControl.Overlay>
    </LayersControl>
    </MapContainer>
  );
}

export default App;
