import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.style.css";
import Profile from "../../assets/img/profile/profile.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { FaConnectdevelop, FaGithub, FaLinkedinIn, FaGoogleDrive } from "react-icons/fa";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3 ">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6} >
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hello, Friend! I am <strong>&nbsp;Mohmed Anis Agwan</strong>
                <br />Self-motivated engineer with outstanding oral and written communication skills. I am a Full Stack Web Developer with React.js, Redux, Python, Flask, and PostgreSQL as my tech stack.
                <br />
                 Highly knowledgeable in computer software development.
                <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-dark">
                        <FaConnectdevelop /> Connect
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="FaConnectdevelop" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        <FaGoogleDrive /> Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/anis-agwan" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        <FaGithub/> GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/mohmed-anis-agwan/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        <FaLinkedinIn/> LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;