import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div id="footer">
      <Container>
        <Row>
          <Col md={4}></Col>
          <Col md={4}></Col>
          <Col md={4}>
            <p>Contact</p>
            <p>oona.kakkonen@gmail.com</p>
            <a href="https://www.linkedin.com/in/oona-kakkonen/">
              <FontAwesomeIcon className="footerIcon" icon={faLinkedin} />
            </a>
            <a href="https://github.com/oona-k">
              <FontAwesomeIcon className="footerIcon" icon={faGithub} />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
