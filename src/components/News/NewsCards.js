import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { BsFillCursorFill } from "react-icons/bs";
import defaultImage from "../../Assets/default.png"; // Import default image

function NewsCard({ imgPath, title, description, ghLink }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleImageError = (event) => {
    // Handle image loading errors by setting a default image
    event.target.src = defaultImage;
  };

  const shortDescription = description ? (description.substring(0, 250) + '...') : '';
  const descriptionToShow = showFullDescription ? description : shortDescription;

  return (
    <Card className={`project-card-view ${showFullDescription ? 'expanded-description' : ''}`}>
      <Card.Img
        className="roject-card-view-img"
        variant="top"
        src={imgPath || defaultImage} // Use default image if imgPath is null
        onError={handleImageError} // Handle image loading errors
        alt="card-img"
        style={{ opacity: 1, borderRadius: "10px" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className={showFullDescription ? 'expanded-description' : ''} style={{ textAlign: "justify" }}>
          {descriptionToShow}
          {description && description.length > 250 && (
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
        <Button variant="primary" href={ghLink} target="_blank">
          <BsFillCursorFill   /> &nbsp;
          {ghLink ? "Read More" : "Read More"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default NewsCard;
