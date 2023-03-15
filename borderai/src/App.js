import React from "react";
import { Container, Row, Col, Table, Tabs, Tab } from "react-bootstrap";
import {
  MapContainer,
  TileLayer,
  Polygon,
  Popup,
  LayersControl,
  FeatureGroup,
} from "react-leaflet";
import { juarez, colonias, distrito5, seccionesDistrito5, datos } from "./data";
import "./App.css";

function App() {
  return (
    <Container>
      <Row>
        <Tabs
          defaultActiveKey="politico"
          id="uncontrolled-tab-example"
          transition={false}
          className="mb-3"
          justify
        >
          <Tab eventKey="demografico" title="Demográfico"></Tab>
          <Tab eventKey="politico" title="Político">
            <Row>
              <Col sm={4}>
                <h1>Datos</h1>
                <Table responsive="sm">
                  <thead>
                    <tr>
                      {/* <th>Departamento</th> */}
                      {/* <th>Clave Municipio</th> */}
                      {/* <th>Municipio</th> */}
                      <th>Sección</th>
                      <th>Casilla</th>
                      {/* <th>Lista Nominal</th> */}
                      <th>PAN</th>
                      <th>PRI</th>
                      <th>PRD</th>
                      <th>PVEM</th>
                      <th>PT</th>
                      <th>MC</th>
                      <th>MORENA</th>
                      <th>PES</th>
                      <th>RSP</th>
                      <th>FPM</th>
                      <th>NACH</th>
                      <th>PAN-PRD</th>
                      <th>PT-MORENA-NACH</th>
                      <th>CNR</th>
                      <th>Votos Nulos</th>
                      <th>Votos Totales</th>
                      <th>% Participación</th>
                    </tr>
                  </thead>
                  <tbody>
                    {datos.map((item) => (
                      <tr key={item.seccion}>
                        {/* <td>{item.departamento}</td>
                        <td>{item.clave_municipio}</td>
                        <td>{item.municipio}</td> */}
                        <td>{item.seccion}</td>
                        <td>{item.casilla}</td>
                        {/* <td>{item.lista_nominal}</td> */}
                        <td>{item.pan}</td>
                        <td>{item.pri}</td>
                        <td>{item.prd}</td>
                        <td>{item.pvem}</td>
                        <td>{item.pt}</td>
                        <td>{item.mc}</td>
                        <td>{item.morena}</td>
                        <td>{item.pes}</td>
                        <td>{item.rsp}</td>
                        <td>{item.fpm}</td>
                        <td>{item.nach}</td>
                        <td>{item.coalicion_pan_prd}</td>
                        <td>{item.coalicion_pt_morena_nach}</td>
                        <td>{item.candidato_no_registrado}</td>
                        <td>{item.votos_nulos}</td>
                        <td>{item.votacion_total}</td>
                        <td>{item.porcentaje_participacion}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
              <Col>
                <MapContainer
                  center={[31.456364799515877, -106.53501426130038]}
                  zoom={10}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <LayersControl position="topright">
                    <LayersControl.Overlay checked name="Juárez">
                      {juarez.features.map((coord) => {
                        const coordinates = coord.geometry.coordinates[0];

                        return (
                          <Polygon
                            pathOptions={{
                              fillColor: "#e3a587",
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
                    <LayersControl.Overlay name="Colonias">
                      <FeatureGroup>
                        {colonias.features.map((coord) => {
                          const coordinates = coord.geometry.coordinates[0].map(
                            (item) => [item[1], item[0]]
                          );

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
                    <LayersControl.Overlay name="Distrito 5">
                      {distrito5.features.map((coord) => {
                        const coordinates = coord.geometry.coordinates.map(
                          (item) => [item[1], item[0]]
                        );

                        return (
                          <Polygon
                            pathOptions={{
                              fillColor: "#ca2e55",
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
                          const coordinates = coord.geometry.coordinates.map(
                            (item) => [item[1], item[0]]
                          );

                          const name = coord.properties.name;

                          const pan = datos.find(
                            (item) => item.seccion === name
                          )?.pan;
                          const pri = datos.find(
                            (item) => item.seccion === name
                          )?.pri;
                          const morena = datos.find(
                            (item) => item.seccion === name
                          )?.morena;

                          const votosNulos = datos.find(
                            (item) => item.seccion === name
                          )?.votos_nulos;
                          const votacionTotal = datos.find(
                            (item) => item.seccion === name
                          )?.votacion_total;

                          const participacion = datos.find(
                            (item) => item.seccion === name
                          )?.porcentaje_participacion;

                          return (
                            <Polygon
                              pathOptions={{
                                fillColor: "#00cccc",
                                fillOpacity:
                                  votacionTotal >= 453
                                    ? 1
                                    : votacionTotal >= 407
                                    ? 0.9
                                    : votacionTotal >= 362
                                    ? 0.8
                                    : votacionTotal >= 316
                                    ? 0.7
                                    : votacionTotal >= 271
                                    ? 0.6
                                    : votacionTotal >= 225
                                    ? 0.5
                                    : votacionTotal >= 180
                                    ? 0.4
                                    : votacionTotal >= 135
                                    ? 0.3
                                    : votacionTotal >= 90
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
                                    Distrito 5<br />
                                    Sección: {name}
                                    <br />
                                    -PAN: {pan ?? "N/A"}
                                    <br />
                                    -PRI: {pri ?? "N/A"}
                                    <br />
                                    -MORENA: {morena ?? "N/A"}
                                    <br />
                                    Votos nulos: {votosNulos ?? "N/A"}
                                    <br />
                                    Votación total: {votacionTotal ?? "N/A"}
                                    <br />
                                    Participación: {participacion ?? "N/A"}
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
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="psicologico" title="Psicológico"></Tab>
        </Tabs>
      </Row>
    </Container>
  );
}

export default App;
