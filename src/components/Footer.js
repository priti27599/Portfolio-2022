import React from "react";
import { Container, Navbar, Brand, Row, Col } from "react-bootstrap";
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <div href="#home" className="logo">PRITI KUMARI</div>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon1">
              <a href="https://github.com/priti27599">
                <AiFillGithub className="icon1" />
              </a>
              <a href="https://www.linkedin.com/in/priti-kumari-33b2021b4/">
                <AiFillLinkedin className="icon1" />
              </a>
            </div>
            <p>CopyRight 2022. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
