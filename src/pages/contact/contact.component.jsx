import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./contact.style.css";

import { FaGithub, FaLinkedinIn, FaMailBulk, FaTwitter } from "react-icons/fa";


const ContactPage = () => {
    return (
        <div id='contact'>
            <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
            <Jumbotron className="contact-jumbotron">
                <Row>
                    <Col className="d-flex justify-content-center flex-wrap">
                        <div className="m-2">
                            <a href="mailto:anishagwan123@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-dark" title="anishagwan123@gmail.com">
                                    <FaMailBulk/> Email Me
                                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://github.com/anis-agwan" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-dark" title="Github Profile">
                                    <FaGithub/> GitHub
                                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="mailto:anishagwan123@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-dark" title="LinkedIn Profile">
                                    <FaLinkedinIn/> LinkedIn
                                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://twitter.com/idiot_alderson" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-dark" title="Twitter Profile">
                                    <FaTwitter/> Twitter
                                </Button>
                            </a>
                        </div>  
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    )
}

export default ContactPage;
