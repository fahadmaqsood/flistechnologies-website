import React, { useState } from 'react'
import { Modal, Button, Container, Row, Col, Image } from 'react-bootstrap'
import pic1 from '../../imgs/Rectangle 3862.png'
import pic2 from '../../imgs/Group2.png'
import { FaStar } from 'react-icons/fa'

import img1 from '../../imgs/Rectangle 3862.png'
import img2 from '../../imgs/Rectangle 3863.png'
import img3 from '../../imgs/Rectangle 3864.png'
import img4 from '../../imgs/Rectangle 3863.png'
import img5 from '../../imgs/Rectangle 3862.png'
import img6 from '../../imgs/Rectangle 3867.png'
import img7 from '../../imgs/Rectangle 3868.png'
import img8 from '../../imgs/Rectangle 3869.png'
import img9 from '../../imgs/Rectangle 3863.png'
import img10 from '../../imgs/Rectangle 3867.png'
import img11 from '../../imgs/Rectangle 3862.png'
import img12 from '../../imgs/Rectangle 3868.png'
import img13 from '../../imgs/Rectangle 3862.png'
import img14 from '../../imgs/Rectangle 3869.png'
import img15 from '../../imgs/Rectangle 3863.png'
import phone from '../../imgs/phone.png'

import thumb1 from '../../imgs/tumbil.png'
import '../../css/ProjectModel.css'

const projectImages = [
  { id: 1, img: img1, thumbnail: thumb1 },
  { id: 2, img: img2, thumbnail: thumb1 },
  { id: 3, img: img3, thumbnail: thumb1 },
  { id: 4, img: img4, thumbnail: thumb1 },
  { id: 5, img: img5, thumbnail: thumb1 },
  { id: 6, img: img6, thumbnail: thumb1 },
  { id: 7, img: img7, thumbnail: thumb1 },
  { id: 8, img: img8, thumbnail: thumb1 },
  { id: 9, img: img9, thumbnail: thumb1 },
  { id: 10, img: img10, thumbnail: thumb1 },
  { id: 11, img: img11, thumbnail: thumb1 },
  { id: 12, img: img12, thumbnail: thumb1 },
  { id: 13, img: img13, thumbnail: thumb1 },
  { id: 14, img: img14, thumbnail: thumb1 },
  { id: 15, img: img15, thumbnail: thumb1 },
]

function ProjectModal() {
  const [showModal, setShowModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const handleShow = (img) => {
    setSelectedImage(img)
    setShowModal(true)
  }

  const handleClose = () => setShowModal(false)

  return (
    <Container className='projectModel'>
      <div className='headingdiv'>
        <h1 className='text-center Projects-heading'>Projects</h1>
      </div>

      {/* Category Button */}
      <div className='mb-3 cat-btn'>
        <Button variant='primary'>Categories</Button>
      </div>

      {/* Project Images for Desktop */}
      <Row
        className='d-flex align-items-center justify-content-center d-none d-md-flex'
        style={{ marginLeft: '2rem', width: '1300px' }}
      >
        {projectImages.map((project) => (
          <Col md={4} key={project.id} className='mb-4'>
            <img
              src={project.img}
              alt={`Project ${project.id}`}
              className='img-fluid rounded project-img'
              onClick={() => handleShow(project.thumbnail)} // onClick function to show modal for desktop
              style={{ cursor: 'pointer' }}
            />
          </Col>
        ))}
      </Row>

      {/* Project Images for Mobile */}
      <Row className='d-block d-md-none my-4 justify-content-center'>
        <Container className='my-4'>
          {/* Create only 3 rows */}
          {[...Array(3)].map((_, rowIndex) => (
            <Row className='mb-4 justify-content-center' key={rowIndex}>
              {/* Create only 2 columns per row */}
              {[...Array(2)].map((_, colIndex) => (
                <Col
                  md={6}
                  key={colIndex}
                  style={{
                    width: '153.15px',
                    height: '290px',
                    padding: '5px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <div
                    className='p-2 bg-dark text-white rounded'
                    style={{
                      width: '100%',
                      height: '100%',
                      overflow: 'hidden',
                      fontSize: '12px', // Adjust font size
                    }}
                  >
                    {/* Image */}
                    <Image
                      src={pic1} // Replace with your actual image URL
                      alt='Feedback'
                      fluid
                      style={{
                        width: '128px',
                        height: '137.78px', // Adjusted for smaller height
                        objectFit: 'cover',
                      }}
                      className='mb-2'
                      onClick={() => handleShow(pic1)} // onClick function for mobile
                    />

                    {/* Main Heading */}
                    <h6
                      className='text-white mb-1'
                      style={{
                        fontSize: '8.24px',
                        fontWeight: '700',
                        lineHeight: '13.02px ',
                        marginLeft: '2rem',
                      }}
                    >
                      NextGen Trading
                    </h6>

                    {/* Sub Heading */}
                    <small
                      className='mb-2 d-block'
                      style={{
                        marginTop: '0rem',
                        fontSize: '6.91px',
                        fontWeight: '700',
                        lineHeight: '15.84px ',
                      }}
                    >
                      Feed Back
                    </small>

                    {/* Stars */}
                    <div
                      className='mb-2 d-flex'
                      style={{
                        width: '21.99px',
                        height: '3.68px',
                        marginTop: '-0.7rem',
                      }}
                    >
                      <FaStar color='gold' size={12} />
                      <FaStar color='gold' size={12} />
                      <FaStar color='gold' size={12} />
                      <FaStar color='gold' size={12} />
                      <FaStar color='gold' size={12} />
                    </div>

                    {/* Paragraph */}
                    <p
                      style={{
                        fontSize: '5.19px',
                        width: '130.58px',
                        fontWeight: '500',
                      }}
                    >
                      Without any doubt I recommend Flistechnology as one of the
                      best web development and digital marketing agencies. One
                      of the best agencies I’ve came across so far. Wouldn’t be
                      hesitated to introduce their work to someone else.
                    </p>

                    {/* Profile Section */}
                    <div
                      className='d-flex align-items-center'
                      style={{ marginLeft: '-1rem', marginTop: '-0.8rem' }}
                    >
                      {/* Profile Image */}
                      <Image
                        src={pic2} // Replace with your small profile image URL
                        alt='Profile'
                        roundedCircle
                        style={{
                          width: '22px',
                          height: '22px',
                          objectFit: 'cover',
                          marginLeft: '10px',
                        }}
                        className='me-2'
                      />
                      {/* Profile Text */}
                      <div>
                        <small
                          className='d-block'
                          style={{
                            marginLeft: '-6px',
                            width: '19px',
                            height: '4px',
                            fontSize: '3.31px',
                            fontWeight: '700',
                          }}
                        >
                          John Doe
                        </small>
                        <small
                          className='d-block '
                          style={{
                            marginTop: '2px',
                            marginLeft: '-6px',
                            width: '30px',
                            height: '4px',
                            fontSize: '2.58px',
                            fontWeight: '400',
                          }}
                        >
                          Software Engineer
                        </small>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          ))}
        </Container>
      </Row>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} className='modelpage'>
        <Modal.Body style={{ backgroundColor: '#F9F9FF' }}>
          <Container>
            <Row>
              <Col md={4} className='p-0 smallimg'>
                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt='Selected Project'
                    className='img-fluid rounded'
                  />
                )}
              </Col>

              <Col md={8}>
                <div className='d-flex justify-content-between align-items-center p-3'>
                  <h5 className='Projectheading fw-bold'>NextGen Trading</h5>
                  <div style={{ border: '1px solid black' }}>
                    <Button
                      variant='light'
                      onClick={handleClose}
                      className='right-closeButton'
                    >
                      &times;
                    </Button>
                  </div>
                </div>
                <h5 className='text-black'>Project Summary</h5>
                <p style={{ color: '#393939' }}>
                  Discover the NextGen Trading Platform, a cutting-edge solution
                  designed to modernize and streamline trading experiences for
                  both novice and expert traders.
                </p>
                <h5 className='text-black'>Technologies Used</h5>
                <ul style={{ color: '#393939' }}>
                  <li>Frontend: HTML5, CSS3, React.js</li>
                  <li>Backend: Node.js, Python</li>
                  <li>Database: MongoDB</li>
                  <li>Others: REST APIs, WebSocket</li>
                </ul>
                <h5 className='text-black'>Client Feedback</h5>
                <p style={{ color: '#393939' }}>
                  The NextGen Trading Platform has exceeded our expectations in
                  every way.
                </p>
                <h5 className='text-black'>Developed By</h5>
                <p style={{ color: '#393939' }}>Zeeshan Memon(Developer)</p>
                <Button variant='primary' className='mt-3 btns'>
                  <img src={phone} alt='phone' className='me-2' />
                  Text With Us
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </Container>
  )
}

export default ProjectModal
