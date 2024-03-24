import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";


function BlogCard({ imgPath, title, description }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const shortDescription = description.substring(0, 250) + '...';
  const descriptionToShow = showFullDescription ? description : shortDescription;

  return (
    <Card className={`project-card-view ${showFullDescription ? 'expanded-description' : ''}`}>
      <Card.Img
        className="roject-card-view-img"
        variant="top"
        src={imgPath}
        alt="card-img"
        style={{ opacity: 1, borderRadius: "10px" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className={showFullDescription ? 'expanded-description' : ''} style={{ textAlign: "justify" }}>
          {descriptionToShow}
          {description.length > 250 && (
            <Button
              variant="link"
              onClick={toggleDescription}
              className="warning"
              style={{ marginLeft: "-10px", textDecoration: "none", color: showFullDescription ? 'red' : 'yellow' }}
            >
              {showFullDescription ? "Read Less" : "Read More"}
            </Button>
          )}
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default BlogCard;
