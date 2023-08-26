import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import GithubLogo from '../img/GithubLogo.png';
import LinkedinLogo from '../img/LinkedinLogo.png';
import TransitionWave from '../img/TransitionWave.png';

const Contact = () => {
    const ContactForm = useRef();
    
    const SubmitCF = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qjjgjdq', 'template_ph5c78b', ContactForm.current, 'J1H3wB6KjrhAdpPoi')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
return (
    <section id='contact-section'>
      <img src={TransitionWave} className='contact-transition' alt=''></img>
      <div className='contact-section-wrap'>
        <div className='contact-me-text'>
          <div>
            <h1 id='contact'>Contact Me</h1>
            <p>Feel free to send me a message with any questions and I'll get back to you as soon as I can.</p>
          </div>
        </div>
        <div className='contact-form-container'>
          <form ref={ContactForm} onSubmit={SubmitCF} className='contact-form'>
            <p>Name</p>
            <input type='text' name='user_name' />
            <p>Email</p>
            <input type='email' name='user_email' />
            <p>Message</p>
            <textarea name='user_message' />
            <button type='submit' value='send' >Send Message</button>
          </form>
        </div>
        <div className='contact-divider'></div>
        <div className='additional-links'>
          <a href="https://github.com/Tyler-Knowler/My-Portfolio" target="_blank" rel="noopener noreferrer"><img src={GithubLogo} className='additional-logo' alt='GitHub'></img></a>
          <a href="http://linkedin.com/in/tylerknowler" target="_blank" rel="noopener noreferrer"><img src={LinkedinLogo} className='additional-logo' alt='LinkedIn'></img></a>
        </div>
      </div>
    </section>
)}

export default Contact;