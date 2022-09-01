import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Tilt from 'react-tilt';
import L_SEMUSI from "../../assets/img/experience/semusi_small.png";
import L_APPLORE from "../../assets/img/experience/applore.svg";
import L_6D from "../../assets/img/experience/6degreesit.png";

import "./experience.style.css";

const expr = {
    Work: [
        {   
            jobTitle: "iOS Developer",
            company: "6DegreesIT",
            imgAlt: " 6DegreesIT",
            imgSrc: L_6D,
            technology: "Swift, GraphQL, NodeJS, Xcode Storyboard, UIkit, Foundation, Core Data and Location, Firebase",
            duration: "August 2021 - January 2021",
            description: [
                "Applied Apple’s swift development language with MVC architecture to code native apps for the iOS platform.",
                "Concurrently worked with a team of 7 developers which produced 3 apps ahead of schedule.", 
                "Integrated GraphQL server APIs and NodeJS APIs in collaboration with backend developers to execute data manipulation, hence decreasing the processing load on the front end.",
                "Developed reusable UI components and object classes using Xcode’s Swift, UIkit, Foundation, Core Data, and Location thus reducing the development cost by 20%.", 
                "Collaborated with the team's business analyst and other developers for bug fixes and new features for existing apps with synchronization on BitBucket."
            ]
        },
        {   
            jobTitle: "iOS Developer Intern",
            company: "Applore Technologies",
            imgAlt: "Applore Technologies",
            imgSrc: L_APPLORE,
            technology: "iOS App Development, Xcode Storyboard, Firebase, Cocoapods",
            duration: "March 2021 - May 2021",
            description: [
                "Managed all aspects of the iOS app lifecycle for the app from research and planning through deployment.",
                "Implemented Firebase Authentication for secure login and Cloud Firestore for the database which cut the development cost by 50%.", 
                "Designed the app with Xcode’s storyboard and Autolayout for adaptive user interfaces.", 
                "Researched and selected third-party APIs for integration using Cocoapods."
            ]
        },
        {   
            jobTitle: "Python Developer Intern",
            company: "Semusi",
            imgAlt: "Semusi",
            imgSrc: L_SEMUSI,
            technology: "Machine Learning, Python, Flask",
            duration: "August 2020 - January 2021",
            description: [
                "Built the 92% accurate Machine learning churn prediction model using KNN and Random Forest algorithms with MongoDB and PostGresSQL as the database.",
                "Developed and restructured over 10+ schemas, tables, and views using SQL for data analysis.", 
                "Executed more than 20 SQL queries for data cleaning resulting in an increase in model accuracy by 20%.", 
                "Remained abreast of developments in related Python frameworks and libraries, including flask and scikit-learn."
            ]
        },
        
    ]
};

const Experience = () => {
    return (
        <div id='experience'>
            <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
            <Jumbotron className="jumbo-style">
                {
                    expr.Work.map((exp, index) => (
                        <Container>
                            <Tilt options={{ max: 15 }}>
                                <Card>
                                    <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                        <Card.Img variant="top" className="img-resize" src={exp.imgSrc} alt={exp.imgAlt} />
                                    </Card.Header>
                                    <Card.Body className="d-flex justify-content-center flex-column">
                                        <div>
                                            <Card.Title className="text-center">{exp.jobTitle}, {exp.company}</Card.Title>
                                        </div>
                                        <div>
                                            <Card.Text className="text-center style">
                                                <strong>Technology:</strong> {exp.technology}
                                                <br />
                                                <strong>Duration:</strong> {exp.duration}
                                                <br/>
                                                <strong> Description </strong>
                                                    {
                                                        exp.description.map((item, idx) => (
                                                            <ul className="text-left">
                                                                <li>{item}</li>
                                                                {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}
                                                            </ul> 
                                                        ))
                                                    }           
                                            </Card.Text>
                                            </div>
                                    </Card.Body>
                                </Card>
                            </Tilt>
                            <br/>
                        </Container>
               
                ))
                }
            </Jumbotron>
        </div>
    )
}

export default Experience;
