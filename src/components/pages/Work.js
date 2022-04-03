import React from 'react';
import emojis2 from '../../images/emojis2.png'
import hobbyHubYarn from '../../images/hobbyHubYarn.png'
import rainDog from '../../images/rainDog.png'
import capitols from '../../images/capitols.png'
import notes from '../../images/notes.png'
import readme from '../../images/readme.png'
import { Container, Row, Col } from "react-bootstrap";

export default function Work() {
  return (
    <Container>
            <Row>
              <Col>
                <div className="card bg-dark text-white">
                  <img
                    src={emojis2}
                    className="card-img"
                    alt="emojis grid"
                  />
                  <div className="card-img-overlay">
                    <h1 className="card-title">madMoji</h1>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="card" style={{width: "18rem"}}>
                  <div className="card-body">
                    <h5 className="card-title">madMoji</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      madlibs meet emojis
                    </h6>
                    <p className="card-text">
                      Fun little game to play solo or with friends.
                    </p>
                    <a
                      href="https://svellucci18.github.io/madMoji/"
                      className="card-link"
                      >madMoji</a
                    >
                    <a
                      href="https://svellucci18.github.io/madMoji/"
                      className="card-link"
                      >github</a
                    >
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="card bg-dark text-white">
                  <img style={{maxHeight: "150px"}} style={{objectFit: "cover"}}
                    src={hobbyHubYarn}
                    className="card-img"
                    alt="yarn displayed"
                  />
                  <div className="card-img-overlay">
                    <h1 className="card-title">HobbyHub</h1>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="card" style={{width: "18rem"}}>
                  <div className="card-body">
                    <h5 className="card-title">HobbyHub</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      store and share hobbies
                    </h6>
                    <p className="card-text">
                      Find your community today!
                    </p>
                    <a
                      href="https://hobbyhub10.herokuapp.com/"
                      className="card-link"
                      >HobbyHub</a
                    >
                    <a
                      href="https://github.com/svellucci18/HobbyHub"
                      className="card-link"
                      >github</a
                    >
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="card bg-dark text-white">
                  <img style={{maxHeight: "150px"}} style={{objectFit: "cover"}}
                    src={rainDog}
                    className="card-img"
                    alt="dog in a rain hat"
                  />
                  <div className="card-img-overlay">
                    <h1 className="card-title">weather app</h1>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="card" style={{width: "18rem"}}>
                  <div className="card-body">
                    <h5 className="card-title">weather app</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      five day forecast
                    </h6>
                    <p className="card-text">
                      My dog hates the rain, when do I go on walks?
                    </p>
                    <a
                      href="https://svellucci18.github.io/weather-forecast/"
                      className="card-link"
                      >weather app</a
                    >
                    <a
                      href="https://github.com/svellucci18/weather-forecast"
                      className="card-link"
                      >github</a
                    >
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="card bg-dark text-white">
                  <img style={{maxHeight: "150px"}} style={{objectFit: "cover"}}
                    src={capitols}
                    className="card-img"
                    alt="capitol building"
                  />
                  <div className="card-img-overlay">
                    <h1 className="card-title">capital quiz</h1>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="card" style={{width: "18rem"}}>
                  <div className="card-body">
                    <h5 className="card-title">capital quiz</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      state capitals
                    </h6>
                    <p className="card-text">
                      Test your knowledge and beat the clock.
                    </p>
                    <a
                      href="https://svellucci18.github.io/state-capital-quiz/"
                      className="card-link"
                      >capital quiz</a
                    >
                    <a
                      href="https://svellucci18.github.io/state-capital-quiz/"
                      className="card-link"
                      >github</a
                    >
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="card bg-dark text-white">
                  <img style={{maxHeight: "150px"}} style={{objectFit: "cover"}}
                    src={notes}
                    className="card-img"
                    alt="sticky notes"
                  />
                  <div className="card-img-overlay">
                    <h1 className="card-title">notes</h1>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="card" style={{width: "18rem"}}>
                  <div className="card-body">
                    <h5 className="card-title">notes</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      take some notes
                    </h6>
                    <p className="card-text">
                      Get organized.
                    </p>
                    <a
                      href="https://svell-note-taker.herokuapp.com/"
                      className="card-link"
                      >notes</a
                    >
                    <a
                      href="https://github.com/svellucci18/note-taker"
                      className="card-link"
                      >github</a
                    >
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="card bg-dark text-white">
                  <img style={{maxHeight: "150px"}} style={{objectFit: "cover"}}
                    src={readme}
                    className="card-img"
                    alt="signpost in a sunset background"
                  />
                  <div className="card-img-overlay">
                    <h1 className="card-title">easyREADMEs</h1>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="card" style={{width: "18rem"}}>
                  <div className="card-body">
                    <h5 className="card-title">easyREADMEs</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      README generator
                    </h6>
                    <p className="card-text">
                      Simple node application to quickly build a professional README.
                    </p>
                    <a
                      href="https://github.com/svellucci18/README_generator"
                      className="card-link"
                      >github</a
                    >
                  </div>
                </div>
              </Col>
            </Row>

    </Container>
  );
}
