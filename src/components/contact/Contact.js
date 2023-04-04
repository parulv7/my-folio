import React from 'react'
import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillGithub} from "react-icons/ai"
import './Contact.css'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2kub9m9', 'template_aufxlae', form.current, 'DISz9PPAsyyN4ekeu')
    e.target.reset()
    
    // .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  };
  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact</h2>
<div className='container contact_container'>
<div className='contact_options'>
  <article className='contact_option'>
  <MdOutlineEmail className='contact_option_icons'/>
    <h4>Email</h4>
    <h5>parulverma7774@gmail.com</h5>
    <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl' >Send a message</a>
  </article>
  <article className='contact_option'>
  <AiFillGithub className='contact_option_icons'/>
    <h4>Github</h4>
    <h5>parulv7</h5>
    <a href='https://github.com/parulv7' >Visit Github</a>
  </article>
</div>


{/* form */}
<form ref={form} onSubmit={sendEmail}>

  <input type='text' name='name' placeholder='Your full Name' required/>

  <input type='email' name='email' placeholder='Your Email' required/>
  <textarea name='message' placeholder='Your Message' rows="7" required/>
  <button type='submit' className='btn btn-primary'>send Message</button>
  </form>
  </div>
    </section>
  )
}

export default Contact