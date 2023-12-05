// Contact.jsx
import Doggo from "../assets/doggo.png";

import React, { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/Contact.css";

const Contact = () => {
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9eb8dn4', 'template_cyf7xuq', form.current, 'zXZxMw-Sxl1RbLx3y')
      .then((result) => {
        console.log(result.text);
        setIsMessageSent(true);
        setTimeout(() => setIsMessageSent(false), 3000); // Reset success message after 3 seconds
      })
      .catch((error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section>
      <div className="dogpic">
      <img src={Doggo} alt="Mandar's Picture" style={{ width: '60vh', zIndex: 0, marginTop: '20vh' }} />
      </div>

      <div className='container'>
       
        
        
        <form ref={form} onSubmit={sendEmail} className='--form-control--card'>
          <div className='input-group'>
            <div className='column1'>
            <h2 className='--text-center--'>Contact Me</h2>
              <input type='text' placeholder='Full Name' name='user_name' required />
              <input type='email' placeholder='Email' name='user_email' required />
              <input type='text' placeholder='Subject' name='subject' required />
              <textarea name="message" cols="30" rows="10"></textarea>
              <button type='submit' className='--btn-primary'>
            {isMessageSent ? 'Message Successfully Sent!' : 'Send Message'}
          </button>
          
            </div>
            
            <div className='column2'>
              
            </div>
          </div>
          
        </form>
      </div>
    </section>
  );
}

export default Contact;
