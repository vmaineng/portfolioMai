import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import selfPortrait from "../assets/projectAsset/photo.png";

export const Home = () => {
  const myName = "Mai Vang";
  return (
    <div>
      <section className="banner" id="home">
        <Container >
          <Row>
            <Col xs={12} md={6} xl={7}>
              <h2> Hello there :) </h2>
              <span className="name">{myName}</span>
              <h1> Software Engineer </h1>
              <p>
                Mai is an enthuastic, creative, and driven Software Engineer
                specializing in converting technical designs to a user. Strong
                passion for web technologies and web development, digital and
                personal empathy, and excellent communication skills.
              </p>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={selfPortrait} alt="selfPortrait" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
