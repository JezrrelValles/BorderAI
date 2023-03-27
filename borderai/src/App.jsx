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
import RadialChart from "./components/RadialChart";
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
import { IoAccessibility } from "react-icons/io5";
import { MdFamilyRestroom } from "react-icons/md";
import { FaBrain } from "react-icons/fa";
import { RiEmotionHappyFill, RiEmotionHappyLine } from "react-icons/ri";
import { HiUsers, HiUserGroup, HiUser } from "react-icons/hi";
import {
  BsGenderMale,
  BsGenderFemale,
  BsFillCalendarDateFill,
  BsFlagFill,
  BsFillBriefcaseFill,
} from "react-icons/bs";
import Form from "react-bootstrap/Form";
import {
  datos,
  columns,
  poblacionTotal,
  poblacionMale,
  poblacionFemale,
  indiceProblemas,
  indiceSecciones
} from "./data";
import "./App.css";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

createTheme(
  "solarized",
  {
    text: {
      primary: "#8884d8",
      secondary: "#8884d8",
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
      default: "rgba(136,132,216,.54)",
      focus: "rgba(136,132,216,.12)",
      hover: "rgba(136,132,216,.12)",
      disabled: "rgba(136,132,216,.18)",
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
          style={{ position: 'sticky', top: 0, zIndex: 1 }}
          justify
        >
          <Tab
            eventKey={0}
            title="Demográfico"
            style={{ backgroundColor: "#f8f9fc" }}
          >
            <Row>
              <Col sm={6}>
                <h5
                  style={{
                    color: "#8884d8",
                  }}
                  className="text-center"
                >
                  Indicadores demograficos y sociedad
                </h5>
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
                        <HiUsers color="#8884d8" />
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
                        <BsFillCalendarDateFill color="#8884d8" />
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
                      <Card.Title>Población male por rangos de edad</Card.Title>
                      <Card.Text>
                        <EmbudoChart data={poblacionMale} />
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
                        <EmbudoChart data={poblacionTotal} />
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
                        <EmbudoChart data={poblacionFemale} />
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Fuente: INEGI (2020)</small>
                    </Card.Footer>
                  </Card>
                </CardGroup>
                <Row>
                  <Col>
                  <BarChart width={600} height={300} data={indiceSecciones}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="seccion" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="poblacion" fill="#8884d8" />
                    </BarChart>
                  </Col>
                </Row>
              </Col>
              <Col>
                <MapComponent category={"demografico"} />
              </Col>
            </Row>
          </Tab>
          <Tab
            eventKey={1}
            title="Político"
            style={{ backgroundColor: "#f8f9fc" }}
          >
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
                    title="Resultados electorales locales"
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
                {/* <Row className="mt-4">
                  <Col xs={4}>
                    <PuntosChart />
                  </Col>
                </Row> */}
                <Row className="mt-4">
                  <Col xs={4}>
                    <ColumnChart />
                  </Col>
                </Row>
                {/* <Row className="mt-4">
                  <Col xs={4}>
                    <PastelChart />
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col xs={4}>
                    <TreeChart />
                  </Col>
                </Row> */}
                <Row className="mt-4">
                  <Col xs={4}>
                    <AriaChart />
                  </Col>
                </Row>
              </Col>
              <Col>
                <MapComponent category={"politico"} />
              </Col>
            </Row>
          </Tab>
          <Tab eventKey={2} title="Psicológico">
            <Row>
              <Col sm={6}>
                <h5
                  style={{
                    color: "#8884d8",
                  }}
                  className="text-center"
                >
                  Indicadores de Desempeño
                </h5>
                <CardGroup className="mb-4">
                  <Card>
                    <Card.Body className="text-center">
                      <Card.Title>
                        <RiEmotionHappyFill color="#8884d8" />
                      </Card.Title>
                      <Card.Subtitle>
                        Nivel de felicidad ciudadana
                      </Card.Subtitle>
                      <Card.Text style={{ color: "#009688" }}>8.28</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Fuente: Encuesta de Percepción Ciudadada (2021)
                      </small>
                    </Card.Footer>
                  </Card>
                  <Card>
                    <Card.Body className="text-center">
                      <Card.Title>
                        <BsFlagFill color="#8884d8" />
                      </Card.Title>
                      <Card.Subtitle>Nivel de orgullo ciudadano</Card.Subtitle>
                      <Card.Text style={{ color: "#ec407a" }}>4.33</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Fuente: Encuesta de Percepción Ciudadada (2021)
                      </small>
                    </Card.Footer>
                  </Card>
                  <Card>
                    <Card.Body className="text-center">
                      <Card.Title>
                        <RiEmotionHappyFill color="#8884d8" />
                      </Card.Title>
                      <Card.Subtitle>
                        Nivel de satisfacción ciudadana
                      </Card.Subtitle>
                      <Card.Text style={{ color: "#009688" }}>6.82</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Fuente: Encuesta de Percepción Ciudadada (2021)
                      </small>
                    </Card.Footer>
                  </Card>
                </CardGroup>
                <CardGroup className="mb-4">
                  <Card>
                    <Card.Body className="text-center">
                      <Card.Title>
                        <MdFamilyRestroom color="#8884d8" />
                      </Card.Title>
                      <Card.Subtitle>
                        Nivel de satisfaccion familiar
                      </Card.Subtitle>
                      <Card.Text style={{ color: "#009688" }}>8.78</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Fuente: Encuesta de Percepción Ciudadada (2021)
                      </small>
                    </Card.Footer>
                  </Card>
                  <Card>
                    <Card.Body className="text-center">
                      <Card.Title>
                        <HiUsers color="#8884d8" />
                      </Card.Title>
                      <Card.Subtitle>
                        Nivel de satisfacción social
                      </Card.Subtitle>
                      <Card.Text style={{ color: "#009688" }}>7.65</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Fuente: Encuesta de Percepción Ciudadada (2021)
                      </small>
                    </Card.Footer>
                  </Card>
                  <Card>
                    <Card.Body className="text-center">
                      <Card.Title>
                        <BsFillBriefcaseFill color="#8884d8" />
                      </Card.Title>
                      <Card.Subtitle>
                        Nivel de satisfacción laboral
                      </Card.Subtitle>
                      <Card.Text style={{ color: "#009688" }}>8.41</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Fuente: Encuesta de Percepción Ciudadada (2021)
                      </small>
                    </Card.Footer>
                  </Card>
                </CardGroup>
                <CardGroup className="mb-4">
                  <Card>
                    <Card.Body className="text-center">
                      <Card.Title>
                        <IoAccessibility color="#8884d8" />
                      </Card.Title>
                      <Card.Subtitle>
                        Nivel de satisfacción salud física
                      </Card.Subtitle>
                      <Card.Text style={{ color: "#009688" }}>8.09</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Fuente: Encuesta de Percepción Ciudadada (2021)
                      </small>
                    </Card.Footer>
                  </Card>
                  <Card>
                    <Card.Body className="text-center">
                      <Card.Title>
                        <FaBrain color="#8884d8" />
                      </Card.Title>
                      <Card.Subtitle>
                        Nivel de satisfacción salud mental
                      </Card.Subtitle>
                      <Card.Text style={{ color: "#009688" }}>8.48</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Fuente: Encuesta de Percepción Ciudadada (2021)
                      </small>
                    </Card.Footer>
                  </Card>
                  <Card>
                    <Card.Body className="text-center">
                      <Card.Title>
                        <HiUser color="#8884d8" />
                      </Card.Title>
                      <Card.Subtitle>
                        Nivel de satisfacción apariencia
                      </Card.Subtitle>
                      <Card.Text style={{ color: "#009688" }}>8.28</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Fuente: Encuesta de Percepción Ciudadada (2021)
                      </small>
                    </Card.Footer>
                  </Card>
                </CardGroup>
                <Row className="mt-4">
                  <h5 style={{ color: "#8884d8" }} className="text-center">
                    Principales problemas en Ciudad Juárez
                  </h5>
                  <Col xs={4}>
                    <BarChart width={600} height={300} data={indiceProblemas}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="porcentaje" fill="#8884d8" />
                    </BarChart>
                  </Col>
                </Row>
              </Col>
              <Col>
                <MapComponent category={"psicologico"} />
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </Row>
    </Container>
  );
}

export default App;
