import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
    <section id='contact'>
      <svg className='contact-transition' viewBox="0 0 1440 320">
       <path fill="#021f22" fill-opacity="1" d="M0,128L48,149.3C96,171,192,213,288,218.7C384,224,480,192,576,176C672,160,768,160,864,186.7C960,213,1056,267,1152,277.3C1248,288,1344,256,1392,240L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
      <div className='contact-me-text'>
        <div>
          <h1>Contact Me</h1>
          <p>Feel free to send me a message with any questions and I'll get back to you as soon as I can.</p>
        </div>
      </div>
      <div className='contact-form-container'>
        <form ref={ContactForm} onSubmit={SubmitCF} className='contact-form'>
          Name
          <input type='text' name='user_name' />
          Email
          <input type='email' name='user_email' />
          Message
          <textarea name='user_message' />
          <button type='submit' value='send' >Send Message</button>
        </form>
      </div>
    </section>
)}

export default Contact;