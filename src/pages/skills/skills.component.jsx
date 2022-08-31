import React from 'react'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import './skills.style.css';
import {skills} from './skills.data'


const Skills = () => {
    return (
        <div id='skills'>
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3 ">Tech Skills</h1>
                    <CardDeck>
                        <Row className="d-flex justify-content-around">
                            {/* Frontend */}
                            <Col md={4}>
                                <Card className="focus mt-2 mb-2">
                                    <Card.Body>
                                        {/* Frontend */}
                                        <Card.Title className="text-center  card-title">Frontend</Card.Title>
                                        <hr />
                                        <Card.Text className="card-text d-flex justify-content-start flex-column">
                                            {
                                                skills.frontend.map((skill, index) => (
                                                    <span className="p-2" key={`${skill.skillName}${index}`}>
                                                        <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                            <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                                        </a>
                                                    </span>
                                                ))
                                            }
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            {/* Backend */}
                            <Col md={4}>
                                <Card className="focus mt-2 mb-2">
                                    <Card.Body>
                                        <Card.Title className="text-center  card-title">Backend</Card.Title>
                                        <hr />
                                            <Card.Text className="card-text d-flex justify-content-start flex-column">
                                            {skills.backend.map((skill, index) => (
                                                <span className="p-2" key={index}>
                                                <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                    <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                                </a>
                                                </span>
                                            ))}
                                            </Card.Text>
                                    </Card.Body>
                                </Card>

                                 {/* Database */}
                                <Card className="focus mt-2 mb-2">
                                <Card.Body>
                                    <Card.Title className="text-center  card-title">Database</Card.Title>
                                    <hr />
                                        <Card.Text className="card-text d-flex justify-content-start flex-column">
                                        {skills.database.map((skill, index) => (
                                            <span className="p-2" key={index}>
                                            <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                            </a>
                                            </span>
                                        ))}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                {/* Programming Languages */}
                                    <Card className="focus mt-2 mb-2">
                                        <Card.Body>
                                            <Card.Title className="text-center  card-title">Programming Languages</Card.Title>
                                            <hr />
                                            <Card.Text className="card-text d-flex justify-content-start flex-column">
                                            {skills.programmingLanguages.map((skill, index) => (
                                                <span className="p-2" key={index}>
                                                <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                    <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                                </a>
                                                </span>
                                            ))}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                {/* Machine Learning */}
                                <Col md={4}>
                                    <Card className="focus mt-2 mb-2">
                                        <Card.Body>
                                            {/* Frontend */}
                                            <Card.Title className="text-center  card-title">Frameworks and Libraries</Card.Title>
                                            <hr />
                                            <Card.Text className="card-text d-flex justify-content-start flex-column">
                                                {
                                                    skills.ML.map((skill, index) => (
                                                        <span className="p-2" key={`${skill.skillName}${index}`}>
                                                            <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                                <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                                            </a>
                                                        </span>
                                                    ))
                                                }
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    {/* Other Tools */}
                                    <Card className="focus mt-2 mb-2">
                                        <Card.Body>
                                            {/* Frontend */}
                                            <Card.Title className="text-center  card-title">Other Tools</Card.Title>
                                            <hr />
                                            <Card.Text className="card-text d-flex justify-content-start flex-column">
                                                {
                                                    skills.otherTools.map((skill, index) => (
                                                        <span className="p-2" key={`${skill.skillName}${index}`}>
                                                            <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                                <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                                            </a>
                                                        </span>
                                                    ))
                                                }
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                        </Row>
                    </CardDeck>
            </div>
        </div>
    )
}

export default Skills;
