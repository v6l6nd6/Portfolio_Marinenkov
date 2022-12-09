import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import luxTr from "../../Assets/Projects/Luxtrader.png";
import funirPr from "../../Assets/Projects/Funi.png";
import SocN from "../../Assets/Projects/Soc-Netw.png";
import yandexTaxi from "../../Assets/Projects/yandexTaxi.jpg"
import fullStackBlog from "../../Assets/Projects/FullStackBlog.jpg"
import pizzaAppImg from "../../Assets/Projects/pizzaApp.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">projects </strong>
        </h1>
        <p style={{ color: "white" }}>
        Some of my showcase work
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yandexTaxi}
              isBlog={false}
              title="Yandex-Taxi"
              description="Next JS/ Google-MAP/ Tailwind CSS"
              link="https://marinenkov-taxi-app.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pizzaAppImg}
              isBlog={false}
              title="Pizza-App"
              description="Adaptive layout, Tailwind Css, React JS, Redux, TS, API"
              link="https://github.com/v6l6nd6/pizzaAppp_marinenkov"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fullStackBlog}
              isBlog={false}
              title="Full Stack Blog"
              description="MongoDB/ Express/ React/ NodeJS"
              link="https://github.com/v6l6nd6/marinenkov_blog-frontend"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={luxTr}
              isBlog={false}
              title="Luxtrader"
              description="Adaptive layout GULP SCSS JS"
              link="https://github.com/v6l6nd6/layout-luxtrader-adaptive"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={funirPr}
              isBlog={false}
              title="Fun-Proj"
              description="JS logic,SCSS,HTML,GULP."
              link="https://github.com/v6l6nd6/my-layout-adaptive"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
