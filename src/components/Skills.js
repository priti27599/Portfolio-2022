import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HtmlImg from "../assests/images/html.svg";
import CssImg from "../assests/images/css.svg";
import JsImg from "../assests/images/js.png";
import ReactImg from "../assests/images/react.svg";
import GitImg from "../assests/images/git.png";
import BootstrapImg from "../assests/images/bootstrap.svg";
import ColorSharp from "../assests/images/color-sharp.png";


function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
   
          <section className="skill" id="skills">
            <Container>
           
              <Row>
                <Col>
                  <div className="skill-bx">
                    <h2>Skills</h2>
                    <p></p>
                    <Carousel
                      responsive={responsive}
                      infinite={true}
                      className="skill-slider"
                    >
                      <div className="item">
                        <img src={HtmlImg} alt="Image" />
                        <h5>HTML</h5>
                      </div>
                      <div className="item">
                        <img src={CssImg} alt="Image" />
                        <h5>CSS</h5>
                      </div>
                      <div className="item">
                        <img src={JsImg} alt="Image" />
                        <h5>JavaScript</h5>
                      </div>
                      <div className="item">
                        <img src={ReactImg} alt="Image" />
                        <h5>React.js</h5>
                      </div>
                      {/* <div className='item'>
                    <img src={} alt="Image" />
                    <h5>Next.js</h5>
                </div> */}
                      <div className="item">
                        <img src={GitImg} alt="Image" />
                        <h5>Git</h5>
                      </div>
                      <div className="item">
                        <img src={BootstrapImg} alt="Image" />
                        <h5>Bootstrap</h5>
                      </div>
                      {/* <div className='item'>
                    <img src={} alt="Image" />
                    <h5>Tailwind CSS</h5>
                </div> */}
                    </Carousel>
                  </div>
                </Col>
              </Row>
          
            </Container>
            <img className="background-image-left" src={ColorSharp} />
          </section>
        
  );
}

export default Skills;
