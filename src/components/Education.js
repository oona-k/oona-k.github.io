import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Education = () => {
  return (
    <div id="education">
      <Container>
        <h2>Education</h2>
        <Row>
          <Col xs={4} md={3}>
            <p>Jan 2020 - Present</p>
          </Col>
          <Col>
            <p>Business College Helsinki</p>
            <p>Full Stack Web Developer Program </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={4} md={3}>
            <p>2009 - 2016</p>
          </Col>
          <Col>
            <p>University of Eastern Finland</p>
            <p>Master of Science </p>
            <p>Mathematics Teacher and Class Teacher Education</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Education;
