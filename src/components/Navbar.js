import { Container, Row, Col } from "react-bootstrap";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
      <Container className="container-fluid flex">
        <Row>
        <Col className="navbar-brand m-2">
          Samantha Vellucci
        </Col>
        <Col id="navbarNav">
          <ul className="navbar-nav list-group list-group-horizontal">
            <li className="nav-item m-2">
              <a className="nav-link" href="#about">
                about
              </a>
            </li>
            <li className="nav-item m-2">
              <a className="nav-link" href="#work">
                work
              </a>
            </li>
            <li className="nav-item m-2">
              <a className="nav-link" href="#contact">
                contact
              </a>
            </li>
            <li className="nav-item m-2">
              <a className="nav-link" href="#resume">
                resume
              </a>
            </li>
          </ul>
        </Col>
        </Row>
      </Container>
    </nav>
  );
}

export default Navbar;
