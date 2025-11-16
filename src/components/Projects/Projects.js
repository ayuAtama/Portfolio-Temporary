import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="I built DevEvents, a full-stack Next.js application, after noticing the need for a modern platform where developers can easily browse, manage, and book tech events (Situation). I set out to create a complete system with authentication, event management, image uploads, and booking features (Task). Using Next.js, TypeScript, MongoDB, NextAuth, Cloudinary, and Tailwind, I developed secure API routes, a protected dashboard, event CRUD operations, and a smooth UI for users to explore and register for events (Action). As a result, the project became a fully functional, production-ready app that demonstrates my ability to build real-world full-stack applications end-to-end (Result)."
              ghLink="https://github.com/ayuAtama/DevEvents-Fullstack-Next.js-App"
              demoLink="https://devevent.wahyupratama.web.id/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
