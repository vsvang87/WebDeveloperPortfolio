import React from 'react'
import "../scss/intro.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDownload} from "@fortawesome/free-solid-svg-icons"
import {BrowserRouter as Router} from "react-router-dom";
import {HashLink as Link} from "react-router-hash-link"

function Intro() {
  return (
    <Router>
 <div className='intro-container'>
        <div className="intro-left intro-col">
            <div className="intro-left-wrapper">
            <h3 className='intro-title'>Hello, my name is</h3>
            <h1 className='intro-name'>Visay Vang</h1>
            <div className="intro-job">
                <h3>Frontend Developer</h3>
            </div>
            <div className="intro-description">
                <p>I build responsive user interfaces for all customers specializing in creating stylish, modern websites and online stores.</p>
            </div>
            <div className="intro-button">
                <Link to="#contact">Contact</Link>
                <a href="#">Resume <FontAwesomeIcon icon={faDownload}/> </a>
            </div>
            </div>
            
        </div>
        <div className="intro-right intro-col">right side</div>
    </div>


    </Router>
   
  )
}

export default Intro;