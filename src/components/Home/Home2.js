import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
        Hey there! I am <i><b className="purple">Jayaa Sri K</b> </i>,
  an IT explorer with a passion for turning ideas into digital magic. Currently mastering the tech universe at 
  <i><b className="purple">Thiagarajar College of Engineering </b> </i>, 
  <br /><br />
  My programming love story began with 
  <i><b className="purple">Java </b> </i>, 
   evolving into a dance with tools like Visual Studio Code and Google Colab. Navigating systems? 
  <i><b className="purple">Windows 10, 11, macOS</b></i> 
  - consider it done!
  <br /><br />
  Crafting web wonders with
  <i><b className="purple"> HTML5, CSS3, </b> </i>
   and diving into databases like 
   <i><b className="purple">SQL and MongoDB Atlas </b> </i>
    is my playground.
  <br /><br />
  Off the digital highway, you will find me sketching and vibing with music.
  <br /><br />
  Join me on this journey of tech, creativity, and endless possibilities!
</p>

            
                     </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/jayaasri/jayaasri"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jayaa-sri-a3999a225"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/jayaasri_kumaran?igsh=YzhrZTMxNmpweGE="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
