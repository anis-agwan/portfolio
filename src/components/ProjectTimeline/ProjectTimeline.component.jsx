import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent, themes, createTheme  } from "@merc/react-timeline";
import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import "./ProjectTimeline.style.css";

// projects
import L_FaceGen from "../../assets/img/Projects/face_gen.webp";


// images
import L_PYTHON from '../../assets/img/skills/python.svg';
import L_DL from '../../assets/img/skills/deep-learning.svg';
import L_Pytorch from '../../assets/img/skills/PyTorch.svg';
import L_JUPYTER from '../../assets/img/skills/jupyter.svg';


const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: '#fff',
  },
  date: {
    backgroundColor: '#212121',
  },
  marker: {
    borderRadius: '4px',
    borderColor: '#212121',
    borderWidth: '3px',
    transform: 'rotate(45deg)',
    backgroundColor: '#fff',
  },
  timelineTrack: {
    backgroundColor: '#212121',
  },
  urlButton: {
    backgroundColor: '#212121',
  },
  imageText: {
      fontSize: "2rem",
  }
});

const ProjectTimeline = () => {
    return (
        <div id='projects'>
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <Timeline theme={customTheme}>
                <Events>
                    {/* Project: Face generation using GANs */}
                        <ImageEvent
                            date="01/10/2020"
                            className="text-center"
                            text="Face Generator using GANs"
                            src={L_FaceGen}
                            alt="Face Generator using GANs"
                        >
                            <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                <Card>
                                    <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="0"
                                    className="p-2 text-center accordian-main"
                                    >
                                    PROJECT DETAILS
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="0" className="text-left">
                                    <Card.Body>
                                        <strong>Description:</strong> Define and train a DC Generative Adversarial Networks on a dataset of faces. Goal is to get a generator network to generate new images of faces that look as realistic as possible!
                                        <hr />
                                        <strong>Features:</strong>
                                        <ul className="list-styles pt-1">
                                        <li>Building GANS to generate fake faces</li>
                                        <li>CelebFaces Attributes dataset to train the adversarial networks. </li>
                                        <li>Building two adversarial networks, a discriminator and a generator, using the PyTorch framework.</li>
                                        </ul>
                                        <hr />
                                        <strong>Tech used:</strong>
                                            <ul>
                                                <li>
                                                    <span className="p-2">
                                                    <Image
                                                        src={L_PYTHON}
                                                        alt="Python3"
                                                        rounded
                                                        className="image-style m-1"
                                                    ></Image>{" "}
                                                    Python
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="p-2">
                                                    <Image
                                                        src={L_DL}
                                                        alt="Deep Learning"
                                                        rounded
                                                        className="image-style m-1"
                                                    ></Image>{" "}
                                                    Deep Learning
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="p-2">
                                                    <Image
                                                        src={L_Pytorch}
                                                        alt="PyTorch"
                                                        rounded
                                                        className="image-style m-1"
                                                    ></Image>{" "}
                                                    PyTorch
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="p-2">
                                                    <Image
                                                        src={L_JUPYTER}
                                                        alt="Jupyter"
                                                        rounded
                                                        className="image-style m-1"
                                                    ></Image>{" "}
                                                    Jupyter Notebook
                                                    </span>
                                                </li>
                                                
                                                </ul>
                                        
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                href="https://github.com/anis-agwan/Face-Generation"
                                target="_blank"
                                >
                                Git Source Code
                                </UrlButton>
                            </div>
                            </div>
                        </ImageEvent>
                </Events>
            </Timeline>
        </div>
    )
}

export default ProjectTimeline;
