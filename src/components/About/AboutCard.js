import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amar Dutt Upadhyay </span>
            from <span className="purple"> Varanasi, India.</span>
            <br />
            <br /> 
            I have completed my <span className="purple"> Master of Computer Applications (MCA)</span> from  <span className="purple">Galgotia's College of Engineering and Technology</span> Greater Noida. It is a significant accomplishment, and I am proud of my achievement.
            <br />
            With my MCA degree, I have gained a strong foundation in various areas of computer science and applications, including programming, software development, database management, networking, and system analysis. This knowledge will be invaluable in pursuing a career in software engineering, application development, database administration, IT consulting, or research and development. 
            <br />
            With my 1 year experience I am skilled SDE with expertise in Node.js, JavaScript, and MySQL. With 1 years of experience, I have developed a deep understanding of these technologies, enabling me to build robust and scalable applications,  I am a self-starter, quick learner, and problem-solver, with a proven track record of delivering high-quality work in a timely manner.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gathering information about Sci-Fi tech
            </li>
            <li className="about-activity">
              <ImPointRight /> Being Nerd about Technology and VFX
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Skills 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Being young I am eager to learn new Technologies"{" "}
          </p>
          <footer className="blockquote-footer">Amar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
