import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Home.css';
import headerImage from '../assets/banner.png';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Volunteers", "Tutors", "Tutees"];
  const period = 2000;
  const variants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.9,
      transition: { duration: 0.3 }
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImage} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>{`Hi! We are `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Volunteers", "Tutors", "Tutees" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Earn School Credits for becoming a tutor</p>
                  <div className="button-group">
                    <Link to="/" element={<Home />}>
                      <motion.button
                        className="join-button"
                        whileHover="hover"
                        whileTap="tap"
                        variants={variants}
                      >
                        Become a Tutor <ArrowRightCircle size={25} />
                      </motion.button>
                    </Link>
                    <Link to="/" element={<Home />}>
                      <motion.button
                        className="join-button"
                        whileHover="hover"
                        whileTap="tap"
                        variants={variants}
                      >
                        Become a Tutee <ArrowRightCircle size={25} />
                      </motion.button>
                    </Link>
                  </div>
                  <p>
                    High school students often face challenges in understanding certain subjects or topics. To address this, we aim to develop a peer tutoring network that connects high school students who require academic assistance with their peers who excel in specific subjects. The network will provide a platform for students to schedule virtual tutoring sessions and seek guidance from knowledgeable peers.
                    The system should allow students to register as tutors or tutees. Tutors can specify their areas of expertise, availability, and set tutoring rates if desired. Tutees can search for tutors based on subjects, view tutor profiles with ratings and reviews, and book tutoring sessions that fit their schedules.
                  </p>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>


  )
}

export default Home;
