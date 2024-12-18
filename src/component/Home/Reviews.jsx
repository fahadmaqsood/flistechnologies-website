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
    <Container className='text-center py-5 '>
      <div className='mb-4 simple-line'></div>

      <div className='customerdiv'>
        <h4 className='mb-4 customer-heading'>Why customers love</h4>
        <h2 className='customer-heading'>working with us</h2>
      </div>
      <div className='mb-5 review-container'>
        <img src={comma} alt='' className='left-comma' />
        <p className='review-pragh'>
          Without any doubt I recommend Flistechnology as one of the best web
          development and digital marketing agencies. One of the best agencies
          I’ve came across so far. Wouldn’t be hesitated to introduce their work
          to someone else.
        </p>
        <img src={comma1} alt='' className='right-comma' />
      </div>

      <Carousel
        interval={null}
        prevIcon={
          <div className='Icons'>
            <FaArrowLeft style={{ color: 'white', fontSize: '1.5rem' }} />
          </div>
        }
        nextIcon={
          <div className='Icons'>
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
                  <div className='my-2 stats'>
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
