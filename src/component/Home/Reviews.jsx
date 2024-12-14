import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import person1 from '../../imgs/Group2(1).png'
import person2 from '../../imgs/Group2(2).png'
import person3 from '../../imgs/Group2.png'
import person4 from '../../imgs/Group2(3).png'
import person5 from '../../imgs/Group2(4).png'
import comma from '../../imgs/Group.png'
import comma1 from '../../imgs/Group (1).png'
import '../../css/Reviews.css'

const Reviews = () => {
  return (
    <Container className='text-center py-5'>
      <div className='mb-4 simple-line'></div>

      <h4 className='mb-4'>Why customers love</h4>
      <h2>working with us</h2>
      <div className='mb-5'>
        <img src={comma} alt='' style={{ marginRight: '36rem' }} />
        <p>Without any doubt I recommend Flistechnology as one of the</p>
        <p>best web development and digital marketing agencies. One of</p>
        <p>the best agencies I’ve come across so far. Wouldn’t be</p>
        <p>hesitated to introduce their work to someone else.</p>
        <img src={comma1} alt='' style={{ marginLeft: '35rem' }} />
      </div>

      <Carousel
        interval={null}
        prevIcon={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '50%',
              border: '2px solid white',
              backgroundColor: 'transparent',
              position: 'relative',
              top: '-12rem',
            }}
          >
            <FaArrowLeft style={{ color: 'white', fontSize: '1.5rem' }} />
          </div>
        }
        nextIcon={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '50%',
              border: '2px solid white',
              backgroundColor: 'transparent',
              position: 'relative',
              top: '-12rem',
            }}
          >
            <FaArrowRight style={{ color: 'white', fontSize: '1.5rem' }} />
          </div>
        }
        indicators={false}
        style={{ border: 'none', boxShadow: 'none' }}
      >
        <Carousel.Item className='carousel'>
          <Row className='justify-content-center no-gutters'>
            {[person1, person2, person3, person4, person5].map(
              (person, index) => (
                <Col
                  key={index}
                  md={2}
                  className='review-col text-center' // Add custom class for styling
                >
                  <img
                    src={person}
                    alt={`Person ${index + 1}`}
                    className={`rounded-circle ${
                      index === 2 ? 'large-img' : ''
                    }`} // Add a class for person3
                    width={index === 2 ? '190' : '140'}
                    height={index === 2 ? '190' : '140'}
                    style={{ objectFit: 'cover' }} // Ensures images fit properly
                  />
                  <div className='my-2'>
                    <FaStar color='gold' />
                    <FaStar color='gold' />
                    <FaStar color='gold' />
                    <FaStar color='gold' />
                    <FaStar color='gold' />
                  </div>
                  <p className={index === 2 ? 'highlightedparagraph' : ''}>
                    {index === 2 ? 'Imran Khan' : 'Romeena De Silva'}
                  </p>
                  <p className={index === 2 ? 'paragraph' : ''}>
                    {index === 2 ? 'Software Engineer' : 'Janet Cosmetics'}
                  </p>
                </Col>
              )
            )}
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default Reviews
