import React from 'react'
import { Col, Container, Row } from "react-bootstrap";

export const Home = () => {
  const myName = "{Mai Vang}"
  return (
    <div>
         <section className="banner" id="home">
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={7}>
                        <h2> Welcome to my Portfolio! </h2>
                        <span className="name">{myName}</span>
                        <h1> Software Engineer </h1> 
                        <p> 
                        Mai is an enthuastic, creative, and driven Software Engineer specializing in converting technical designs to a user experience
             with a background in Finance. Strong passion for web technologies and web development, digital and personal empathy, and excellent communication skills.
                        </p>
                    </Col>
                    {/* <Col xs={12} md={6} xl={5}>
                        <img id="animated" src='https://cdni.iconscout.com/illustration/premium/thumb/female-developer-developing-website-7299187-5962904.png' alt="Header"/>
                    </Col> */}
                </Row>
            </Container>
        </section>

    </div>
  )
}
