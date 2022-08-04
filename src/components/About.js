import React from "react";
import { Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import TrackVisibility from "react-on-screen";

function About() {
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <motion.h2 animate={{ fontSize: 70 }}>About</motion.h2>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__fadeIn" : ""}
              >
                <p>
                  I'm a Frontend Developer located in India. I love to create
                  simple yet beautiful websites with great user experience.
                  <br />
                  <br /> I'm interested in the whole frontend stack Like trying
                  new things and building great projects. <br />
                  <br /> I believe everything is an Art when you put your
                  consciousness in it. You can connect with me via social links.
                </p>
              </div>
            )}
          </TrackVisibility>
        </Row>
      </Container>
    </section>
  );
}

export default About;
