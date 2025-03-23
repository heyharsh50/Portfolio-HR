import React, { useState } from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import LetterGlitch from './LetterGlitch'

const About = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (serviceName) => {
    if (expandedService === serviceName) {
      setExpandedService(null);
    } else {
      setExpandedService(serviceName);
    }
  };

  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>What I do?</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <div className="glitch-container">
            <LetterGlitch
              glitchColors={['#DF8908', '#B415FF', '#61b3dc']}
              glitchSpeed={33}
              centerVignette={false}
              outerVignette={true}
              smooth={true}
            />
          </div>
        </div>
        <div className="about-right">
          <div className="services">
            <div className={`service ${expandedService === 'web' ? 'expanded' : ''}`} onClick={() => toggleService('web')}>
              <div className="service-header">
                <h2>Web Development</h2>
                <span className="dropdown-arrow">▼</span>
              </div>
              <ul className="service-content">
                <li>Single Page Applications (SPAs)</li>
                <li>Landing pages and business websites</li>
                <li>Portfolio websites</li>
                <li>E-commerce solutions</li>
                <li>Custom web applications</li>
              </ul>
            </div>
            
            <div className={`service ${expandedService === 'uiux' ? 'expanded' : ''}`} onClick={() => toggleService('uiux')}>
              <div className="service-header">
                <h2>UI/UX Design & Prototyping</h2>
                <span className="dropdown-arrow">▼</span>
              </div>
              <ul className="service-content">
                <li>User Interface Design</li>
                <li>User Experience Design</li>
                <li>Interactive Prototypes</li>
                <li>Wireframing and mockups</li>
                <li>Design systems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
