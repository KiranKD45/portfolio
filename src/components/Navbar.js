import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { Link,useLocation } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {

const [expandNavbar, setExpandNavbar]= useState(false);

const location = useLocation();
useEffect(()=>{
  setExpandNavbar(false);
},[location]);

  return (
    <div className="navbar" id={expandNavbar?"open":"close"}>
     <div className='toggleButton'>
    <button onClick={()=>{setExpandNavbar((prev)=> !prev)}}>
<ReorderIcon />
    </button>
     </div>
    
       <div className='links'>
       <Link to="/"><a href='#'>Home</a></Link>
       <Link to="/projects"><a href='#' >Projects</a></Link>
       <Link to="/experience"><a href='#'>Experience</a></Link>
   </div>
   </div>
  )
}

export default Navbar