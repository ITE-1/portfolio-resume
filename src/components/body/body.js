import Resume from '../resume/resume';
import DownloadCv from './body-content/downloadCV';
import './body.scss';
import ContactUs from './contacts/contacts';
import Works from './works/works';


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

            <div className="body" id='about'>
                {/* <Resume /> */}
                <div className='body__content' >
                  
                      <div className='body__content__row'>
                            <div className='body__content__row__block' >
                                <h1 className='body__content__row__block__title' id='about'>About</h1>
                                <DownloadCv />
                            </div>
                            <div className='body__content__row__block' >
                                <h1 className='body__content__row__block__title' id='works'>Works</h1>
                                <Works />
                            </div>
                            <div className='body__content__row__block' >
                                <h1 className='body__content__row__block__title' id='contacts'>Contacts</h1>
                                <ContactUs />
                            </div>

                           
                          
                          
                       
                         
                      </div>
                       
                            
                      
                  
                </div>
                
            </div>
    )
}


export default Body;