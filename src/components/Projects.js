import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import Project1 from "../assests/images/p1.PNG";
import Project2 from "../assests/images/p2.JPG";
import Project3 from "../assests/images/p3.JPG";
import Project4 from "../assests/images/p4.JPG";
import ProjectCard from "./ProjectCard";
import colorSharp2 from '../assests/images/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Animator, ScrollContainer, ScrollPage } from "react-scroll-motion";

function Projects() {
  const projects = [
    {
      title: "Youtube-Clone",
      description: "Used React.js, CSS and Firebase",
      image:Project1,
      url: "https://clone-12e9a.web.app/",
    },
    {
      title: "Netflix-Clone",
      description: "Used React.js, CSS and Firebase",
      image: Project2 ,
      url: "https://netflix-clone-e0c3b.web.app/",
    },
    {
      title: "Calculator",
      description: "Used React.js, CSS and Firebase",
      image: Project3,
      url: "https://calculator-feb7b.web.app/",
    },
    {
      title: "Covid-Tracker",
      description: "Used React.js, CSS and Firebase",
      image:  Project4,
      url: "https://covid-19-tracker-702c5.web.app/",
    },
  ];
  return (
    <section className="project" id="projects">
      <ScrollContainer>
      <Container>
        <Row>
          <Col size={12}>
          <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__zoomIn": ""}>
          
            <h2>Projects</h2>
            
           
            <p></p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content className="row1">
                <Tab.Pane eventKey="first">
                    <Row  >
                        {
                            projects.map((project, index)=>{
                                return(
                                    
                                   <ProjectCard 
                                     key={index}
                                     {...project}
                                    
                                   />
                                
                                )
                            })
                        }
                    </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
            
            </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""/>

      </ScrollContainer>
    </section>
  );
}

export default Projects;
