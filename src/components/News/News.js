// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import Particle from "../Particle";
// import NewsCard from "./NewsCards"; // Assuming you have NewsCard component

// function News() {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         const response = await axios.get(
//           "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=46d1a7fbcf014692824e2d86774c6839"
//         );
//         console.log(response.data.articles);
//         const filteredArticles = response.data.articles.map(article => ({
//             title: article.title,
//             imgPath: article.urlToImage,
//             description: article.description ? `${article.description} ${article.content || ''}` : article.content || article.title
//         }));
//           setArticles(filteredArticles);
//       } catch (error) {
//         console.error("Error fetching articles:", error);
//       }
//     };

//     fetchArticles();
//   }, []);

//   return (
//     <Container fluid className="project-section">
//       <Particle />
//       <Container>
//         <h1 className="project-heading">
//           Latest <strong className="purple">News</strong>
//         </h1>
//         <p style={{ color: "white" }}>
//           Here are some of latest news posts.
//         </p>
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//           {articles.map((article, index) => (
//             <Col md={4} className="project-card" key={index}>
//               <NewsCard
//                 imgPath={article.imgPath}
//                 isBlog={false}
//                 title={<span className="purple">{article.title}</span>}
//                 description={article.description}
//               />
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </Container>
//   );
// }

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import Particle from "../Particle";
import NewsCard from "./NewsCards";

function News() {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('technology'); // Default category

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&category=${selectedCategory}&apiKey=46d1a7fbcf014692824e2d86774c6839`
        );
        const filteredArticles = response.data.articles.map(article => ({
            title: article.title,
            imgPath: article.urlToImage,
            description: article.description ? `${article.description} ${article.content || ''}` : article.content || article.title,
            url: article.url
        }));
        setArticles(filteredArticles);
        console.log(filteredArticles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Latest <strong className="purple">News</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of latest news posts.
        </p>
        <DropdownButton title="News Category" onSelect={handleCategoryChange}>
          <Dropdown.Item eventKey="business">Business</Dropdown.Item>
          <Dropdown.Item eventKey="entertainment">Entertainment</Dropdown.Item>
          <Dropdown.Item eventKey="general">General</Dropdown.Item>
          <Dropdown.Item eventKey="health">Health</Dropdown.Item>
          <Dropdown.Item eventKey="science">Science</Dropdown.Item>
          <Dropdown.Item eventKey="sports">Sports</Dropdown.Item>
          <Dropdown.Item eventKey="technology">Technology</Dropdown.Item>
        </DropdownButton>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {articles.map((article, index) => (
            <Col md={4} className="project-card" key={index}>
              <NewsCard
                imgPath={article.imgPath}
                isBlog={false}
                title={<span className="purple">{article.title}</span>}
                description={article.description}
                ghLink={article.url}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default News;
