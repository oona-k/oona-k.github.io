import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import musicAppImg from "../img/music-app.PNG";
import mtgGameRulesImg from "../img/mtg-rules.PNG";

const skillList = [
  { id: 1, name: "html" },
  { id: 2, name: "css" },
  { id: 3, name: "javascript" },
  { id: 4, name: "react" },
  { id: 5, name: "redux" },
  { id: 6, name: "node" },
  { id: 7, name: "ui design" },
];

const Skills = () => {
  const skillCards = skillList.map((skill) => (
    <li key={skill.id}>
      <p>{skill.name.toUpperCase()}</p>
    </li>
  ));

  return (
    <div id="skills">
      <Container>
        <h2>My Skills</h2>
        <p>Here's what I have been studying so far</p>
        <Col xs={12} md={6} className="skillList">
          <ul>{skillCards}</ul>
        </Col>
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
