import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Wahyu Pratama</span>.
            <br />
            I'm a <span className="purple">self-taught web developer</span>{" "}
            currently learning and building projects with modern web
            technologies.
            <br />I focus on strengthening my skills in{" "}
            <span className="purple">HTML, CSS, and JavaScript</span> while
            documenting my journey through educational content.
            <br />
            <br />
            Outside of coding, I enjoy activities that keep me inspired and
            creative, especially anything related to{" "}
            <span className="purple">anime</span>.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
