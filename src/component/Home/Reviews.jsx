import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import person1 from "../../imgs/Group2(1).png";
import person2 from "../../imgs/Group2(2).png";
import person3 from "../../imgs/Group2.png";
import person4 from "../../imgs/Group2(3).png";
import person5 from "../../imgs/Group2(4).png";
import comma from "../../imgs/Group.png";
import comma1 from "../../imgs/Group (1).png";
import "../../css/Reviews.css";

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Default active review in the center

  const reviews = [
    { img: person1, name: "Romeena De Silva", position: "Janet Cosmetics" },
    { img: person2, name: "Alex Brown", position: "Digital Marketer" },
    { img: person3, name: "Imran Khan", position: "Software Engineer" },
    { img: person4, name: "Sophia White", position: "Freelancer" },
    { img: person5, name: "John Doe", position: "Entrepreneur" },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Container className="text-center py-md-5 py-sm-4 review-contain ">
      <div className="mb-4 simple-line"></div>

      <div className="customerdiv">
        {/* <h4 className="mb-1 d-none d-lg-block customer-heading">
          Why customers love
        </h4>
        <h2 className="customer-heading d-none d-lg-block">working with us</h2> */}

        <h4 className="customer-heading">
          Why customers love <br /> working with us
        </h4>
      </div>
      <div className="mt-md-5 mb-sm-0 review-container">
        <img src={comma} alt="" className="left-comma" />
        <p className="review-pragh">
          Without any doubt I recommend Flistechnology as one of the best web
          development and digital marketing agencies. One of the best agencies
          I’ve came across so far. Wouldn’t be hesitated to introduce their work
          to someone else.
        </p>
        <img src={comma1} alt="" className="right-comma" />
      </div>

      <div className="carousel-wrapper">
        <div className="Icons prev-icon" onClick={handlePrev}>
          <FaArrowLeft style={{ color: "white", fontSize: "1.5rem" }} />
        </div>
        <Row className="justify-content-center no-gutters">
          {reviews.map((review, index) => (
            <Col
              key={index}
              className={`review-col text-center ${
                index === activeIndex ? "active-review" : "d-none"
              }`}
            >
              <img
                src={review.img}
                alt={`Person ${index + 1}`}
                className={`rounded-circle ${
                  index === activeIndex ? "bright-img" : ""
                }`}
                width={index === activeIndex ? "190" : "140"}
                height={index === activeIndex ? "190" : "140"}
                style={{ objectFit: "none" }}
              />
              <div className="my-2 stats">
                <FaStar color="gold" />
                <FaStar color="gold" />
                <FaStar color="gold" />
                <FaStar color="gold" />
                <FaStar color="gold" />
              </div>
              <p
                className={index === activeIndex ? "highlightedparagraph" : ""}
              >
                {review.name}
              </p>
              <p className={index === activeIndex ? "paragraph" : ""}>
                {review.position}
              </p>
            </Col>
          ))}
        </Row>
        <div className="Icons next-icon" onClick={handleNext}>
          <FaArrowRight style={{ color: "white", fontSize: "1.5rem" }} />
        </div>
      </div>
    </Container>
  );
};

export default Reviews;
