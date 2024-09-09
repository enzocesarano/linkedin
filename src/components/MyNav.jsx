import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  FaHome,
  FaNetworkWired,
  FaBriefcase,
  FaEnvelope,
  FaBell,
  FaSearch,
  FaStar,
  FaTh,
  FaCompass,
  FaUsers,
  FaChartLine,
  FaInfoCircle,
  FaBullseye,
  FaPlay,
  FaPlus,
  FaTag,
} from "react-icons/fa";
import "../App.css";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-light position-fixed z-1" style={{ width: "100%" }}>
      <Container fluid style={{ maxWidth: "70%" }}>
        <Navbar.Brand href="#">
          <img
            src="http://clipart-library.com/new_gallery/25-259122_icons-symbols-button-linkedin-png-image.png"
            alt="Logo"
            style={{ height: "35px" }}
          />
        </Navbar.Brand>
        <Form className="d-flex me-auto" style={{ flex: 1, maxWidth: "300px" }}>
          <Form.Control
            type="search"
            placeholder="🔍 Cerca"
            className="me-1 search-input"
            aria-label="Search"
            style={{ flex: 1 }}
          />
        </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-1 my-lg-0" navbarScroll>
            <Nav.Link href="#home" className="nav-item">
              <FaHome className="nav-icon" />
              <div className="nav-text">Home</div>
            </Nav.Link>
            <Nav.Link href="#network" className="nav-item">
              <FaNetworkWired className="nav-icon" />
              <div className="nav-text">Rete</div>
            </Nav.Link>
            <Nav.Link href="#jobs" className="nav-item">
              <FaBriefcase className="nav-icon" />
              <div className="nav-text">Lavoro</div>
            </Nav.Link>
            <Nav.Link href="#messaging" className="nav-item">
              <FaEnvelope className="nav-icon" />
              <div className="nav-text">Messaggistica</div>
            </Nav.Link>
            <Nav.Link href="#notifications" className="nav-item">
              <FaBell className="nav-icon" />
              <div className="nav-text">Notifiche</div>
            </Nav.Link>
            <div className="icon-above-dropdown ">
              <div className="icon-with-text">
                <img src="https://placedog.net/30/30" alt="Profile" className="nav-profile-img" />
              </div>
              <NavDropdown title="Tu" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#">
                  <div className="dropdown-profile">
                    <img src="https://placedog.net/50/50" alt="Profile" />
                    <div>
                      <strong>Enzo Ceserano</strong>
                      <p>Io sono un lavoratore onesto</p>
                    </div>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                  <button>Visualizza profilo</button>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <div className="dropdown-section ms-4">
                  <a href="#">
                    <strong>Account</strong>
                  </a>
                  <a href="#">
                    <FaStar className="icon" /> Prova 1 mese di Premium per 0 EUR
                  </a>
                </div>
                <NavDropdown.Divider />
                <div className="dropdown-section ms-4 text-secondary">
                  <a href="#">Impostazioni e privacy</a>
                  <a href="#">Guida</a>
                  <a href="#">Lingua</a>
                </div>
                <NavDropdown.Divider />
                <div className="dropdown-section ms-4">
                  <a href="#">
                    <strong>Gestisci</strong>
                  </a>
                  <a href="#">Post e attività</a>
                  <a href="#">Account per la pubblicazione di offerte di lavoro</a>
                </div>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Esci</NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className="separator-bar"></div>
            <div className="icon-above-dropdown ">
              <div className="icon-with-text">
                <FaTh className="icon" />
              </div>

              <NavDropdown title="Per le aziende" id="navbarScrollingDropdown">
                <div className="dropdown-columns">
                  <div className="column">
                    <p>
                      <strong>Scopri altri prodotti LinkedIn</strong>
                    </p>
                    <a href="#" className="mb-4 mt-5 fw-bold ms-3">
                      <FaCompass className="icon iconBlu me-3 " /> Trova lead
                    </a>
                    <a href="#" className="mb-5 mt-3 fw-bold ms-3">
                      <FaUsers className="icon iconBlu me-3" /> Gruppi
                    </a>
                    <a href="#" className="text-secondary">
                      Talent
                    </a>
                    <a href="#" className="mb-5 mt-3 fw-bold ms-3">
                      <FaChartLine className="icon iconBlu me-3" /> Talent Insights
                    </a>
                    <a href="#" className="text-secondary">
                      Vendite
                    </a>
                    <a href="#" className="mb-5 mt-3 fw-bold ms-3 ">
                      <FaInfoCircle className="icon iconBlu me-3 " /> Marketplace dei servizi
                    </a>
                    <a href="#" className="text-secondary">
                      Marketing
                    </a>
                    <a href="#" className="mb-5 mt-3 fw-bold ms-3">
                      <FaBullseye className="icon iconBlu me-3" /> Pubblicizza
                    </a>
                    <a href="#" className="text-secondary">
                      Learning
                    </a>
                    <a href="#" className="mb-5 mt-3 fw-bold ms-3">
                      <FaPlay className="icon iconBlu me-3" /> Learning
                    </a>
                  </div>
                  <div className="column">
                    <p>
                      <strong className="mb-5 fw-bold ms-3 ">Scopri altro per il business</strong>
                    </p>
                    <div>
                      <a href="#">
                        <div>
                          <strong className="mb-5 fw-bold ms-3 ">Assumi su LinkedIn</strong>
                          <p className="ms-3">Trova, attrai e assumi</p>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <div>
                          <strong className="mb-5 fw-bold ms-3">Vendi con LinkedIn</strong>
                          <p className="ms-3">Sblocca nuove opportunità di vendita</p>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <div>
                          <strong className="mb-5 fw-bold ms-3">Offerta di lavoro gratuita</strong>
                          <p className="ms-3">Ottieni rapidamente candidati qualificati</p>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <div>
                          <strong className="mb-5 fw-bold ms-3">Fai pubblicità su LinkedIn</strong>
                          <p className="ms-3">Acquisisci clienti e fai crescere la tua azienda</p>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <div>
                          <strong className="mb-5 fw-bold ms-3">Impara con LinkedIn</strong>
                          <p className="ms-3">Assumi su LinkedIn</p>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <div>
                          <strong className="mb-5 fw-bold ms-3"> Admin Center</strong>
                          <p className="ms-3">Gestisci i dettagli di fatturazione e account</p>
                        </div>
                      </a>
                    </div>
                    <div>
                      <p>
                        <strong className="ms-3">Crea una pagina aziendale</strong>{" "}
                        <FaPlus className="icon ms-3 iconPlus" />
                      </p>
                    </div>
                  </div>
                </div>
              </NavDropdown>
            </div>
            <div className="icon-with-text">
              <FaTag className="icon" />
              <div className="nav-text">Pubblica Un'offerta di lavoro</div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
