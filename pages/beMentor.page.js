import React, { useState } from 'react'
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('../components/Header'))
const Footer = dynamic(() => import('../components/Footer'))
import axios from 'axios'
// import GoogleSignInButton from './googleSign';

function beMentor() {
  const [formData, setFormData] = useState({
    internAt: '',
    sessionPrice: '',
    agreeToTerms: false,
  })
  const [error, setError] = useState('')
  const [showTerms, setShowTerms] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  
  const handleCheckboxChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.agreeToTerms) {
      setError('You must agree to the Terms and Conditions');
    } else {
      // submit the form data
    }
  };


  return (
    <>
      <Header navbarBackground={true} />
      <main>
        <div className="mentorFormRegisration">
          <div className='formContainer '>
            <form className='mentorFormw' onSubmit={handleSubmit}>
              <h2 className='formTitle'>Intern Application</h2>
              <div className='formGroup'>
                <label htmlFor='internAt'>Intern at</label>
                <input
                  type='text'
                  name='internAt'
                  className='FormInput'
                  onChange={handleChange}
                  placeholder='e.g. ABC Company'
                  required
                  value={formData.internAt}
                />
              </div>
              <div className='formGroup'>
                <label htmlFor='sessionPrice'>Session Price</label>
                <input
                  type='text'
                  name='sessionPrice'
                  className='FormInput'
                  onChange={handleChange}
                  value={formData.sessionPrice}
                  placeholder='e.g. $50'
                />
              </div>
              <div className='formGroup'>
                <label htmlFor='agreeToTerms'>
                  <input
                    type='checkbox'
                    name='agreeToTerms'
                    onChange={handleCheckboxChange}
                    checked={formData.agreeToTerms}
                  />
                  &nbsp;I agree to the&nbsp;
                  <a href='#' onClick={() => setShowTerms(true)}>
                    Terms and Conditions
                  </a>
                </label>
              </div>
              {error && (
                <div className='formError'>{error}</div>
              )}
              <button
                type='submit'
                className='formButton'
              >
                Continue Filling Form
              </button>
              <div className='formOr'>or</div>
              <button
                type='button'
                className='formButton'
                style={{ backgroundColor: '#de5246', color: '#fff' }}
              >
                Sign Up with Google
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
      {showTerms && (
        <div className='termsPopup'>
          <div className='terms'>
      <div className='termsPopupContent'>
      <button className='closeButton' onClick={() => setShowTerms(false)}>
        &times;
      </button>
      <h2 className='popupTitle'>Terms and Conditions</h2>
      <p className='popupText'>
        hello there
      </p>
      <p className='popupText'>
       How are you!
      </p>
      <div className='popupCheckbox'>
        <input
          type='checkbox'
          id='agreeToPopupTerms'
          name='agreeToPopupTerms'
          onChange={() => setShowTerms(false)}
        />
        <label htmlFor='agreeToPopupTerms'>
          I agree to the Terms and Conditions
        </label>
      </div>
    </div>
  </div>
  </div>
  )}
  );
</>
)}

export default beMentor;