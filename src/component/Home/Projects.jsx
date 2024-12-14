import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import logo1 from '../../imgs/guru.png'
import logo2 from '../../imgs/fiver.png'
import logo3 from '../../imgs/peopleperhour 1.png'
import logo4 from '../../imgs/simplyhired.png'
import logo5 from '../../imgs/Upwork.png'
import logo6 from '../../imgs/freelancer.png'
import proj1 from '../../imgs/Rectangle 40.png'
import proj2 from '../../imgs/Rectangle 41.png'
import proj3 from '../../imgs/Rectangle 42.png'
import proj4 from '../../imgs/Rectangle 43.png'
import proj5 from '../../imgs/Rectangle 44.png'
import proj6 from '../../imgs/Rectangle 45.png'
import proj7 from '../../imgs/Rectangle 46.png'
import proj8 from '../../imgs/Rectangle 47.png'
import proj9 from '../../imgs/Rectangle 48.png'
import '../../css/Project.css'

const Projects = () => {
  return (
    <Container className='project-container'>
      <div className='half-circle'></div>
      <Row className='mb-4 d-flex logoes'>
        <Col sm={2} className='d-flex justify-content-center'>
          <img src={logo1} alt='Logo 1' className='img-fluid logos' />
        </Col>
        <Col sm={2} className='d-flex justify-content-center'>
          <img src={logo2} alt='Logo 2' className='img-fluid logos' />
        </Col>
        <Col sm={2} className='d-flex justify-content-center'>
          <img src={logo3} alt='Logo 3' className='img-fluid logos' />
        </Col>
        <Col sm={2} className='d-flex justify-content-center'>
          <img src={logo4} alt='Logo 4' className='img-fluid logos' />
        </Col>
        <Col sm={2} className='d-flex justify-content-center'>
          <img src={logo5} alt='Logo 5' className='img-fluid logos' />
        </Col>
        <Col sm={2} className='d-flex justify-content-center'>
          <img src={logo6} alt='Logo 6' className='img-fluid logos' />
        </Col>
      </Row>

      {/* Row for "Projects" heading */}
      <Row className='mb-4'>
        <Col className='d-flex justify-content-center'>
          <h3 className='project-heading'>Projects</h3>
        </Col>
      </Row>

      {/* Projects Section */}
      <Row className='align-items-stretch mb-4 project-sec'>
        {/* Left Side: Two rows, two images per row */}
        <Col sm={4} className='d-flex flex-column'>
          <Row>
            <Col sm={6} className='d-flex p-1'>
              <img
                src={proj1}
                alt='Project 1'
                className='img-fluid rounded img-fixed'
              />
            </Col>
            <Col sm={6} className='d-flex p-1'>
              <img
                src={proj2}
                alt='Project 2'
                className='img-fluid rounded img-fixed'
              />
            </Col>
          </Row>
          <Row>
            <Col sm={6} className='d-flex p-1'>
              <img
                src={proj3}
                alt='Project 3'
                className='img-fluid rounded img-fixed'
              />
            </Col>
            <Col sm={6} className='d-flex p-1'>
              <img
                src={proj4}
                alt='Project 4'
                className='img-fluid rounded img-fixed'
              />
            </Col>
          </Row>
        </Col>

        {/* Center: Single Large Image */}
        <Col
          sm={4}
          className='d-flex justify-content-center align-items-center'
        >
          <img src={proj5} alt='Project 5' className='img-fluid img-fixed' />
        </Col>

        {/* Right Side: Two rows, two images per row */}
        <Col sm={4} className='d-flex flex-column'>
          <Row>
            <Col sm={6} className='d-flex p-1'>
              <img
                src={proj6}
                alt='Project 6'
                className='img-fluid rounded img-fixed'
              />
            </Col>
            <Col sm={6} className='d-flex p-1'>
              <img
                src={proj7}
                alt='Project 7'
                className='img-fluid rounded img-fixed'
              />
            </Col>
          </Row>
          <Row>
            <Col sm={6} className='d-flex p-1'>
              <img
                src={proj8}
                alt='Project 8'
                className='img-fluid rounded img-fixed'
              />
            </Col>
            <Col sm={6} className='d-flex p-1'>
              <img
                src={proj9}
                alt='Project 9'
                className='img-fluid rounded img-fixed'
              />
            </Col>
          </Row>
        </Col>
      </Row>

      {/* View More Button */}
      <Row className='mb-4'>
        <Col className='d-flex justify-content-center btn-pj'>
          <Button variant='primary'>View More</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Projects
