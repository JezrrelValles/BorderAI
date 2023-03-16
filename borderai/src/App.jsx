import React from "react";
import MapComponent from "./MapComponent";
import { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Tabs, Tab } from "react-bootstrap";
import { datos } from "./data";
import "./App.css";

function App() {

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, [activeTab]);


  return (
    <Container fluid>
      <Row>
        <Tabs activeKey={activeTab} onSelect={(key) => setActiveTab(key)} className="mb-3" justify>
          <Tab eventKey={0} title="Demográfico">
            <Row>
              <Col></Col>
              <Col>
                <MapComponent/>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey={1} title="Político">
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
                      <tr>
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
                <MapComponent/>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey={2} title="Psicológico">
            <Row>
              <Col></Col>
              <Col>
                <MapComponent/>
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </Row>
    </Container>
  );
}

export default App;
