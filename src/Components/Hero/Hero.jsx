import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import resume from '../../assets/resume.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="harsh_raj" className='profile-img' />
      <h1><span>I'm Harsh Raj,</span> frontend developer based in India.</h1>
      <p>I am a frontend developer from Motihari, India with 1 year of experience in multiple companies like Microsoft, Tesla and Apple.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume"><a className='anchor-link' href={resume} download>My resume</a></div>
      </div>
    </div>
  )
}

export default Hero
