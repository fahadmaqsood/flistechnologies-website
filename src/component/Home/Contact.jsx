import React from 'react'
import icon1 from '../../imgs/Vector.png'
import icon2 from '../../imgs/Vector (1).png'
import icon3 from '../../imgs/bi_clock-fill.png'
import '../../css/Contact.css'

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='container my-5'>
        <h2 className='text-center mb-4'>Get In Touch With Us</h2>
        <p className='text-center mb-5 top-para'>
          For more information about our products and services, please feel free
          to drop us <br />
          an email. Our staff is always here to help you out. Do not hesitate!
        </p>
        <div className='row'>
          {/* Left Side */}
          <div className='col-md-6 mb-4 address'>
            <div className='mb-4'>
              {' '}
              <img
                src={icon1}
                alt='Address Icon'
                className='me-2'
                style={{ width: '24px', height: '24px' }}
              />
              <h5 className='heading5'>Address</h5>
              <p className='para'>
                123 Street, Qasimabad,
                <br /> <p className='hyd'>Hyderabad</p>
              </p>
            </div>
            <div className='mb-4'>
              <img
                src={icon2}
                alt='Phone Icon'
                className='me-2'
                style={{ width: '24px', height: '24px' }}
              />
              <h5 className='heading5'>Phone</h5>
              <p className='para'>
                Mobile: +92 123 456789
                <br />
                Hotline: +92 123 456789
              </p>
            </div>
            <div className='mb-4'>
              {' '}
              <img
                src={icon3}
                alt='Working Time Icon'
                className='me-2'
                style={{ width: '24px', height: '24px' }}
              />
              <h5 className='heading5'>Working Time</h5>
              <p className='para'>
                Monday-Friday: 9:00 - 22:00
                <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className='col-md-6'>
            <form>
              <div className='mb-3'>
                <label htmlFor='name' className='form-label'>
                  Your Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='name'
                  placeholder='Enter your name'
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                  Email Address
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  placeholder='Enter your email'
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='subject' className='form-label'>
                  Subject
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='subject'
                  placeholder='Enter subject'
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='message' className='form-label'>
                  Message
                </label>
                <textarea
                  className='form-control'
                  id='message'
                  rows='4'
                  placeholder='Enter your message'
                ></textarea>
              </div>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
