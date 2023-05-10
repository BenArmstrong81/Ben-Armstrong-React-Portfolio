import React from 'react'
import { SocialIcon } from 'react-social-icons';


function footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
      <SocialIcon className='linkin' url="https://www.linkedin.com/in/benjaminarmstrong1" /> 
      <SocialIcon url="https://github.com/BenArmstrong81" />
      </div>
      <p>&copy; 2023 Benjamin Armstrong - Thanks for visiting 💖</p>
      <em>"There is no passion to be found playing small, in settling for a life that is less than one you are capable of living"</em> - Nelson Mandela.
    </div>
    
  )
}

export default footer