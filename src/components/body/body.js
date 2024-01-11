import Resume from '../resume/resume';
import './body.scss';
import {useState} from 'react';


const Body = () => {

    const [activeSliderId, setActiveSliderId] = useState('aboutme');

/////////////////
const data = [
                {id: 'works', title: 'My Works', body: 'some information about me'}, 
                {id: 'contacts', title: 'contacts', body: 'here wil been form soon'},
                {id: 'aboutme', title: 'About Me', body: 'some information about me'},
                {id: 'skills', title: 'My Works', body: 'some information about me'},
            ];
/////////////////
    return (

            <div className="body">
                {/* <Resume /> */}
                <div className='body__content'>
                    <div onClick={()=> console.log('Ok')} className='body__content__arrow left'></div>
                        <div className='body__content__row'>
                            {/* <div className='body__content__row__window active'>my works</div>
                            <div className='body__content__row__window'>Contacts</div>
                            <div className='body__content__row__window'>About Me</div> */}
                            
                        </div>
                    <div className='body__content__arrow right'></div>
                </div>
                
            </div>
    )
}


export default Body;