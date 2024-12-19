import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import empathyImg from '../../imgs/Trust.png'
import qualityImg from '../../imgs/Thumbs Up.png'
import transparencyImg from '../../imgs/Opacity.png'
import collaborationImg from '../../imgs/Group Task.png'
import '../../css/CompanyValues.css'

function CompanyValues() {
  return (
    <Container fluid className='text-center my-5 company-container'>
      {/* Top Heading Section */}
      <Row className='values-content'>
        <Col className='mb-4 mt-5 col-values'>
          <h2 className='Culture-heading'>Culture</h2>
          <h3 className='company-heading'>
            Company <span className='company-subheading'>Values</span>
          </h3>
          <div className='company-description'>
            <p>
              As a software solution provider, a company faces a lot of
              challenges on its path to legitimate success. These challenges
              sometimes force organizations to fall prey to malpractices and
              unfair means of business, ultimately damaging their own image and
              upsetting the market environment on the whole as well.
            </p>
          </div>
        </Col>
      </Row>

      {/* Cards Section */}
      <Row className='justify-content-center'>
        {/* Card 1 */}
        <Col md={5} className='mb-4 d-flex justify-content-center'>
          <Card className='custom-card'>
            <div className='card-icon'>
              <img src={empathyImg} alt='Empathy' className='card-image' />
            </div>
            <div className='card-content'>
              <h5 className='card-heading'>Empathy</h5>
              <p className='card-paragraph'>
                We do our best to deliver a productive, pleasant, and respectful
                work environment because providing ease to everyone is our
                purpose
              </p>
            </div>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col md={5} className='mb-4 d-flex justify-content-center'>
          <Card className='custom-card'>
            <div className='card-icon'>
              <img src={qualityImg} alt='Quality' className='card-image' />
            </div>
            <div className='card-content'>
              <h5 className='card-heading'>Quality</h5>
              <p className='card-paragraph'>
                We as a team are never satisfied with the phrase "good enough".
                What we want for our clients can only be great.
              </p>
            </div>
          </Card>
        </Col>
      </Row>

      <Row className='justify-content-center'>
        {/* Card 3 */}
        <Col md={5} className='mb-4 d-flex justify-content-center'>
          <Card className='custom-card'>
            <div className='card-icon'>
              <img
                src={transparencyImg}
                alt='Transparency'
                className='card-image'
              />
            </div>
            <div className='card-content'>
              <h5 className='card-heading'>Transparency</h5>
              <p className='card-paragraph'>
                We work with complete honesty and dedication for our clients
                while keeping all our processes entirely transparent and
                scalable.
              </p>
            </div>
          </Card>
        </Col>

        {/* Card 4 */}
        <Col md={5} className='mb-4 d-flex justify-content-center'>
          <Card className='custom-card'>
            <div className='card-icon'>
              <img
                src={collaborationImg}
                alt='Collaboration'
                className='card-image'
              />
            </div>
            <div className='card-content'>
              <h5 className='card-heading'>Collaboration</h5>
              <p className='card-paragraph'>
                We make sure that our clients stay involved in all development
                stages via end-to-end team collaborations.
              </p>
            </div>
          </Card>
        </Col>
      </Row>
      <div className='halfcircle'></div>
    </Container>
  )
}

export default CompanyValues
