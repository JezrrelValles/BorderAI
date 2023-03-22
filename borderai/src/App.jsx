import React from "react";
import MapComponent from "./components/MapComponent";
import ColumnChart from "./components/ColumnChart";
import PastelChart from "./components/PieChart";
import LineaChart from "./components/LineChart";
import EmbudoChart from "./components/FunnelChart";
import RadChart from "./components/RadarChart";
import PuntosChart from "./components/ScatterChart";
import TreeChart from "./components/TreeMap";
import AriaChart from "./components/AreaChart";
import DataTable, { createTheme } from "react-data-table-component";
import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Tabs,
  Tab,
  Card,
  CardGroup,
} from "react-bootstrap";
import { HiUsers } from "react-icons/hi";
import {
  BsGenderMale,
  BsGenderFemale,
  BsFillCalendarDateFill,
} from "react-icons/bs";
import Form from "react-bootstrap/Form";
import { datos, columns } from "./data";
import "./App.css";

createTheme(
  "solarized",
  {
    text: {
      primary: "#0078ff",
      secondary: "#0078ff",
    },
    background: {
      default: "#f8f9fc",
    },
    context: {
      background: "#cb4b16",
      text: "#FFFFFF",
    },
    divider: {
      default: "#073642",
    },
    button: {
      default: "rgba(0,120,255,.54)",
      focus: "rgba(0,120,255,.12)",
      hover: "rgba(0,120,255,.12)",
      disabled: "rgba(0,120,255,.18)",
    },
  },
  "dark"
);

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
    <Container fluid style={{ backgroundColor: "#f8f9fc" }}>
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
                <CardGroup className="mb-4">
                  <Card>
                    <Card.Body className="text-center">
                      <Card.Title>
                        <BsGenderMale color="#3393ff" />
                      </Card.Title>
                      <Card.Subtitle>Población masculina</Card.Subtitle>
                      <Card.Text>756,977</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Fuente: INEGI (2020)</small>
                    </Card.Footer>
                  </Card>
                  <Card>
                    <Card.Body className="text-center">
                      <Card.Title>
                        <HiUsers color="#7F7AE1" />
                      </Card.Title>
                      <Card.Subtitle>Población total</Card.Subtitle>
                      <Card.Text>1,512,450</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Fuente: INEGI (2020)</small>
                    </Card.Footer>
                  </Card>
                  <Card>
                    <Card.Body className="text-center">
                      <Card.Title>
                        <BsGenderFemale color="#ca61c3" />
                      </Card.Title>
                      <Card.Subtitle>Población femenina</Card.Subtitle>
                      <Card.Text>755,473</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Fuente: INEGI (2020)</small>
                    </Card.Footer>
                  </Card>
                </CardGroup>
                <CardGroup className="mb-4">
                  <Card>
                    <Card.Body className="text-center">
                      <Card.Title>
                        <BsGenderMale color="#3393ff" />
                      </Card.Title>
                      <Card.Subtitle>Edad mediana masculina</Card.Subtitle>
                      <Card.Text>28</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Fuente: INEGI (2020)</small>
                    </Card.Footer>
                  </Card>
                  <Card>
                    <Card.Body className="text-center">
                      <Card.Title>
                        <BsFillCalendarDateFill color="#7F7AE1" />
                      </Card.Title>
                      <Card.Subtitle>Edad mediana</Card.Subtitle>
                      <Card.Text>28</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Fuente: INEGI (2020)</small>
                    </Card.Footer>
                  </Card>
                  <Card>
                    <Card.Body className="text-center">
                      <Card.Title>
                        <BsGenderFemale color="#ca61c3" />
                      </Card.Title>
                      <Card.Subtitle>Edad mediana femenina</Card.Subtitle>
                      <Card.Text>29</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Fuente: INEGI (2020)</small>
                    </Card.Footer>
                  </Card>
                </CardGroup>
                <CardGroup className="mb-4">
                  <Card>
                    <Card.Body className="text-center">
                      <Card.Title>
                        Población masculina por rangos de edad
                      </Card.Title>
                      <Card.Text>
                        <EmbudoChart />
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Fuente: INEGI (2020)</small>
                    </Card.Footer>
                  </Card>
                  <Card>
                    <Card.Body className="text-center">
                      <Card.Title>
                        Población total por rangos de edad
                      </Card.Title>
                      <Card.Text>
                        <EmbudoChart />
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Fuente: INEGI (2020)</small>
                    </Card.Footer>
                  </Card>
                  <Card>
                    <Card.Body className="text-center">
                      <Card.Title>
                        Población femenina por rangos de edad
                      </Card.Title>
                      <Card.Text>
                        <EmbudoChart />
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Fuente: INEGI (2020)</small>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </Col>
              <Col>
                <MapComponent />
              </Col>
            </Row>
          </Tab>
          <Tab eventKey={1} title="Político">
            <Row>
              <Col xs={6}>
                <Row>
                  <Col></Col>
                  <Col xs={3}>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder="Buscar"
                      value={searchText}
                      onChange={handleSearch}
                    />
                  </Col>
                </Row>
                <Row className="mt-1">
                  <DataTable
                    title="Político"
                    columns={columns}
                    data={filteredData ? filteredData : datos}
                    pagination={true}
                    dense={true}
                    theme="solarized"
                  />
                </Row>
                <Row className="mt-4">
                  <Col xs={4}>
                    <LineaChart />
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col xs={4}>
                    <RadChart />
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col xs={4}>
                    <PuntosChart />
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col xs={4}>
                    <ColumnChart />
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col xs={4}>
                    <PastelChart />
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col xs={4}>
                    <TreeChart />
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col xs={4}>
                    <AriaChart />
                  </Col>
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
                  title="Psicológico"
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
        </Tabs>
      </Row>
    </Container>
  );
}

export default App;
