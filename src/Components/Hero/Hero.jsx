import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import resume from '../../assets/resume.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Particles from '../Particles/Particles'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <Particles
        particleCount={150}
        particleSpread={15}
        speed={0.15}
        particleColors={["#DA7C25", "#B923E1", "#ffffff"]}
        moveParticlesOnHover={true}
        particleHoverFactor={1.5}
        alphaParticles={true}
        particleBaseSize={80}
        sizeRandomness={0.8}
        cameraDistance={25}
      />
      <div className="hero-content">
        <img src={profile_img} alt="harsh_raj" className='profile-img' />
        <h1><span>I'm Harsh Raj,</span> frontend developer based in India.</h1>
        <p>I'm a passionate frontend developer from India. I completed my B.Tech (CSE) in 2025 and have gained hands-on experience as a web development intern at Find Flames and as a full-stack developer at Platinum Software Pvt Ltd.</p>
        <div className="hero-action">
          <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
          <div className="hero-resume"><a className='anchor-link' href={resume} download>My resume</a></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
