import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const shortDescription = props.description.substring(0, 250) + '...';
  const descriptionToShow = showFullDescription ? props.description : shortDescription;

  return (
    <Card className={`project-card-view ${showFullDescription ? 'expanded-description' : ''}`}>
      <Card.Img
        className="project-card-view-img"
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{ opacity: 1, borderRadius: "10px" }}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className={showFullDescription ? 'expanded-description' : ''} style={{ textAlign: "justify" }}>
          {descriptionToShow}
          {props.description.length > 250 && (
            <Button
              variant="link"
              onClick={toggleDescription}
              className="warning"
              style={{ marginLeft: "-10px", textDecoration: "none" ,color: showFullDescription ? 'yellow' : 'yellow',}}
            >
              {showFullDescription ? "Read Less" : "Read More"}
            </Button>
          )}
        </Card.Text>

        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
