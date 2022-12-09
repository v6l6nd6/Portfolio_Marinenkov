import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";


function Resume() {


  return (
    <Container fluid className="resume-section">
      {/* <Particle /> */}
      <Container>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">WEB DEV experience</h3>
            <Resumecontent
              title="Web Developer at Yandex company"
              date="December 2021 - February 2022"
              content={[
                "Improvement of the Yandex-Zen and Yandex News sections", 
                "Responsible for the adaptability of sections and participant in the development of logic for new programs in the Yandex News section",
                "JS/Node JS/React/HTML/Sass/CSS/BAM/",
                "Git/Gulp/Webpaсk"
              ]}
            />
            <Resumecontent
              title="Web Developer at Finn Flare company"
              date="June 2021 - December 2021"
              content={[
                "Layout of small projects, landing pages, online stores",
                "Responsiveness / cross-browser compatibility / optimization",
                "Participated in the app launch with IMSHOP.IO",
                "HTML/Sass/CSS/BAM/JavaScript",
                "Git/Gulp/Webpaсk"
              ]}
            />
            <h3 className="resume-title">Other experience</h3>
            <Resumecontent
              title="German teacher"
              date="December 2017 — April 2019"
              content={[
                "Jena, Germany (Thuringia)",
                 "Formation and consolidation of basic skills of speaking, reading, writing and listening.",
                 "Compiling a teaching aid for studying a course in a foreign language."
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>

            <Resumecontent
              title="Friedrich Schiller University Jena"
              date="Jul 2019"
              content={[
                "Deutsch als Fremd- und Zweitsprache"
              ]}

            />
            <h3 className="resume-title">Skills</h3>
            <Resumecontent
              content={[
                "HTML5",
                "CSS3",
                "Sass",
                "JavaScript",
                "Node JS",
                "React JS",
                "Next JS",
                "Redux",
                "React-Redux",
                "redux toolkit",
                "Websocket",
                "Context API",
                "Typescript",
                "Git",
                "Webpack",
                "Gulp"
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
