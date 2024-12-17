import React, { useState } from 'react'
import { Modal, Button, Container, Row, Col } from 'react-bootstrap'

// Import images explicitly
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
      <div className='mb-3'>
        <Button variant='primary'>Categories</Button>
      </div>

      {/* Project Images */}
      <Row
        className='d-flex align-items-center justify-content-center'
        style={{ marginLeft: '2rem', width: '1300px' }}
      >
        {projectImages.map((project) => (
          <Col md={4} key={project.id} className='mb-4'>
            <img
              src={project.img}
              alt={`Project ${project.id}`}
              className='img-fluid rounded project-img '
              onClick={() => handleShow(project.thumbnail)}
              style={{ cursor: 'pointer' }}
            />
          </Col>
        ))}
      </Row>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} className='modelpage'>
        <Modal.Body style={{ backgroundColor: '#F9F9FF' }}>
          <Container>
            <Row>
              {/* Left Side Image starts at the origin */}
              <Col md={4} className='p-0'>
                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt='Selected Project'
                    className='img-fluid rounded'
                  />
                )}
              </Col>

              {/* Right Side Text */}
              <Col md={8}>
                {/* Custom Title Section */}
                <div className='d-flex justify-content-between align-items-center p-3'>
                  <h5
                    className='Projectheading fw-bold'
                    style={{ color: '#000', marginLeft: '15rem' }}
                  >
                    NextGen Trading
                  </h5>
                  <div style={{ border: ' 1px solid black' }}>
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
                  both novice and expert traders. This project was crafted to
                  provide a seamless, intuitive interface, combined with
                  powerful tools to enhance decision-making and trading
                  efficiency.
                </p>
                <h5 className='text-black'>Technologies Used</h5>
                <ul style={{ color: '#393939' }}>
                  <li>Frontend: HTML5, CSS3, React.js</li>
                  <li>Backend: Node.js, Python</li>
                  <li>Database: MongoDB</li>
                  <li>
                    Others: REST APIs, WebSocket for real-time data updates
                  </li>
                </ul>
                <h5 className='text-black'>Client Feedback</h5>
                <p style={{ color: '#393939' }}>
                  The NextGen Trading Platform has exceeded our expectations in
                  every way. The interface is user-friendly, and the integration
                  of real-time data has significantly improved our trading
                  efficiency.
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
