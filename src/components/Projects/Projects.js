import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import chatApp from "../../Assets/Projects/chatapp.png";
import expense from "../../Assets/Projects/expense.jpg";
import notes from "../../Assets/Projects/notes.jpg";
import todo from "../../Assets/Projects/todo.jpg";


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
              description="MyMaster11 is considered as a “Game of Skill.” The game of skills can be defined as a game wherein the skills of the individuals participating in any online fantasy sports gaming play a dominant role rather than the mere luck of the individuals. The individuals in game of skills use their knowledge, skills, training and attention for participation and winning.
              MyMaster11 is completely legal as it offers services, Fun Features, Program(s) and Contest(s) related to fantasy cricket, fantasy football, fantasy kabaddi, fantasy volleyball, fantasy basketball & fantasy hockey. The services, contest(s) and program(s) related to online fantasy sports gaming offered by MyMaster11 enables its users to create their own team prior the match begins and then the teams are awarded points on the basis of the real-life performance of the players chosen by the users in the team. The individual whose team scores the highest aggregate of points is announced as the winner. The formation of team by the users of MyMaster11 is entirely dependent on the skills, knowledge and attention of the users which makes online fantasy sports gaming offered at MyMaster11 a game of skills and 100% legal."
              ghLink="https://mymaster11.com/"
              demoLink=" https://mymaster11.com/?invite_code=BOND0007 "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sidtech}
              isBlog={false}
              title="Management Information System"
              description={
              <> Our MIS is built on a robust technology stack:{'\n'}
              🟡 Backend/APIs: Leveraging the versatility of Node.js, we have developed a secure and scalable backend to handle the core functionalities of the system. Our APIs provide seamless communication between the database and the user interface, ensuring a smooth user experience.<br/>
              🟡 Frontend: The user interface is developed using React.js, a cutting-edge JavaScript library known for its flexibility and responsiveness. This ensures that our MIS is not only powerful but also user-friendly, offering an intuitive and engaging experience for our users.<br/>
              🟡 Database: We have chosen Microsoft SQL Server (MSSQL) as the database management system to store and manage your data. MSSQL provides a reliable and efficient solution for handling the complexities of your business information.</>}
              ghLink="https://sidtech.vercel.app/"
              demoLink="https://sidtech.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatApp}
              isBlog={false}
              title="Chat Application"
              description={
                <>Chat Application is built using ReactJS and Node.js. My chat application leverages the power of ChatEngine.io to handle real-time messaging and message storage.<br/>
              🟡 ReactJS: The frontend of our application is built using ReactJS, a powerful JavaScript library for building user interfaces. React provides a responsive and dynamic environment for an enhanced user experience.<br/>
              🟡 Node.js: Our backend is powered by Node.js, offering a scalable and efficient server-side environment. Node.js enables seamless communication between the frontend and ChatEngine.io.<br/>
              🟡 ChatEngine.io: The backbone of our chat application, ChatEngine.io handles the complexities of real-time messaging and message storage.</>}
              ghLink="https://github.com/amarupd/real-time-chat-webApp"
              demoLink="https://github.com/amarupd/real-time-chat-webApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notes}
              isBlog={false}
              title="Create Notes"
              description={`User-Friendly Interface: Navigate through your notes with ease using our clean and intuitive design.
              Versatile Note Creation: Create notes in various formats, including text, checklists, images, and more, to suit your diverse note-taking needs.
              Organization and Tags: Keep your notes structured with folders, tags, and categories, making it simple to find the information you need when you need it.
              Sync Across Devices: Access your notes from anywhere with our seamless synchronization across web and mobile platforms.
              Collaboration: Share your notes with collaborators for enhanced teamwork and project coordination.`}
              ghLink="https://github.com/amarupd/ToDoList"
              demoLink="https://todo-list-expensecalculator.vercel.app/note"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="ToDo List"
              description={`Intuitive Interface: Our clean and intuitive design ensures a seamless and enjoyable task management experience.
              Flexible Task Creation: Easily add, edit, and delete tasks to tailor your to-do list to your unique needs.
              Prioritization: Prioritize your tasks with customizable labels, due dates, and importance markers, helping you focus on what matters most.
              Collaboration: Share and collaborate on tasks with friends, family, or colleagues, making teamwork and project management a breeze.
              Reminders and Notifications: Stay on track with timely reminders and notifications, so you never miss an important deadline.`}
              ghLink="https://github.com/amarupd/ToDoList"
              demoLink="https://todo-list-expensecalculator.vercel.app/note"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense Tracker"
              description={`Intuitive Expense Tracking: Easily log your expenses and categorize them for a comprehensive overview of your spending habits.
              Budget Planning: Set personalized budgets for different categories and receive real-time insights into your spending against your financial goals.
              Visual Analytics: Access clear and insightful visualizations, charts, and graphs to understand your financial patterns and make informed decisions.
              Multi-Currency Support: Perfect for travelers or those dealing with multiple currencies, our app supports seamless conversion and tracking.`}
              ghLink="https://github.com/amarupd/ToDoList"
              demoLink="https://todo-list-expensecalculator.vercel.app/expense-tracker"
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
