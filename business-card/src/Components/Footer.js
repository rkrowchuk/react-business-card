import React from 'react';
import {FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaGithubSquare} from "react-icons/fa";

export default function Footer() {
  return (
    <div className='footer'>
      <FaTwitterSquare className='icon'/>
      <FaFacebookSquare className='icon'/>
      <FaInstagramSquare className='icon'/>
      <FaLinkedin className='icon'/>
      <FaGithubSquare className='icon'/>
    </div>
  )
}
