import React from "react";
import { Container, Row, Col } from "reactstrap";
import diamond from "../images/service-icon/icons8-diamond-64.png";
import computer from "../images/service-icon/icons8-monitor-64.png";
import globe from "../images/service-icon/icons8-globe-64.png";
import heart from "../images/service-icon/icons8-heart-outline-64.png";

const Services = props => {
  return (
    <Container className="services mx-auto p-5" fluid={true}>
      <Row>
        <Col xs="12" className="service-title mb-5">
          <h1 className="">At Your Service</h1>
        </Col>
        <Col md className="">
          <img src={diamond} alt="problem" />
          <h1>Sturdy Themes</h1>
          <p>Our themes are updated regularly to keep them bug free!</p>
        </Col>
        <Col md className="">
          <img src={computer} alt="problem" />
          <h1>Up to Date</h1>
          <p>All dependencies are kept current to keep things fresh.</p>
        </Col>
        <Col md className="">
          <img src={globe} alt="problem" />
          <h1>Ready to Publish</h1>
          <p>You can use this design as is, or you can make changes!</p>
        </Col>
        <Col md className="">
          <img src={heart} alt="problem" />
          <h1>Made with Love</h1>
          <p>Is it really open source if it's not made with love?</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
