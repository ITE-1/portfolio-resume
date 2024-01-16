import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {useState} from 'react';
import './contacts.scss';

const ContactUs = () => {
const [loading, setLoading] = useState(false);

const [value, setValue] = useState({
    userName: '',
    userEmail: '',
    text: ''
})


  const form = useRef();
const clearForm = (e) => {
   
    
}
  const sendEmail = (e) => {
    e.preventDefault();
    setValue({...value, userEmail: '', userName: '', text: ''});
    setLoading(true);
    emailjs.sendForm('service_cd0j1sp', 'template_dbrw8x9', form.current, '1go0yVILrfOMHJTWn')
      .then((result) => {
        setLoading(false);
          console.log(result.text);
          console.log('sucess')
      }, (error) => {
          console.log(error.text);
      });

    
  };

  return (
    <div className='body__content__row__window' id='contacts'>
      <h1 className='body__content__row__window__title'>Title</h1>
      <form className='contactUS' ref={form} onSubmit={sendEmail} >
        {loading ? 'Форма успешн отправлена' : ''}
      <label>Name</label>
      <input type="text" name="user_name" value={value.userName} onChange={(e) => setValue({...value, userName: e.target.value})}/>
      <label>Email</label>
      <input type="email" name="user_email" value={value.userEmail} onChange={(e) => setValue({...value, userEmail: e.target.value})} />
      <label>Message</label>
      <textarea name="message" value={value.text} onChange={(e) => setValue({...value, text: e.target.value})}/>
      <button type="submit" onClick={() => clearForm() }>ss</button>
    </form>
    </div>
    
  );
};

export default ContactUs;