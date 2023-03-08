import React, {useState, useRef} from 'react'
import "../scss/contact.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPhone} from "@fortawesome/free-solid-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import emailjs from "@emailjs/browser"

function Contact() {
const formRef = useRef()
const [done, setDone] = useState(false)
//handle submit form
const handleSubmit = (event) => {
    event.preventDefault();

    //send form to your email
    emailjs.sendForm('service_tipcnbm', 'template_0srqlpf', formRef.current, '54R97qG2iGlAlRqOL')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });

}

  return (
    <div className='contact-container' id='contact'>
        <div className="contact-wrapper">
            <div className="contact-left contact-col">
                <h3>Get in Touch</h3>
                <div className="contact-info">
                    <div className="contact-info-item">
                        <FontAwesomeIcon icon={faPhone} /> 
                        414-243-4862
                    </div>
                    <div className="contact-info-item">
                        <FontAwesomeIcon icon={faEnvelope} /> 
                        vsvang@gmail.com
                    </div>
                </div>
            </div>
            <div className="contact-right contact-col">
                <h3>Feel free to contact me at anytime</h3>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" placeholder='Name' name='user_name' required/>
                        
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder='Subject' name='user_subject'/>
                        
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder='Email' name='user_email' required/>
                        
                    </div>
                    <div className="form-group">
                        <textarea name="message" placeholder='Message' cols="30" rows="10"></textarea>
                        
                    </div>
                    <div className="form-group">
                        <button type='submit'>Submit</button>
                        {done && "Thanks for submitting..."}
                    </div>
                </form>
            </div>
        </div>
        </div>
  )
}

export default Contact