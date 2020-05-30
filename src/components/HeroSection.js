import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Bg from "../images/bg-masthead.jpg";

const HeroSection = props => {
  return (
    <Container
      className="hero-section"
      fluid={true}
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <Row>
        <Col md="12" className="tophero">
          <strong>YOUR FAVORITE SOURCE OF FREE BOOTSTRAP THEMES</strong>
        </Col>
        <Col md className="btmhero mt-3 mx-auto">
          <h5>
            Start Bootstrap can help you build better websites using the
            Bootstrap framework! Just download a theme and start customizing, no
            strings attached!
          </h5>
          <Button className="btn-hero">Find Out More</Button>{" "}
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
