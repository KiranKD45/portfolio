import React from 'react'
import "./Footer.css"
import { Instagram, Facebook, GitHub, LinkedIn } from '@mui/icons-material'

function Footer() {
  return (
    <div className='footer'>
   <div className='socialMedia'>
   <a href='https://www.linkedin.com/in/kiran-madiwalar-0a38b9238/'><LinkedIn /></a>
 <a href='https://www.instagram.com/kiran_m_45/?__coig_restricted=1'><Instagram /></a> 
 <a href='https://www.facebook.com/kiranm.sanjeev'><Facebook /></a>
 <a href='https://github.com/KiranKD45'><GitHub/></a>
 

   </div>
   <p> &copy; 2023 KiranKD.com </p>
    </div>
  )
}

export default Footer