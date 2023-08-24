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