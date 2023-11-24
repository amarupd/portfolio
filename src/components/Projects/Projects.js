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
              title={<span className="purple">MyMaster11</span>}
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
              title={<span className="purple">Management Information System</span>}
              description={
              `Our Management Information System (MIS) is built on a robust technology stack. The backend and APIs leverage Node.js for security and scalability, ensuring core functionalities. The user interface is developed with React.js, known for flexibility and responsiveness, providing a powerful and user-friendly experience. Microsoft SQL Server (MSSQL) serves as the database management system, offering reliability and efficiency for storing and managing business data. Together, these components form a cohesive and effective foundation for our comprehensive MIS.`}
              ghLink="https://sidtech.vercel.app/"
              demoLink="https://sidtech.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatApp}
              isBlog={false}
              title={<span className="purple">Chat Application</span>}
              description={
                `Our comprehensive Chat Application is meticulously constructed with a combination of ReactJS for the frontend and Node.js for the backend. The frontend, powered by ReactJS, stands out for its dynamic and responsive user interface, creating an engaging and immersive experience. On the backend, Node.js ensures scalability and efficiency, facilitating smooth communication between the frontend and the robust ChatEngine.io.
                At the core of our application, ChatEngine.io plays a pivotal role in handling the intricacies of real-time messaging and message storage. Its capabilities contribute significantly to the overall efficiency and reliability of our chat platform, providing users with a seamless and enjoyable communication experience. Together, these technologies synergize to create a powerful, user-friendly, and feature-rich chat application.`}
              ghLink="https://github.com/amarupd/real-time-chat-webApp"
              demoLink="https://github.com/amarupd/real-time-chat-webApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notes}
              isBlog={false}
              title={<span className="purple">Create Notes</span>}
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
              title={<span className="purple">ToDo List</span>}
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
              title={<span className="purple">Expense Tracker</span>}
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
              title={<span className="purple">WeatherApp</span>}
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
              title={<span className="purple">Scramble Game</span>}
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
