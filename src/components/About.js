import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const About = props => {
  return (
    <Container className="about-section mx-auto p-5" fluid={true}>
      <Row>
        <Col md="12" className="">
          <h1>We've got what you need!</h1>
        </Col>
        <Col md className="">
          <h5>
            Start Bootstrap has everything you need to get your new website up
            and running in no time! Choose one of our open source, free to
            download, and easy to use themes! No strings attached!
          </h5>
          <Button className="btn-about">Get Started</Button>{" "}
        </Col>
      </Row>
    </Container>
  );
};

export default About;
