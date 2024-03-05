import React from "react";
import { Row, Col } from "react-bootstrap";
import { SiVisualstudiocode, SiGooglecolab } from "react-icons/si";

function TStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab />
      </Col>
      {/* Add more as needed */}
    </Row>
  );
}

export default TStack;
