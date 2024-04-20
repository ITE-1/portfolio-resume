import React, {useContext, useState} from 'react';
import {Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.scss';
import './components/enter/enter.scss';
import { ButtonEntrance } from './components/ui/button';
import { MyContext } from './context/globalCoxtext';

const Modal = ({value}) => {

  return (
    <div className='modal'>
        <h4>'данные успешно отправлены'</h4>
    </div>
  )
}

const Form = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: ''
})
  const onChange = (e) =>{
    console.log(user)
    e.preventDefault();
    const {name, value} = e.target;
    setUser({...user, [name]: value});
    console.log(user);
    // setTimeout(setUser({...user, name: '', email: ''}), 5000)
  }
const onSubmit = (e) => {
  e.preventDefault();
  console.log(user);
  setUser({...user, name: '', email: ''})
  
  setIsModalOpen(true);
  setTimeout(() => setIsSend(true), 2000);
}


  return (
    <form  className='form' onSubmit={(e) => onSubmit(e)}>
     {isModalOpen && <Modal {...isModalOpen}/>}
      {isSend &&  <Navigate to='/'/>}
      <h3> Join to the rebellion! </h3>
      <label>
        Email:
        <input 
          name='email' 
          placeholder='email' 
          value={user.email}
          onChange={onChange}
          required 
          />
      </label>
      <label>
      Name: 
       <input 
        name='name' 
        value={user.name}
        placeholder='your name'
        onChange={onChange}/>
      </label>
        <button><Link to='/'>Back</Link></button>
        <button type='submit'>Complete</button>
    </form>
  )
}

const Header = () => {

const {isMouseTarget, setIsMouseTarget} = useContext(MyContext);

const onMouseEnter = () => {

  console.log(isMouseTarget)
  setIsMouseTarget(true)
}
const onMouseLeave = () => {
  console.log(isMouseTarget)
  setIsMouseTarget(false)
} 


  return (
    <div className='header'>
      <div className='header__entrance'
          onMouseLeave={onMouseLeave}
          onMouseEnter={onMouseEnter}
      >
          <h2>Do you want the change your life? </h2>
            <ButtonEntrance changeValue={setIsMouseTarget} />
      </div>
  </div>
  )
}


function App() {

  const {isMouseTarget} = useContext(MyContext);

  return (
    <div className="App">
       <div className={`blur ${isMouseTarget ? 'active' :''}`}></div>
     <Routes>
      <Route path='/' element={<Header />} />
      <Route path='/form' element={<Form />} />

     </Routes>
       
        
        
    </div>
  );
}

export default App;
