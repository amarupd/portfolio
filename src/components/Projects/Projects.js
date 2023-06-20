import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pooja from "../../Assets/Projects/weather.png";
import QUEUES from "../../Assets/Projects/scramble.png";
import hubnex from "../../Assets/Projects/mymaster11.png";
// import foodorder from "../../Assets/Projects/food-order.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pooja}
              isBlog={false}
              title="WeatherApp Project"
              description="Real-time Weather Updates: MyWeatherApp offers real-time weather updates, 
              including temperature, humidity, wind speed, precipitation, and more. 
              Users can view current weather conditions and get hourly, daily, and extended forecasts.
              Customizable Locations: Users can add and save multiple locations to track weather 
              conditions in different areas. MyWeatherApp provides weather forecasts for locations worldwide, 
              allowing users to stay informed about the weather in their desired locations."
              ghLink="https://github.com/amarupd/weatherapp"
              demoLink="https://youtu.be/J9rzf2QzBtw"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QUEUES}
              isBlog={false}
              title="Scramble Game"
              description="Scramble offers a fun and addictive gameplay experience. Players are typically given a time limit to create as many words as possible from a given set of letters. The longer and more complex the words formed, the higher the score. It requires quick thinking and a strong command of vocabulary to succeed.
              The game often provides a grid or a list of all possible words that can be formed from the given set of letters. This helps players keep track of their progress and discover words they might have missed. Additionally, some versions of Scramble offer power-ups or bonuses that can be used to gain advantages, such as extra time or hints."
              ghLink="https://github.com/amarupd/scramble-game"
              demoLink="https://youtu.be/30A6Wd8515A"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hubnex}
              isBlog={false}
              title="MyMaster11"
              description="MyMaster11 is India's fastest-growing fantasy sports platform with 1million+ users playing fantasy cricket, basketball,football,kabaddi & baseball
              Managing backend using Nodejs Expressjs and sequelize with MYSQL
              Creating API's for interaction with the frontend GUI
              Working with the team"
              ghLink="https://mymaster11.com/"
              demoLink=" https://mymaster11.com/?invite_code=BOND0007 "
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
