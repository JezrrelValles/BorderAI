import React from "react";
import {
  MapContainer,
  TileLayer,
  Polygon,
  Popup,
  LayersControl,
  FeatureGroup,
} from "react-leaflet";
import {
  juarez,
  colonias,
  distrito5,
  seccionesDistrito5,
  datos,
  distritosElectoralesLocales,
  indiceSecciones,
  datosVotos,
} from "../data";
import "leaflet/dist/leaflet";

const MapComponent = (props) => {
  const { category } = props;
  return (
    <MapContainer
      center={[31.456364799515877, -106.53501426130038]}
      zoom={9}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <LayersControl position="topright">
        <LayersControl.Overlay checked name="Ciudad Juárez">
          {juarez.features.map((coord) => {
            const coordinates = coord.geometry.coordinates[0];

            return (
              <Polygon
                pathOptions={{
                  fillColor: "#DA5F69",
                  fillOpacity: 0.7,
                  weight: 2,
                  opacity: 1,
                  dashArray: "2",
                  color: "#252627",
                }}
                positions={coordinates}
              >
                <Popup>Ciudad Juárez</Popup>
              </Polygon>
            );
          })}
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Distritos Electorales Locales">
          <FeatureGroup>
            {distritosElectoralesLocales.features.map((coord) => {
              const coordinates = coord.geometry.coordinates.map((item) => [
                item[1],
                item[0],
              ]);

              const name = coord.properties.name;

              return (
                <Polygon
                  pathOptions={{
                    fillColor: "#F29545",
                    fillOpacity: 0.7,
                    weight: 2,
                    opacity: 1,
                    dashArray: "2",
                    color: "#252627",
                  }}
                  positions={coordinates}
                >
                  <Popup>{name}</Popup>
                </Polygon>
              );
            })}
          </FeatureGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Distrito 5">
          {distrito5.features.map((coord) => {
            const coordinates = coord.geometry.coordinates.map((item) => [
              item[1],
              item[0],
            ]);

            return (
              <Polygon
                pathOptions={{
                  fillColor: "#F1C43B",
                  fillOpacity: 0.7,
                  weight: 2,
                  opacity: 1,
                  dashArray: "2",
                  color: "#252627",
                }}
                positions={coordinates}
              >
                <Popup>Distrito 5</Popup>
              </Polygon>
            );
          })}
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Secciones">
          <FeatureGroup>
            {seccionesDistrito5.features.map((coord) => {
              const coordinates = coord.geometry.coordinates.map((item) => [
                item[1],
                item[0],
              ]);

              const name = coord.properties.name;

              if (category === "demografico") {
                const poblacion = indiceSecciones.find(
                  (item) => item.seccion === name
                )?.poblacion;
                const poblacionFemenina = indiceSecciones.find(
                  (item) => item.seccion === name
                )?.poblacionFemenina;
                const poblacionMasculina = indiceSecciones.find(
                  (item) => item.seccion === name
                )?.poblacionMasculina;

                return (
                  <Polygon
                    pathOptions={{
                      fillColor: "#A6C04B",
                      fillOpacity:
                        poblacion >= 6092
                          ? 1
                          : poblacion >= 4874
                          ? 0.9
                          : poblacion >= 3655
                          ? 0.8
                          : poblacion >= 2437
                          ? 0.7
                          : poblacion >= 1218
                          ? 0.6
                          : poblacion >= 609
                          ? 0.5
                          : poblacion >= 305
                          ? 0.4
                          : poblacion >= 153
                          ? 0.3
                          : poblacion >= 76
                          ? 0.2
                          : 0.1,
                      weight: 2,
                      opacity: 1,
                      dashArray: "2",
                      color: "#252627",
                    }}
                    positions={coordinates}
                  >
                    <Popup>
                      <div>
                        <h5>
                          Sección: {name}
                          <br />
                          Población total: {poblacion ?? "N/A"}
                          <br />
                          Población femenina: {poblacionFemenina ?? "N/A"}
                          <br />
                          Población masculina: {poblacionMasculina ?? "N/A"}
                        </h5>
                      </div>
                    </Popup>
                  </Polygon>
                );
              } else if (category === "politico") {
                const pan = datosVotos.find(
                  (item) => item.seccion === name
                )?.pan;
                const pri = datosVotos.find(
                  (item) => item.seccion === name
                )?.pri;
                const morena = datosVotos.find(
                  (item) => item.seccion === name
                )?.morena;

                const votosNulos = datosVotos.find(
                  (item) => item.seccion === name
                )?.votos_nulos;
                const votacionTotal = datosVotos.find(
                  (item) => item.seccion === name
                )?.votacion_total;

                // const participacion = datos.find(
                //   (item) => item.seccion === name
                // )?.porcentaje_participacion;

                return (
                  <Polygon
                    pathOptions={{
                      fillColor: "#A6C04B",
                      fillOpacity:
                        votacionTotal >= 6000
                          ? 1
                          : votacionTotal >= 3000
                          ? 0.9
                          : votacionTotal >= 1500
                          ? 0.8
                          : votacionTotal >= 750
                          ? 0.7
                          : votacionTotal >= 375
                          ? 0.6
                          : votacionTotal >= 188
                          ? 0.5
                          : votacionTotal >= 94
                          ? 0.4
                          : votacionTotal >= 47
                          ? 0.3
                          : votacionTotal >= 24
                          ? 0.2
                          : 0.1,
                      weight: 2,
                      opacity: 1,
                      dashArray: "2",
                      color: "#252627",
                    }}
                    positions={coordinates}
                  >
                    <Popup>
                      <div>
                        <h5>
                          Distrito: 5<br />
                          Sección: {name}
                          <br />
                          PAN: {pan ?? "N/A"}
                          <br />
                          PRI: {pri ?? "N/A"}
                          <br />
                          MORENA: {morena ?? "N/A"}
                          <br />
                          Votos nulos: {votosNulos ?? "N/A"}
                          <br />
                          Votación total: {votacionTotal ?? "N/A"}
                        </h5>
                      </div>
                    </Popup>
                  </Polygon>
                );
              } else {
                return (
                  <Polygon
                    pathOptions={{
                      fillColor: "#A6C04B",
                      fillOpacity: 0.8,
                      weight: 2,
                      opacity: 1,
                      dashArray: "2",
                      color: "#252627",
                    }}
                    positions={coordinates}
                  ></Polygon>
                );
              }
            })}
          </FeatureGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Colonias">
          <FeatureGroup>
            {colonias.features.map((coord) => {
              const coordinates = coord.geometry.coordinates[0].map((item) => [
                item[1],
                item[0],
              ]);

              const name = coord.properties.name;

              const type = coord.properties.TIPO;

              return (
                <Polygon
                  pathOptions={{
                    fillColor: "#00AA7E",
                    fillOpacity: 0.7,
                    weight: 2,
                    opacity: 1,
                    dashArray: "2",
                    color: "#252627",
                  }}
                  positions={coordinates}
                >
                  <Popup>
                    {type}, {name}
                  </Popup>
                </Polygon>
              );
            })}
          </FeatureGroup>
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
};

export default MapComponent;
