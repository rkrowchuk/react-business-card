import React from 'react';
import {HiOutlineMail} from "react-icons/hi";

export default function Main() {
  return (
    <div className='main-container'>
      <h1>Rhiannon Krowchuk</h1>
      <h4>Full-Stack Developer</h4>
      <p>github.com/rkrowchuk</p>
      <button className="email-btn"><HiOutlineMail className='email-icon'/> Email</button>
      <h2>About</h2>
      <p className='main-p'>I'm a creative-turned-developer with a passion for problem-solving and collaboration. With a background in designing live experiences that inspire behaviour change, I'm pivoting my focus to build products that create impact on a larger scale</p>
      <h2>Interests</h2>
      <p className='main-p'>I love travelling, trail running, board games and trying out new activities.</p>
    </div>
  )
}
