import React from "react";
import { Container, Jumbotron, Row, Col, Button } from "reactstrap";
import pf1 from "../images/fullsize/1.jpg";
import pf2 from "../images/fullsize/2.jpg";
import pf3 from "../images/fullsize/3.jpg";
import pf4 from "../images/fullsize/4.jpg";
import pf5 from "../images/fullsize/5.jpg";
import pf6 from "../images/fullsize/6.jpg";

const Services = props => {
  return (
    <Container className="services" fluid={true}>
      <Row>
        <Col md="4" className="">
          <img src={pf1} alt="problem" />
        </Col>
        <Col md="4" className="">
          <img src={pf2} alt="problem" />
        </Col>
        <Col md="4" className="">
          <img src={pf3} alt="problem" />
        </Col>
        <Col md="4" className="">
          <img src={pf4} alt="problem" />
        </Col>
        <Col md="4" className="">
          <img src={pf5} alt="problem" />
        </Col>
        <Col md="4" className="">
          <img src={pf6} alt="problem" />
        </Col>
      </Row>
      <div>
        <Jumbotron fluid className="Jumbo-portfolio">
          <Container fluid>
            <h1>Free Download at Start Bootstrap!</h1>
            <Button className="btn-portfolio">Download Now</Button>{" "}
          </Container>
        </Jumbotron>
      </div>
    </Container>
  );
};

export default Services;
