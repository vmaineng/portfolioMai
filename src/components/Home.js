import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import selfPortrait from "../assets/projectAsset/photo.png";

export const Home = () => {
  const myName = "Mai Vang";
  return (
    <div>
      <section className="banner" id="home">
        <Container className="container">
          <Row className="aligh-items-center">
            <Col className="column1">
              <h2> Hello there :) </h2>
              <span className="name">{myName}</span>
              <h1> Software Engineer </h1>
              <p >
                Mai is an enthuastic, creative, and driven Software Engineer
                specializing in converting technical designs to a user
                experience with a background in Finance. Strong passion for web
                technologies and web development, digital and personal empathy,
                and excellent communication skills.
              </p>
            </Col>
            <Col className="column2">
              <img src={selfPortrait} alt="selfPortrait" class="selfPortrait" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
