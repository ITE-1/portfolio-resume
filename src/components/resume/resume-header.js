import photo from './portoflie__photo.jpg';
import { useState } from 'react';


const ResumeHeader = () => {
    
    const [isAnimated, setIsAnimated] = useState(true);
    const [ratings, setRatings] = useState({
        English: 3,
        Polish: 3,
        Ukrainian: 4,
        Russian: 5,
    });
    const myContacts = [
        {id: 1, name: 'Telegram', value: 'asked me email the first.'},
    ]

    const changeRating = (language, value) => {
        setRatings({ ...ratings, [language]: value });
    };

    const toggleAnimation = () => {
        setIsAnimated((prevValue) => !prevValue);
    };
    const MouseEvent = (e) => {

    e.preventDefault();
    setIsAnimated((e) => !e)
    console.log('значение', isAnimated)

    }

    return (
    <div className="resume__header">

        <div className='resume__header__title'>
            
            <div className='resume__header__title__item'>
                <h2>About Me:</h2>
                <p>Hello, my name is <span style={{ borderBottom: '1px solid black' }}>Oleksii</span>. I'm a motivated Front-end Developer with a passion for creating impactful digital experiences. I bring <span style={{ borderBottom: '1px solid black' }}>28 years of age</span>, born in Ukraine, and currently based in Poland.</p>
                <p>I am dedicated to delivering high-quality work and continuously expanding my skills. With a strong focus on <span style={{ borderBottom: '1px solid black' }}>fast learning</span> and effective problem-solving, I am prepared to contribute actively to challenging projects. Excellent communication skills and a commitment to professional growth are among my core strengths.</p>
               
            </div>
            <div className='resume__header__title__item'>
                <h2>Personal Characteristics:</h2>
                <p>As a <span style={{ borderBottom: '1px solid black' }}>quick learner</span> and <span style={{ borderBottom: '1px solid black' }}>proactive team player</span>, I thrive in collaborative environments. My approach is <span style={{ borderBottom: '1px solid black' }}>solution-oriented</span>, allowing me to tackle challenges effectively. I am committed to continuous learning and possess strong <span style={{ borderBottom: '1px solid black' }}>communication skills</span>, ensuring seamless collaboration within teams.</p>
            </div>
                 <div className='resume__header__title__item'>
                        <ul>
                            <h2 style={{borderBottom: '2px solid black'}}>My contacts:</h2>
                            <li className='resume__header__item__listItem'><span>Mobile Phone:</span><a  href='#'>+512376980</a></li>
                            <li className='resume__header__item__listItem'><span>Telegram:</span><a  href='#'>+380991559787</a></li>
                            <li className='resume__header__item__listItem'><span>Email: </span><a chref='#'>devilout123@gmail.com</a></li>
                            <li className='resume__header__item__listItem'><span>Linkedln:</span><a  href='#'>linkedin.com/in/alex-ite-4a6041297</a></li>
                            <li className='resume__header__item__listItem'><span>GitHub:</span><a chref='#'>github.com/ITE-1</a></li>

                        </ul>
                </div>
        </div>
      
                <div className='resume__header__title'>   
                   
                    <div className='resume__header__title__item'>
                   <div className='resume__header__title__item__photo'>
                        <img src={photo} />
                        {/* <img src={photo} /> */}
                   </div> 
                        <div style={{width: '100%'}}>
                            <h2>My language skills:</h2>
                            
                            <ul>
                                 {Object.keys(ratings).map((language, index) => (
                                <li key={index}>
                                    {language} -{' '}
                                    <span className={`stars stars-${ratings[language].toString()}`} onClick={() => changeRating(language, ratings[language])}>
                                        {Array.from({ length: 5 }, (_, i) => (i < ratings[language] ? '★' : '☆')).join('')}
                                    </span>
                             </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                    <div className='resume__header__title__item'>
                        <h2>Work Experience about 2 years!</h2>
                        <ul>
                            <li><span>Interface Development:</span> Creating and maintaining web application interfaces using HTML, CSS, and JavaScript.</li>
                            <li><span>Framework and Library Usage:</span> Working with React.js to develop user interfaces and components.</li>
                            <li><span>Responsive Design:</span> Crafting responsive and cross-browser web pages for optimal display across devices.</li>
                            <li><span>Enhancement:</span> Optimizing web applications to improve performance and enhance user experience.</li>
                            
                        </ul>
                     </div>

                     <div className='resume__header__title__item item'>
                        
                     </div>
                   
                </div>
    </div>
    )
}

export default ResumeHeader;