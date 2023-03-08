import React from 'react'
import "../scss/about.scss"
import img from "../images/spam.svg"

function About() {
  return (
    <div className='about-container'>
        <div className="about-left about-col">
            <div className="about-wrapper">
           <div className="about-image">
           <img src={img} alt='' />
           </div>
            </div>
        </div>
        <div className="about-right about-col">
            <h3>About Me</h3>
            <div className="about-info"></div>
        </div>
    </div>
  )
}

export default About