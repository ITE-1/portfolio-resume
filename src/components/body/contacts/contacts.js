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
  
      <div className='body__content__row__window window2' >
       
      <form className='contactUS' ref={form} onSubmit={sendEmail} >
        <h2 className='contactUS__title'>Email contact form:</h2>
        {loading ? <p className='contactUS__complete'>The form was sending, thank you!</p> : ''}
      <label>
        <span>Name</span>
      <input 
      placeholder='enter your name'
      type="text" 
      name="user_name" 
      value={value.userName} 
      onChange={(e) => setValue({...value, userName: e.target.value})}/>
      </label>
      
      <label>
        <span>Email</span>
      <input 
      placeholder='enter your email'
      type="email" 
      name="user_email" 
      value={value.userEmail} 
      onChange={(e) => setValue({...value, userEmail: e.target.value})} />

      </label>
      <label>
        <span>Text</span>   
      </label>
      <textarea 
      placeholder='text here...'
      style={{border: '1px solid black', height: '80px'}} name="message" value={value.text} onChange={(e) => setValue({...value, text: e.target.value})}/>
      
      <label style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}><button className='contactUS__btn' type="submit" onClick={() => clearForm() }>SEND</button></label>
    </form>
    </div>
   
    
    
  );
};

export default ContactUs;