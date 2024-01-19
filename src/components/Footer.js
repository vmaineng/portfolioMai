import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import githubIcon from "../assets/nav/github.png";
import linkedinIcon from "../assets/nav/linkedIn.png";

export const Footer = () => {
    const name = "{Mai Vang}"
  return (
    <div>
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <Col size={12} sm={6} className="text-start text-sm-end">
              <h6 className="name">{name}</h6>
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/mai-vang-software-engineer/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedinIcon} alt="LinkedIn" />
                </a>
                <a
                  href="https://github.com/vmaineng"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Github" />
                </a>
                <p>&copy;{new Date().getFullYear()}. All Rights Reserved</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};
