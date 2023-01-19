import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  let myStyle = {
    minHeight: "100vh",
    margin: "40px auto",
  };
  return (
    <div style={myStyle}>
      <Container>
        <Row>
          <Col className="bg-light text-center">
            <h1 className="display-4">About</h1>
            <p className="lead">
              This is a professional and feature-rich Todo app built with React
              and React Bootstrap.
            </p>
            <hr className="my-4" />
            <p>The app offers the following features:</p>
            <ul>
              <li>Task management with ability to add and delete tasks</li>
            </ul>
            <p>
              The app is built with modern web technologies and follows best
              practices for performance and accessibility.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
