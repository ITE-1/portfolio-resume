import Resume from '../resume/resume';
import DownloadCv from './body-content/downloadCV';
import './body.scss';
import {useState} from 'react';
import Contacts from './contacts/contacts';
import ContactUs from './contacts/contacts';


const Body = () => {

    
   
/////////////////
const data = [
                {id: 'works', title: 'My Works', body: 'some information about me'}, 
                {id: 'contacts', title: 'contacts', body: 'here wil been form soon'},
                {id: 'aboutme', title: 'About Me', body: 'some information about me'},
                {id: 'skills', title: 'My Works', body: 'some information about me'},
            ];
////////////////


    return (

            <div className="body">
                {/* <Resume /> */}
                <div className='body__content'>
                  
                      <div className='body__content__row'>
                            <div className='body__content__row__window' id='works'>Works</div>
                           <div className='body__content__row__window' id='contacts'>
                            <ContactUs />
                           </div>
                           <div className='body__content__row__window' id='about'>
                                <h1>About Me</h1>
                                <DownloadCv />
                           </div>
                      </div>
                       
                            
                      
                  
                </div>
                
            </div>
    )
}


export default Body;