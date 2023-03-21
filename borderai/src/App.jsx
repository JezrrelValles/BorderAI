import React from "react";
import MapComponent from "./MapComponent";
import ColumnChart from "./ColumnChart";
import PastelChart from "./PieChart";
import LineaChart from "./LineChart";
import DataTable, { createTheme } from "react-data-table-component";
import { useState, useEffect } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { datos, columns } from "./data";
import "./App.css";

createTheme('solarized', {
  text: {
    primary: '#268bd2',
    secondary: '#268bd2',
  },
  background: {
    default: '#f2efe9',
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF',
  },
  divider: {
    default: '#073642',
  },
  button: {
		default: 'rgba(37,135,203,.54)',
		focus: 'rgba(37,135,203,.12)',
		hover: 'rgba(37,135,203,.12)',
		disabled: 'rgba(37,135,203,.18)',
	},
}, 'dark');

function App() {
  const [activeTab, setActiveTab] = useState(1);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const filteredData = searchText
    ? datos.filter((item) =>
        Object.keys(item).some((key) =>
          item[key].toLowerCase().includes(searchText.toLowerCase())
        )
      )
    : datos;

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, [activeTab]);

  return (
    <Container fluid style={{ backgroundColor: '#f2efe9' }}>
      <Row>
        <Tabs
          activeKey={activeTab}
          onSelect={(key) => setActiveTab(key)}
          className="mb-3"
          justify
        >
          <Tab eventKey={0} title="Demográfico">
            <Row>
              <Col sm={6}>
                <Row>
                  <Col></Col>
                  <Col></Col>
                  <Col xs={4}>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder="Buscar"
                      value={searchText}
                      onChange={handleSearch}
                    />
                  </Col>
                </Row>
                <DataTable
                  title="Demo"
                  columns={columns}
                  data={filteredData ? filteredData : datos}
                  pagination={true}
                  dense={true}
                />
                <LineaChart />
                <Row className="mt-4">
                  <Col xs={2}></Col>
                  <Col>
                    <ColumnChart />
                  </Col>
                  <Col xs={2}></Col>
                </Row>
                <Row>
                  <Col xs={2}></Col>
                  <Col>
                    <PastelChart />
                  </Col>
                  <Col xs={2}></Col>
                </Row>
              </Col>
              <Col>
                <MapComponent />
              </Col>
            </Row>
          </Tab>
          <Tab eventKey={1} title="Político">
            <Row>
              <Col sm={6}>
                <Row>
                  <Col></Col>
                  <Col></Col>
                  <Col xs={4}>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder="Buscar"
                      value={searchText}
                      onChange={handleSearch}
                    />
                  </Col>
                </Row>
                <DataTable
                  title="Demo"
                  columns={columns}
                  data={filteredData ? filteredData : datos}
                  pagination={true}
                  dense={true}
                  theme="solarized"
                />
                <LineaChart />
                <Row className="mt-4">
                  <Col xs={2}></Col>
                  <Col>
                    <ColumnChart />
                  </Col>
                  <Col xs={2}></Col>
                </Row>
                <Row>
                  <Col xs={2}></Col>
                  <Col>
                    <PastelChart />
                  </Col>
                  <Col xs={2}></Col>
                </Row>
              </Col>
              <Col>
                <MapComponent />
              </Col>
            </Row>
          </Tab>
          <Tab eventKey={2} title="Psicológico">
            <Row>
              <Col sm={6}>
                <Row>
                  <Col></Col>
                  <Col></Col>
                  <Col xs={4}>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder="Buscar"
                      value={searchText}
                      onChange={handleSearch}
                    />
                  </Col>
                </Row>
                <DataTable
                  title="Demo"
                  columns={columns}
                  data={filteredData ? filteredData : datos}
                  pagination={true}
                  dense={true}
                />
                <LineaChart />
                <Row className="mt-4">
                  <Col xs={2}></Col>
                  <Col>
                    <ColumnChart />
                  </Col>
                  <Col xs={2}></Col>
                </Row>
                <Row>
                  <Col xs={2}></Col>
                  <Col>
                    <PastelChart />
                  </Col>
                  <Col xs={2}></Col>
                </Row>
              </Col>
              <Col>
                <MapComponent />
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </Row>
    </Container>
  );
}

export default App;
