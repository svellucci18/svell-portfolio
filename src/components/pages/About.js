import React from 'react';
import svellRupert from '../../images/svellandrupert.png'
import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <Container>
      <Row>
        <Col className="m-5">
          <h2>Hi, I'm Samantha.</h2>
          <p>I am an avid problem solver, a
          scientist, and a great hostess of gatherings. My mission
          is to spread joy through coding and compliments.</p>
        </Col>
        <Col class="col-md-4">
          <img
            src={svellRupert}
            class="img-fluid rounded-start"
            alt="samantha and rupert"
          />
        </Col>
      </Row>  
    </Container>
  );
}
