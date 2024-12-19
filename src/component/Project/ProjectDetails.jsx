import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import circleImage1 from '../../imgs/Ellipse793.png'
import circleImage2 from '../../imgs/Ellipse794.png'
import '../../css/ProjectDetails.css'

const ProjectDetails = () => {
  return (
    <div className='prjects-details '>
      <Row className='h-100 align-items-center'>
        <Col lg={6} md={6} sm={12} className='project-content mt-5'>
          <h2 className='success-heading'>Our Success Stories</h2>
          <h4 className='success-subheading'>
            Bringing ideas to life through{' '}
            <span style={{ color: '#5550bc' }}>
              innovative software solutions.{' '}
            </span>
          </h4>
          <h4 className='shaping-heading'>
            Take a closer look at the projects that are shaping industries and
            driving results.
          </h4>
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

export default ProjectDetails
