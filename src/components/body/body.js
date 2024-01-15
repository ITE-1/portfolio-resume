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
////////////////
const DownloadCv = () => {
    const fileName = 'CV.pdf';
    const filePath = 'https://github.com/ITE-1/portfolio-resume/blob/main/downloads/CV.pdf';

    return (
        <a href={filePath} download={fileName}>DownLoadCV</a>
    )

}

//    const downloadCV = () => {
//     // Путь к вашему файлу
//     const filePath = 'https://github.com/ITE-1/portfolio-resume/blob/main/downloads/CV.pdf';
//     // Создаем ссылку для скачивания
//     const link = document.createElement('a');
//     link.href = filePath;
//     link.download = 'CV.pdf'; // Имя файла для скачивания
//     document.body.appendChild(link);
//     // Запускаем скачивание
//     link.click();
    
//     // Удаляем ссылку из DOM
//     document.body.removeChild(link);
//    }         

    return (

            <div className="body">
                {/* <Resume /> */}
                <div className='body__content'>
                  
                      <div className='body__content__row'>
                            <div className='body__content__row__window' id='works'>Works</div>
                           <div className='body__content__row__window' id='contacts'>Contacts</div>
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