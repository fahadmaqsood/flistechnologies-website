import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import circleImage1 from '../../imgs/Ellipse793.png'
import circleImage2 from '../../imgs/Ellipse794.png'
import '../../css/MainContainer.css' // Importing the CSS file

const MainContainer = () => {
  return (
    <div className='about-page'>
      <Row className='h-100 align-items-center'>
        <Col lg={6} md={6} sm={12} className='about-content mt-5'>
          <h2 className='about-heading'>About Us</h2>
          <h3 className='about-subheading'>
            We Listen. <span>We Understand.</span>
          </h3>
          <h4 className='about-deliver'>We Deliver.</h4>
        </Col>

        {/* Right Side Empty */}
        <Col lg={6} md={6} sm={12} className='overlap-images'>
          {/* Overlapping Images */}
          <div>
            <img
              src={circleImage2}
              alt='Circle 1'
              className='circle-image circle1'
            />
            <img
              src={circleImage1}
              alt='Circle 2'
              className='circle-image circle2'
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default MainContainer
