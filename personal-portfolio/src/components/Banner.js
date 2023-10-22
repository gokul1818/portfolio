import { useState, useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Application Developer"];

  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      // setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      // setIndex(1);
      setDelta(500);
    } else {
      // setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <a
                    href="https://drive.google.com/file/d/1Dm6YKyBDjxEMqrMwSNBvNz4cOAyIyVkO/view?usp=drivesdk"
                    target="_blank"
                    download="your-resume.pdf"
                  >
                    <span className="tagline">View CV</span>
                  </a>
                  <h1>
                    {`Hi! I'm Gokul`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      // data-rotate='[ "Web Developer", "Web Designer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>

                  {/* <span className="wrap">{desc}</span> */}
                  <p>
                    I am a passionate and enthusiastic frontend developer with a
                    strong foundation in HTML, CSS, JavaScript, Bootstrap, and
                    React. I am eager to contribute my skills and enthusiasm to
                    the creation of dynamic and user-friendly web
                    applications.With a focus on clean and responsive design, I
                    aim to provide exceptional user experiences across all
                    devices. I stay up-to-date with the latest web development
                    trends and technologies, constantly expanding my knowledge
                    to deliver cutting-edge solutions.With the addition of React
                    Native to my skill set, I am capable of developing mobile
                    applications for both iOS and Android platforms using
                    JavaScript. This expands my versatility as a developer and
                    allows me to create seamless cross-platform experiencesI am
                    excited to embark on my journey as a frontend developer and
                    contribute to the ever-evolving world of web and mobile
                    applications. I am confident in my ability to bring
                    creativity, dedication, and a strong work ethic to any
                    project I undertake.
                  </p>

                  <Nav.Link href="#connect">
                    <button>
                      Let’s Connect <ArrowRightCircle size={25} />
                    </button>
                  </Nav.Link>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
