import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
      <div className='hero'>
        <img src='../img/aman-garg-ysntrXHEvKA-unsplash.jpg' alt='hero' />
        <div className='hero-content'>
          <h3>Get Some Fresh Air</h3>
          <p>Take a walk in nature and get some fresh air and take in the beauty of the scenery.
              Many desktop publishing packages and web page editors now use Lorem Ipsum as their
              default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
          </p>
          <button>Get Info</button>
          <button className='special'>Reserve My Spot</button>
        </div>
      </div>
    </>
  )
}

export default Hero
