import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import chatApp from "../../Assets/Projects/chatapp.png";
import hubnex from "../../Assets/Projects/mymaster11.png";
import QUEUES from "../../Assets/Projects/scramble.png";
import sidtech from "../../Assets/Projects/sidtech.png";
import pooja from "../../Assets/Projects/weather.png";

import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sidtech}
              isBlog={false}
              title="Management Information System"
              description={`Our MIS is built on a robust technology stack:\n
              🟡 Backend/APIs: Leveraging the versatility of Node.js, we have developed a secure and scalable backend to handle the core functionalities of the system. Our APIs provide seamless communication between the database and the user interface, ensuring a smooth user experience.\n
              🟡 Frontend/UI: The user interface is developed using React.js, a cutting-edge JavaScript library known for its flexibility and responsiveness. This ensures that our MIS is not only powerful but also user-friendly, offering an intuitive and engaging experience for our users.\n
              🟡 Database: We have chosen Microsoft SQL Server (MSSQL) as the database management system to store and manage your data. MSSQL provides a reliable and efficient solution for handling the complexities of your business information.`}
              ghLink="https://sidtech.vercel.app/"
              demoLink="https://sidtech.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatApp}
              isBlog={false}
              title="Chat Application"
              description={`Welcome to our Chat Application, a modern and efficient platform for real-time communication, built using ReactJS and Node.js. Our chat application leverages the power of ChatEngine.io to handle real-time messaging and message storage, providing a seamless and interactive chatting experience.\n
              🟡 ReactJS: The frontend of our application is built using ReactJS, a powerful JavaScript library for building user interfaces. React provides a responsive and dynamic environment for an enhanced user experience.
              🟡 Node.js: Our backend is powered by Node.js, offering a scalable and efficient server-side environment. Node.js enables seamless communication between the frontend and ChatEngine.io.
              🟡 ChatEngine.io: The backbone of our chat application, ChatEngine.io handles the complexities of real-time messaging and message storage. It ensures a reliable and secure communication platform.`}
              ghLink="https://github.com/amarupd/real-time-chat-webApp"
              demoLink="https://github.com/amarupd/real-time-chat-webApp"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pooja}
              isBlog={false}
              title="WeatherApp"
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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
