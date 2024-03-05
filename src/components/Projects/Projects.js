import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import assistiveTechImg from "../../Assets/Projects/assistiveTechImg.jpeg";
import foodCalorieImg from "../../Assets/Projects/foodCalorieImg.jpeg";
import agriManagementImg from "../../Assets/Projects/agriManagementImg.png";
import toxicityAnalyzerImg from "../../Assets/Projects/toxicityAnalyzerImg.jpeg";




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
      imgPath={assistiveTechImg}   
      isBlog={false}
      title="Assistance Technology"
      description="Developed a machine learning project focused on creating assistive technologies to improve accessibility and communication for individuals who are blind, deaf, and mute."
      ghLink=""
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={foodCalorieImg} 
      isBlog={false}
      title="Food Calorie Detection"
      description="Developed a system for detecting and analyzing food calorie content, aiding users in making informed dietary choices using machine learning."
      ghLink=""
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={agriManagementImg} 
      isBlog={false}
      title="Agriculture Management System"
      description="Developed an Agriculture Management System employing HTML5, CSS3, PHP, and MySQL, with a primary aim to eradicate middlemen in agricultural."
      ghLink=""
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={toxicityAnalyzerImg}  
      isBlog={false}
      title="Toxicity Analyzer on Cosmetics"
      description="Used Machine Learning techniques to create a Toxicity Analyzer for cosmetics, enabling the assessment and prediction of potential harmful ingredients in cosmetic products."
      ghLink=""
    />
  </Col>

  </Row>
      </Container>
    </Container>
  );
}

export default Projects;
