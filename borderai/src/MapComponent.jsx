import React from "react";
import { useState, useEffect } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { MapContainer, TileLayer } from 'react-leaflet';
// import {
//   MapContainer,
//   TileLayer,
//   Polygon,
//   Popup,
//   LayersControl,
//   FeatureGroup,
// } from "react-leaflet";
// import { juarez, colonias, distrito5, seccionesDistrito5, datos } from "./data";

function MapComponent() {
    
    const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    // Force a re-render of the maps when the active tab changes
    window.dispatchEvent(new Event('resize'));
  }, [activeTab]);


  return (
    <Tabs activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
      <Tab eventKey={0} title="Map 1">
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
      </Tab>
      <Tab eventKey={1} title="Map 2">
        <MapContainer center={[40.7128, -74.006]} zoom={12} style={{ height: '400px' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
      </Tab>
      <Tab eventKey={2} title="Map 3">
        <MapContainer center={[35.6895, 139.6917]} zoom={14} style={{ height: '400px' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
      </Tab>
    </Tabs>
    // <MapContainer
    //   center={[31.456364799515877, -106.53501426130038]}
    //   zoom={9}
    //   scrollWheelZoom={false}
    // >
    //   <TileLayer
    //     attribution='&copy; <a href="https:www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //     url="https:{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //   />
    //   <LayersControl position="topright">
    //     <LayersControl.Overlay checked name="Juárez">
    //       {juarez.features.map((coord) => {
    //         const coordinates = coord.geometry.coordinates[0];

    //         return (
    //           <Polygon
    //             pathOptions={{
    //               fillColor: "#e3a587",
    //               fillOpacity: 0.7,
    //               weight: 2,
    //               opacity: 1,
    //               dashArray: "2",
    //               color: "#252627",
    //             }}
    //             positions={coordinates}
    //           >
    //             <Popup>Ciudad Juárez</Popup>
    //           </Polygon>
    //         );
    //       })}
    //     </LayersControl.Overlay>
    //     <LayersControl.Overlay name="Colonias">
    //       <FeatureGroup>
    //         {colonias.features.map((coord) => {
    //           const coordinates = coord.geometry.coordinates[0].map((item) => [
    //             item[1],
    //             item[0],
    //           ]);

    //           const name = coord.properties.name;

    //           const type = coord.properties.TIPO;

    //           return (
    //             <Polygon
    //               pathOptions={{
    //                 fillColor: "#f2efe9",
    //                 fillOpacity: 0.7,
    //                 weight: 2,
    //                 opacity: 1,
    //                 dashArray: "2",
    //                 color: "#252627",
    //               }}
    //               positions={coordinates}
    //             >
    //               <Popup>
    //                 {type}, {name}
    //               </Popup>
    //             </Polygon>
    //           );
    //         })}
    //       </FeatureGroup>
    //     </LayersControl.Overlay>
    //     <LayersControl.Overlay name="Distrito 5">
    //       {distrito5.features.map((coord) => {
    //         const coordinates = coord.geometry.coordinates.map((item) => [
    //           item[1],
    //           item[0],
    //         ]);

    //         return (
    //           <Polygon
    //             pathOptions={{
    //               fillColor: "#ca2e55",
    //               fillOpacity: 0.7,
    //               weight: 2,
    //               opacity: 1,
    //               dashArray: "2",
    //               color: "#252627",
    //             }}
    //             positions={coordinates}
    //           >
    //             <Popup>Distrito 5</Popup>
    //           </Polygon>
    //         );
    //       })}
    //     </LayersControl.Overlay>
    //     <LayersControl.Overlay name="Secciones">
    //       <FeatureGroup>
    //         {seccionesDistrito5.features.map((coord) => {
    //           const coordinates = coord.geometry.coordinates.map((item) => [
    //             item[1],
    //             item[0],
    //           ]);

    //           const name = coord.properties.name;

    //           const pan = datos.find((item) => item.seccion === name)?.pan;
    //           const pri = datos.find((item) => item.seccion === name)?.pri;
    //           const morena = datos.find(
    //             (item) => item.seccion === name
    //           )?.morena;

    //           const votosNulos = datos.find(
    //             (item) => item.seccion === name
    //           )?.votos_nulos;
    //           const votacionTotal = datos.find(
    //             (item) => item.seccion === name
    //           )?.votacion_total;

    //           const participacion = datos.find(
    //             (item) => item.seccion === name
    //           )?.porcentaje_participacion;

    //           return (
    //             <Polygon
    //               pathOptions={{
    //                 fillColor: "#00cccc",
    //                 fillOpacity:
    //                   votacionTotal >= 453
    //                     ? 1
    //                     : votacionTotal >= 407
    //                     ? 0.9
    //                     : votacionTotal >= 362
    //                     ? 0.8
    //                     : votacionTotal >= 316
    //                     ? 0.7
    //                     : votacionTotal >= 271
    //                     ? 0.6
    //                     : votacionTotal >= 225
    //                     ? 0.5
    //                     : votacionTotal >= 180
    //                     ? 0.4
    //                     : votacionTotal >= 135
    //                     ? 0.3
    //                     : votacionTotal >= 90
    //                     ? 0.2
    //                     : 0.1,
    //                 weight: 2,
    //                 opacity: 1,
    //                 dashArray: "2",
    //                 color: "#252627",
    //               }}
    //               positions={coordinates}
    //             >
    //               <Popup>
    //                 <div>
    //                   <h5>
    //                     Distrito 5<br />
    //                     Sección: {name}
    //                     <br />
    //                     -PAN: {pan ?? "N/A"}
    //                     <br />
    //                     -PRI: {pri ?? "N/A"}
    //                     <br />
    //                     -MORENA: {morena ?? "N/A"}
    //                     <br />
    //                     Votos nulos: {votosNulos ?? "N/A"}
    //                     <br />
    //                     Votación total: {votacionTotal ?? "N/A"}
    //                     <br />
    //                     Participación: {participacion ?? "N/A"}
    //                   </h5>
    //                 </div>
    //               </Popup>
    //             </Polygon>
    //           );
    //         })}
    //       </FeatureGroup>
    //     </LayersControl.Overlay>
    //   </LayersControl>
    // </MapContainer>
  );
}

export default MapComponent;