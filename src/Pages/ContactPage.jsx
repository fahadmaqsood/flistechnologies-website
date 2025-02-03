import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../css/ContactPage.css"; // Custom CSS

// Importing custom icons
import phoneIcon from "../imgs/bxs_phone-call.png";
import emailIcon from "../imgs/ic_sharp-email.png";
import locationIcon from "../imgs/carbon_location-filled.png";
import instagramIcon from "../imgs/Group 1000001750.png";
import twitterIcon from "../imgs/Group 1000001749.png";
import facebookIcon from "../imgs/Group 1000001751.png";
import circleImage1 from "../imgs/Ellipse793.png";
import circleImage2 from "../imgs/Ellipse794.png";

import { useTitle } from "../utils";

const ContactPage = () => {
  useTitle("Contact Us | Flis Technologies");

  return (
    <Container fluid className="p-5 contact-us-section">
      {/* Contact Us Heading */}
      <div className="text-center mb-5 contact-text">
        <h1 className="fw-bold contact-heading" style={{ color: "#000" }}>
          Contact Us
        </h1>
        <p className="contact-para">
          Any question or remarks? Just write us a message!
        </p>
      </div>

      {/* Main Content */}
      <Row className="pagecontact shadow-lg rounded">
        {/* Left Side */}
        <Col md={5} className="p-4 contact-info  text-white position-relative">
          <h3 className="mb-3 mt-4 contact-info-h">Contact Information</h3>
          <p className="contact-info-h">Say something to start a live chat!</p>

          <div className="mb-4 mt-5 data">
            <div className="mb-3 mt-2 icon-text">
              <img src={phoneIcon} alt="Phone" className="me-2 custom-icon" />
              <span className="span">+92 123 456789</span>
            </div>
            <div className="mb-3 mt-2 icon-text">
              <img src={emailIcon} alt="Email" className="me-2 custom-icon" />
              <span className="span">demo@gmail.com</span>
            </div>
            <div className="mb-4 icon-text">
              <img
                src={locationIcon}
                alt="Location"
                className="me-2 custom-icon"
              />
              <span className="span">123Street, Qasimabad,</span>
              <br />
              <span style={{ marginLeft: "2rem" }} className="span">
                {" "}
                Hyderabad
              </span>
            </div>
          </div>

          <div className="diff">
            {/* Social Media Icons */}
            <div className="social-icons d-flex">
              <img
                src={twitterIcon}
                alt="Twitter"
                className="me-4 circle-icon"
              />
              <img
                src={instagramIcon}
                alt="insta"
                className="me-4 circle-icon"
              />
              <img
                src={facebookIcon}
                alt="Facebook"
                className="me-4 circle-icon"
              />
            </div>
            {/* Bottom Right Circle Image */}
            <div className="overlapimages">
              <div>
                <img
                  src={circleImage2}
                  alt="Circle 1"
                  className="circle-image circle1"
                />
                <img
                  src={circleImage1}
                  alt="Circle 2"
                  className="circle-image circle2"
                />
              </div>
            </div>
          </div>
        </Col>

        {/* Right Side Form */}
        <Col md={7} className="p-5 details">
          <Form>
            {/* First and Last Name */}
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="labels" style={{ color: "#8D8D8D" }}>
                    First Name
                  </Form.Label>
                  <div class="input">
                    <input type="text" id="itemInput" placeholder="John" />
                  </div>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="labels">Last Name</Form.Label>
                  <div class="input">
                    <input type="text" id="itemInput" placeholder="Doe" />
                  </div>
                </Form.Group>
              </Col>
            </Row>

            {/* Email and Phone */}
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3 mt-4">
                  <Form.Label className="labels" style={{ color: "#8D8D8D" }}>
                    Email
                  </Form.Label>
                  <div class="input">
                    <input type="email" id="itemInput" placeholder="" />
                  </div>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3 mt-4">
                  <Form.Label className="labels">Phone Number</Form.Label>
                  <div class="input">
                    <input
                      type="number"
                      id="itemInput"
                      placeholder="+92 123 456789"
                    />
                  </div>
                </Form.Group>
              </Col>
            </Row>

            {/* Subject Selection */}
            <Form.Group className="mb-3 mt-4">
              <Form.Label className="fw-bold subject">
                Select Subject?
              </Form.Label>
              <div className="mt-2">
                <Form.Group className="custom-radio-group">
                  <div className="custom-radio">
                    <Form.Check
                      inline
                      label="General Inquiry"
                      name="subject"
                      type="radio"
                      id="subject2"
                      className="checks"
                    />
                  </div>
                  <div className="custom-radio">
                    <Form.Check
                      inline
                      label="General Inquiry"
                      name="subject"
                      type="radio"
                      id="subject3"
                      className="checks"
                    />
                  </div>
                  <div className="custom-radio">
                    <Form.Check
                      inline
                      label="General Inquiry"
                      name="subject"
                      type="radio"
                      id="subject4"
                      className="checks"
                    />
                  </div>
                  <div className="custom-radio">
                    <Form.Check
                      inline
                      label="General Inquiry"
                      name="subject"
                      type="radio"
                      id="subject5"
                      className="checks"
                    />
                  </div>
                </Form.Group>
              </div>
            </Form.Group>

            {/* Message */}
            <Form.Group className="mb-4 mt-5">
              <Form.Label className="labels" style={{ color: "#8D8D8D" }}>
                Message
              </Form.Label>
              <div class="textarea">
                <input
                  type="text"
                  id="itemInput"
                  placeholder="Write your message.."
                />
              </div>
            </Form.Group>

            {/* Submit Button */}
            <button className="px-4 py-2 mt-4 send-btn ">Send Message</button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
