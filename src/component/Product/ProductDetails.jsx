import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import circleImage1 from '../../imgs/Ellipse793.png'
import circleImage2 from '../../imgs/Ellipse794.png'
import '../../css/ProductDetails.css'

const ProductDetails = () => {
  return (
    <div className='products-details'>
      <Row className='h-100 align-items-center'>
        <Col lg={6} md={6} sm={12} className='product-content mt-5'>
          <h2 className='business-heading' style={{}}>
            innovative Solutions for Your Business Success
          </h2>
          <h3 className='industries-subheading'>
            Discover how our{' '}
            <span style={{ color: '#5550bc' }}>
              products are shaping industries
            </span>{' '}
            and driving results.
          </h3>
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

export default ProductDetails
