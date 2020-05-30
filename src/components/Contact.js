import React from "react";
import { Container, Jumbotron, Row, Col } from "reactstrap";
import phone from "../images/icons8-phone-64.png";
import mail from "../images/icons8-gmail-64.png";

const Services = props => {
  return (
    <Container className="contact p-5" fluid={true}>
      <Row>
        <Col xs="12" className="">
          <h1 className="contact-title">Let's Get In Touch!</h1>
        </Col>
        <Col xs="12" className="">
          <p>
            Ready to start your next project with us? Give us a call or send us
            an email and we will get back to you as soon as possible!
          </p>
        </Col>
        <Col md="6" className="">
          <img src={phone} />
          <p>+1 (555) 123-4567</p>
        </Col>
        <Col md="6" className="">
          <img src={mail} />
          <p>contact@yourwebsite.com</p>
        </Col>
      </Row>
      <div className="footer">
        <p className="lead">Copyright © 2020 - Deepz</p>
      </div>
    </Container>
  );
};

export default Services;
