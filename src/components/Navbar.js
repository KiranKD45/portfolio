import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div className='Navbar-links'>
            <Link to="/"><p>Home</p></Link>
            <Link to="/projects"><p>Projects</p></Link>
            <Link to="/experience"><p>Experience</p></Link>
        </div>
    </div>
  )
}

export default Navbar