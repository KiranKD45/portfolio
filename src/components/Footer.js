import React from 'react'
import "./Footer.css"
import { Instagram, Facebook, GitHub, LinkedIn } from '@mui/icons-material'

function Footer() {
  return (
    <div className='footer'>
   <div className='socialMedia'>
<Instagram />
<Facebook />
<GitHub/>
<LinkedIn />

   </div>
   <p> &copy; 2023 KiranKD.com </p>
    </div>
  )
}

export default Footer