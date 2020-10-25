import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return (
    <nav>
      <h2><Link to='/'>Nature Walk</Link></h2>
      <ul className='nav-list'>
        <li><Link className='active' to='#about'>About</Link></li>
        <li><Link to='#services'>Services</Link></li>
        <li><Link to='#testimonies'>Testimonies</Link></li>
        <li><Link className='blog' to='/blog'>Blog</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation
