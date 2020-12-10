import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Tilt from 'react-tilt';
import L_SEMUSI from "../../assets/img/experience/semusi_small.png";

import "./experience.style.css";

const Experience = () => {
    return (
        <div id='experience'>
            <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
            <Jumbotron className="jumbo-style">
                <Container>
                    <Tilt options={{ max: 25 }}>
                        <Card>
                            <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                <Card.Img variant="top" className="img-resize" src={L_SEMUSI} alt="Accenture logo" />
                            </Card.Header>
                            <Card.Body className="d-flex justify-content-center flex-column">
                                <div>
                                    <Card.Title className="text-center">Python Developer</Card.Title>
                                </div>
                                <div>
                                    <Card.Text className="text-center style">
                                        <strong>Technology:</strong> Machine Learning, Python, Flask
                                        <br />
                                        <strong>Duration:</strong> August 2020 - Present
                                        <br/>
                                        <strong> Description </strong>
                                        <ul className="text-left">
                                            <li><strong>Developed &amp; enhanced</strong>Remained abreast of developments in related Python frameworks and libraries, including flask and scikit-learn.</li>
                                            <li><strong>Planned</strong> and engineered RESTful services to manipulate dynamic datasets.
                                            </li>
                                            <li><strong>Composed</strong> production-grade code to convert machine learning models into services and pipelines to be consumed at backend. 
                                            </li>
                                            <li><strong>Transformed</strong> raw data to conform to assumptions of machine learning algorithm..</li>
                                            {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}
                                        </ul>
                                    </Card.Text>
                                    </div>
                            </Card.Body>
                        </Card>
                    </Tilt>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Experience;
