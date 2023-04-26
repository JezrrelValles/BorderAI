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
  secciones,
  distritosElectoralesLocales
} from "../data";
import {
  datos,
  indiceSecciones,
  datosVotos,
  indiceServicios,
  datos2016,
  datosVotos2016,
  poblacionSecciones,
} from "../ine";
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

            const agua = indiceServicios[0].calidad;
            const electrica = indiceServicios[1].calidad;
            const alumbrado = indiceServicios[2].calidad;
            const ecobus = indiceServicios[3].calidad;
            const basura = indiceServicios[4].calidad;
            const senales = indiceServicios[5].calidad;
            const semaforizacion = indiceServicios[6].calidad;
            const verdes = indiceServicios[7].calidad;
            const ruteras = indiceServicios[8].calidad;
            const calles = indiceServicios[9].calidad;

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
                <Popup>
                  <div>
                    Satisfacción de servicios
                    <br />
                    Distrito: 5
                    <br />
                    Agua: {agua ?? "N/A"}
                    <br />
                    Energía eléctrica: {electrica ?? "N/A"}
                    <br />
                    Alumbrado: {alumbrado ?? "N/A"}
                    <br />
                    Ecobús: {ecobus ?? "N/A"}
                    <br />
                    Recolección de basura: {basura ?? "N/A"}
                    <br />
                    Señales viales: {senales ?? "N/A"}
                    <br />
                    Semaforización: {semaforizacion ?? "N/A"}
                    <br />
                    Áreas verdes: {verdes ?? "N/A"}
                    <br />
                    Ruteras: {ruteras ?? "N/A"}
                    <br />
                    Calles y pavimentación: {calles ?? "N/A"}
                  </div>
                </Popup>
              </Polygon>
            );
          })}
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Secciones">
          <FeatureGroup>
            {secciones.features.map((coord) => {
              const coordinates = coord.geometry.coordinates.map((item) => [
                item[1],
                item[0],
              ]);

              const name = coord.properties.name;

              if (category === "demografico") {
                const poblacion = poblacionSecciones.find(
                  (item) => item.SECCION === name
                )?.POBTOT;
                const poblacionFemenina = poblacionSecciones.find(
                  (item) => item.SECCION === name
                )?.POBFEM;
                const poblacionMasculina = poblacionSecciones.find(
                  (item) => item.SECCION === name
                )?.POBMAS;
                const poblacion18a24 = poblacionSecciones.find(
                  (item) => item.SECCION === name
                )?.P_18YMAS;
                const poblacion18a24F = poblacionSecciones.find(
                  (item) => item.SECCION === name
                )?.P_18YMAS_F;
                const poblacion18a24M = poblacionSecciones.find(
                  (item) => item.SECCION === name
                )?.P_18YMAS_M;

                return (
                  <Polygon
                    pathOptions={{
                      fillColor: "#A6C04B",
                      fillOpacity:
                        poblacion >= 3000
                          ? 1
                          : poblacion >= 2500
                          ? 0.9
                          : poblacion >= 2000
                          ? 0.8
                          : poblacion >= 1000
                          ? 0.7
                          : poblacion >= 800
                          ? 0.6
                          : poblacion >= 600
                          ? 0.5
                          : poblacion >= 400
                          ? 0.4
                          : poblacion >= 200
                          ? 0.3
                          : poblacion >= 100
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
                          <br />
                          Población +18 total: {poblacion18a24 ?? "N/A"}
                          <br />
                          Población +18 femenina: {poblacion18a24F ?? "N/A"}
                          <br />
                          Población +18 masculina: {poblacion18a24M ?? "N/A"}
                        </h5>
                      </div>
                    </Popup>
                  </Polygon>
                );
              } else if (category === "politico") {
                const pan = parseInt(datosVotos.find(
                  (item) => item.seccion === name
                )?.pan, 10);
                const pri = parseInt(datosVotos.find(
                  (item) => item.seccion === name
                )?.pri, 10);
                const morena = parseInt(datosVotos.find(
                  (item) => item.seccion === name
                )?.morena, 10);
                const mc = parseInt(datosVotos.find(
                  (item) => item.seccion === name
                )?.mc, 10);

                const votosNulos = datosVotos.find(
                  (item) => item.seccion === name
                )?.votos_nulos;
                const votacionTotal = datosVotos.find(
                  (item) => item.seccion === name
                )?.votacion_total;

                return (
                  <Polygon
                    pathOptions={{
                      fillColor: pan > pri && pan > morena ? "#06338e" : 
                      pri > pan && pri > morena ? "#00923f" : "#ac241c",
                      fillOpacity:
                        votacionTotal >= 1000
                          ? 1
                          : votacionTotal >= 750
                          ? 0.9
                          : votacionTotal >= 500
                          ? 0.8
                          : votacionTotal >= 400
                          ? 0.7
                          : votacionTotal >= 300
                          ? 0.6
                          : votacionTotal >= 200
                          ? 0.5
                          : votacionTotal >= 100
                          ? 0.4
                          : votacionTotal >= 50
                          ? 0.3
                          : votacionTotal >= 25
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
        <LayersControl.Overlay name="Histórico">
          <FeatureGroup>
            {seccionesDistrito5.features.map((coord) => {
              const coordinates = coord.geometry.coordinates.map((item) => [
                item[1],
                item[0],
              ]);

              const name = coord.properties.name;

              const pan = parseInt(datosVotos2016.find(
                (item) => item.seccion === name
              )?.pan, 10); // El segundo argumento 10 especifica la base numérica (decimal en este caso)
              const coalicion = parseInt(datosVotos2016.find(
                (item) => item.seccion === name
              )?.coalicion_pri_pvem_pt_panal, 10);
              const morena = parseInt(datosVotos2016.find(
                (item) => item.seccion === name
              )?.morena, 10);
              const votosNulos = datosVotos2016.find(
                (item) => item.seccion === name
              )?.votos_nulos;
              const votacionTotal = datosVotos2016.find(
                (item) => item.seccion === name
              )?.votacion_total;

              return (
                <Polygon
                  pathOptions={{
                    fillColor: pan > coalicion && pan > morena ? "#06338e" : 
                    coalicion > pan && coalicion > morena ? "#00923f" : "#ac241c",
                    fillOpacity:
                      votacionTotal >= 3700
                        ? 1
                        : votacionTotal >= 1500
                        ? 0.9
                        : votacionTotal >= 1000
                        ? 0.8
                        : votacionTotal >= 750
                        ? 0.7
                        : votacionTotal >= 500
                        ? 0.6
                        : votacionTotal >= 250
                        ? 0.5
                        : votacionTotal >= 100
                        ? 0.4
                        : votacionTotal >= 50
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
                        PRI-PVEM-PT-PANAL: {coalicion ?? "N/A"}
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
            })}
          </FeatureGroup>
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
};

export default MapComponent;
