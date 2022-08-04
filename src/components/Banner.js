import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CV from '../assests/cv.pdf';
import BannerImg from '../assests/images/banner2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDelecting, setIsDeleting] = useState(false);
  const toRotate = [
    'FRONTEND DEVELOPER',
    'WEB DESIGNER',
    'UI/UX DESIGNER',
  ];
  const [text, setText] = useState('');
  const [index, setIndex] = useState(1);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDelecting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDelecting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDelecting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDelecting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
            {({ isVisible}) =>
            <div className={isVisible ? "animate__animated animate__zoomIn":""}>
            <img src={BannerImg} alt="Header Img" />
            </div> }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={7} className="box">
            <TrackVisibility>
            {({ isVisible}) =>
            <div className={isVisible ? "animate__animated animate__fadeIn":""}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi, I'm a `}
              <span
                className="txt-rotate"
                dataPeriod="1000"
                data-rotate='["FRONTEND DEVELOPER","WEB DESIGNER", "UI/UX DESIGNER"]'
              >
                <span className="wrap">{text}</span>
              </span>
            </h1>
            <p>I Love to Work on Frontend Web Development Projects.</p>
            <button>
              <a href={CV} download>
                Download CV
              </a>
            </button>
              </div> }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;