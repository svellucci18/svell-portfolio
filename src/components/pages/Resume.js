import React from 'react';
import svellRupert from '../../images/svellandrupert.png'
import { Container, Row, Col } from "react-bootstrap";

export default function Resume() {
  return (
    <Container>
    <Row>
      <Col className="m-5">
            <ul>
              <li><a href="./assets/images/Resume_2022SV.pdf" download="resume">resume</a></li>
          </ul>
      </Col>
      <Col className="col-md-4 m-4">
        <img
          src={svellRupert}
          className="img-fluid rounded-start"
          alt="samantha and rupert"
        />
      </Col>
    </Row>

</Container>
  );
}
