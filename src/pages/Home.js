import React from 'react'
import { GitHub,LinkedIn,Email } from '@mui/icons-material'
import "./Home.css"

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hii, My Name is Kiran</h2>
        <div className='prompt'>
          <p>A Front-end Web Developer with lots of Energy</p>
          <a href='mailto:kiranm81040@gmail.com'><Email/></a>
          <a href='https://www.linkedin.com/in/kiran-madiwalar-0a38b9238/'><LinkedIn /></a> 
          <a href='https://github.com/KiranKD45'><GitHub/></a>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
          <h2>Front-end</h2>
          <span>ReactJS, JavaScript, Redux, TailwindCSS, Bootstrap, HTML, Material UI, StyleComponents, React Native, NPM, Node</span>
       

          </li>

        </ol>
      </div>
    </div>
  )
}

export default Home