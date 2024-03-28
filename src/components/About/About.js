// import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import laptopImg from "../../Assets/certificates_image/certificate1.jpg";
// import Particle from "../Particle";
// import Aboutcard from "./AboutCard";
// import Github from "./Github";
// import Techstack from "./Techstack";
// import Toolstack from "./Toolstack";

// function About() {
//   return (
//     <Container fluid className="about-section">
//       <Particle />
//       <Container>
//         <Row style={{ justifyContent: "center", padding: "10px" }}>
//           <Col
//             md={7}
//             style={{
//               justifyContent: "center",
//               paddingTop: "30px",
//               paddingBottom: "50px",
//             }}
//           >
//             <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
//               Know Who <strong className="purple">I'M</strong>
//             </h1>
//             <Aboutcard />
//           </Col>
//           <Col
//             md={5}
//             style={{ paddingTop: "120px", paddingBottom: "50px" }}
//             className="about-img"
//           >
//             <img src={laptopImg} alt="about" className="img-fluid" />
//           </Col>
//         </Row>
//         <h1 className="project-heading">
//           Professional <strong className="purple">Skillset </strong>
//         </h1>

//         <Techstack />

//         <h1 className="project-heading">
//           <strong className="purple">Tools</strong> I use
//         </h1>
//         <Toolstack />

//         <Github />
//       </Container>
//     </Container>
//   );
// }

// export default About;

import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import laptopImg1 from "../../Assets/certificates_image/certificate1.jpg";
import laptopImg10 from "../../Assets/certificates_image/certificate10.jpg";
import laptopImg11 from "../../Assets/certificates_image/certificate11.jpg";
import laptopImg2 from "../../Assets/certificates_image/certificate2.jpg";
import laptopImg3 from "../../Assets/certificates_image/certificate3.jpg";
import laptopImg4 from "../../Assets/certificates_image/certificate4.jpg";
import laptopImg5 from "../../Assets/certificates_image/certificate5.jpg";
import laptopImg6 from "../../Assets/certificates_image/certificate6.jpg";
import laptopImg7 from "../../Assets/certificates_image/certificate7.jpg";
import laptopImg8 from "../../Assets/certificates_image/certificate8.jpg";
import laptopImg9 from "../../Assets/certificates_image/certificate9.jpg";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} style={{ marginTop: "20px" }}>
          <h1 style={{ fontSize: "2.1em", paddingBottom: "50px" }}><strong className="purple">Certificates</strong>
            </h1>
            <Carousel>
              <Carousel.Item>
                <img src={laptopImg1} className="img-fluid" alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={laptopImg2} className="img-fluid" alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={laptopImg3} className="img-fluid" alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={laptopImg4} className="img-fluid" alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={laptopImg5} className="img-fluid" alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={laptopImg6} className="img-fluid" alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={laptopImg7} className="img-fluid" alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={laptopImg8} className="img-fluid" alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={laptopImg9} className="img-fluid" alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={laptopImg10} className="img-fluid" alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={laptopImg11} className="img-fluid" alt="Second slide" />
              </Carousel.Item>
              {/* Add more Carousel.Items for additional images */}
            </Carousel>
            <style>{`
  .carousel-control-next,
  .carousel-control-prev {
    position: absolute; /* Position absolute for overlay */
    top: 50%; /* Position the button vertically in the middle */
    transform: translateY(-50%); /* Adjust to vertically center the button */
    border: 2px solid transparent; /* Add border */
    width: 35px; /* Set width of the button */
    height: 35px; /* Set height of the button */
    padding: 0; /* Remove padding */
    border-radius: 5px; /* Add border radius for rounded corners */
    z-index: 1; /* Ensure the button is above the image */
  }

  .carousel-control-next::after,
  .carousel-control-prev::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(128, 128, 128, 0.5); /* Set background color as transparent grey */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Add shadow */
    border-radius: inherit; /* Inherit border radius from parent */
    z-index: -1; /* Move pseudo-element behind the button */
  }

  .carousel-control-next-icon,
  .carousel-control-prev-icon {
    filter: grayscale(70%) opacity(0.5); /* Apply grayscale and opacity */
  }
`}</style>


          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        <Github />
      </Container>
    </Container>
  );
}

export default About;
