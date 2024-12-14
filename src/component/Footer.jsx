import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import fab from '../imgs/Group 5.png'
import insta from '../imgs/Group 9.png'
import tiw from '../imgs/Group 10.png'
import lin from '../imgs/Group 11.png'
import '../css/Footer.css'

function Footer() {
  return (
    <div className='text-white pt-5 pb-2 footer'>
      <div className='container mt-5'>
        <div className='row text-center text-md-start'>
          {/* First Column */}
          <div className='col-md-4 mb-3'>
            <h5>flistechnologies</h5>
            <p className='fot-para' style={{ color: '#CBD5E0' }}>
              At flistechnologies, we deliver innovative software solutions that
              transform businesses and elevate user experiences.
            </p>
            {/* Social Icons */}
            <div className='d-flex justify-content-center justify-content-md-start'>
              <img src={fab} alt='icon1' className='mx-0' width='60px' />
              <img src={insta} alt='icon2' className='mx-0' width='60px' />
              <img src={tiw} alt='icon3' className='mx-0' width='60px' />
              <img src={lin} alt='icon4' className='mx-0' width='60px' />
            </div>
          </div>

          {/* Second Column */}
          <div className='col-md-4 mb-3 '>
            <h5 style={{ textAlign: 'center' }}>Links</h5>
            <p className='fot-para' style={{ color: '#CBD5E0' }}>
              <a
                href='#about'
                className='text-decoration-none text-white d-block footer-link'
              >
                About Us
              </a>
              <a
                href='#projects'
                className='text-decoration-none text-white d-block footer-link'
              >
                Projects
              </a>
              <a
                href='#about'
                className='text-decoration-none text-white d-block footer-link'
              >
                About Us
              </a>
              <a
                href='#contact'
                className='text-decoration-none text-white d-block footer-link'
              >
                Contact
              </a>
            </p>
          </div>

          {/* Third Column */}
          <div className='col-md-4 mb-3'>
            <h5 className='fw-bold'>Contact Us</h5>
            <p className='fot-para' style={{ color: '#CBD5E0' }}>
              Whether you have a question about features, pricing, or anything
              else, our team is ready to answer all your questions.
              <br />
              +92 123 456789
            </p>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className='hor' />

        {/* Copyright */}
        <div className='text-center' style={{ color: '#D9D9D9' }}>
          <p>© 2024 Copyright by Flistechnologies. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
