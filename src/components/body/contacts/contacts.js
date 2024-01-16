import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contacts.scss';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cd0j1sp', 'template_dbrw8x9', form.current, '1go0yVILrfOMHJTWn')
      .then((result) => {
          console.log(result.text);
          console.log('sucess')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className='contactUS' ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;