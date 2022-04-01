import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
      <Container className="container-fluid flex">
        <Row>
        <Col className="navbar-brand m-3">
          Samantha Vellucci
        </Col>
        <Col id="navbarNav">
          <ul className="navbar-nav list-group list-group-horizontal">
            <li className="nav-item m-2">
              <a className="nav-link" href="#about"
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              >
                about
              </a>
            </li>
            <li className="nav-item m-2">
              <a className="nav-link" href="#work"
              onClick={() => handlePageChange('Work')}
              className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
              >
                work
              </a>
            </li>
            <li className="nav-item m-2">
              <a className="nav-link" href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                contact
              </a>
            </li>
            <li className="nav-item m-2">
              <a className="nav-link" href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >
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
