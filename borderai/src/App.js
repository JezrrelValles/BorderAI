import React from "react"
import { MapContainer, TileLayer, Polygon, Popup, LayersControl, FeatureGroup } from 'react-leaflet'
import { juarez, colonias, distrito5, seccionesDistrito5} from "./data"
import './App.css';

function App() {
  return (
    <MapContainer center={[31.446364799515877, -106.63501426130038]} zoom={10} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LayersControl position="topright">
      <LayersControl.Overlay checked name="Juárez">
      {
        juarez.features.map((coord) => {
          const coordinates = coord.geometry.coordinates[0]

          return (
            <Polygon
            pathOptions={{
              fillColor: "#e3a587",
              fillOpacity: 0.7,
              weight: 2,
              opacity: 1,
              dashArray: "2",
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
        <FeatureGroup>
          {
            colonias.features.map((coord) => {
              const coordinates = coord.geometry.coordinates[0].map((item) => [item[1], item[0]]);

              const name = coord.properties.name;

              const type = coord.properties.TIPO;
              
              return (
                <Polygon
                  pathOptions={{
                    fillColor: "#f2efe9",
                    fillOpacity: 0.7,
                    weight: 2,
                    opacity: 1,
                    dashArray: "2",
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
      <LayersControl.Overlay name="Distrito 5">
      {
        distrito5.features.map((coord) => {
          const coordinates = coord.geometry.coordinates.map((item) => [item[1], item[0]]);

          return (
            <Polygon
            pathOptions={{
              fillColor: "#ca2e55",
              fillOpacity: 0.7,
              weight: 2,
              opacity: 1,
              dashArray: "2",
              color: '#252627'
            }}
            positions={coordinates}>
              <Popup>
                Distrito 5
              </Popup>
            </Polygon>
          )
        })
      }
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Secciones">
        <FeatureGroup>
          {
            seccionesDistrito5.features.map((coord) => {
              const coordinates = coord.geometry.coordinates.map((item) => [item[1], item[0]]);

              const name = coord.properties.name;
              
              return (
                <Polygon
                  pathOptions={{
                    fillColor: "#22C55E",
                    fillOpacity: 0.7,
                    weight: 2,
                    opacity: 1,
                    dashArray: "2",
                    color: '#252627'
                  }}
                  positions={coordinates}>
                  <Popup>
                    {name}
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
