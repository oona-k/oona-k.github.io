import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import myPhoto from "../img/myphoto.jpg";

const About = () => {
  return (
    <div id="about">
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <h2>About me</h2>
            <p>
              I am Full stack web developer student at Business College
              Helsinki. I used to work as a mathematics and physics teacher in
              junior high school, but now I'm looking for new opportunities.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <Image src={myPhoto} roundedCircle id="myPhoto" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
