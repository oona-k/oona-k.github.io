import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import musicAppImg from "../img/music-app.PNG";
import mtgGameRulesImg from "../img/mtg-rules.PNG";
import { Card, Badge } from "react-bootstrap";

const skillList = [
  { id: 1, name: "html", time: "1,5 years" },
  { id: 2, name: "css", time: "1,5 years" },
  { id: 3, name: "javascript", time: "1,5 years" },
  { id: 4, name: "react", time: "1,5 years" },
  { id: 5, name: "redux", time: "few months" },
  { id: 6, name: "node", time: "few months" },
  { id: 7, name: "ui design", time: "few months" },
  { id: 8, name: "typescript", time: "few months" },
];

const Skills = () => {
  const skillCards = skillList.map((skill) => (
    <Col xs={12} md={3}>
      <Card
        key={skill.id}
        style={{
          backgroundColor: "wheat",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <Card.Body style={{ textAlign: "center" }}>
          <h4>
            <Badge style={{ backgroundColor: "#343a40", color: "white" }}>
              {skill.name.toUpperCase()}
            </Badge>
          </h4>
          <p>{skill.time}</p>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <div id="skills">
      <Container>
        <Container id="skillCardsContainer">
          <h2>My Skills</h2>
          <p>Here's what I have been studying so far</p>
          <Col xs={12} md={12} className="skillList">
            <Row>{skillCards}</Row>
          </Col>
        </Container>
        <h3>Projects</h3>
        <Row>
          <Col xs={12} md={6}>
            <a href="https://harmony-fbddf.web.app/">
              <Image
                id="musicAppImg"
                className="projectImg"
                src={musicAppImg}
                rounded
              />
            </a>
          </Col>
          <Col xs={12} md={6}>
            <a
              href="https://harmony-fbddf.web.app/"
              style={{ fontWeight: "bold", color: "orangered" }}
            >
              Music App
            </a>
            <p>
              Project that we made at school in a team of four students. Music
              App uses Spotify API.
            </p>
            <a
              href="https://harmony-fbddf.web.app/"
              style={{ color: "orangered" }}
            >
              Go to App
            </a>
          </Col>
        </Row>
        <Row className="projectRow">
          <Col xs={12} md={6}>
            <a href="https://magic-the-gathering-assignment.netlify.app/">
              <Image
                id="mtgGameRulesImg"
                className="projectImg"
                src={mtgGameRulesImg}
                rounded
              />
            </a>
          </Col>
          <Col xs={12} md={6}>
            <a
              href="https://magic-the-gathering-assignment.netlify.app/"
              style={{ fontWeight: "bold", color: "orangered" }}
            >
              Magic the Gathering Rule Book
            </a>
            <p>
              Interactive online rulebook for magic the gathering. Rules text
              file is fetched from the official site and displayed in the app.
            </p>
            <a
              href="https://magic-the-gathering-assignment.netlify.app/"
              style={{ color: "orangered" }}
            >
              Go to App
            </a>
            <br></br>
            <a
              href="https://github.com/oona-k/magic-the-gathering-assignment"
              style={{ color: "orangered" }}
            >
              GitHub repository
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
