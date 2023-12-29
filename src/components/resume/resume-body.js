import ResumbeBodySkillsItem from "./resume-body-item";
import './resume-body.scss';

const ResumeBody = () => {
    const skillsFactory = [
        { skillName: 'JavaScript/ES6+, TypeScript'},
        {skillName: 'React, Vue.js',},
        {skillName: 'State-Management: Redux, useContext and other..'},
        {skillName: 'REST API’s,Axios,HTTP,JSON' },
        {skillName: 'HTML5, CSS3, SCSS/SASS,BEM, Bootstrap'},
        {skillName: 'Git / webpack and other'},
        {skillName: 'Basic computer science knowledge (Algorithms and data structures)'},
        {skillName: 'Good communication skills and the ability to work as a team'},
        {skillName: 'UX-UI /Ant-UI/ Figma / PixelPerfect, Responsivible Design'},
    ];

    return (
        <div className="resume__body">
           
            <div className="resume__body__skills">
                <h2 className="resume__body__skills__name">Tehnical skills:</h2>
                <ul className="resume__body__skills__list">
                   
                   {skillsFactory.map((item, index) => {
                        return <ResumbeBodySkillsItem key={index}{...item}/>
                   })}
                </ul>
                
            </div>
            <div className='resume__body__education'>
            <h2 className="resume__body__skills__name">Education:</h2>
             
                
                    <ul className="resume__body__education__list">
                     
                         <li className="resume__body__education__list__item">
                          *JavaScript Course, Books, on Udemy,YouTube,StackOverflow, ChatGpt3.5 Official Documentation 1.5 Year.
                         </li>
                         <li className="resume__body__education__list__item">
                          *React Courses, Books, on Udemy,YouTube, Official Documentation, StackOverflow, ChatGpt3.5 about 1 Year.
                         </li>
                         <li className="resume__body__education__list__item">
                          *LeetCode and other most famous libraries.
                         </li>
                         <li className="resume__body__education__list__item">
                          *English intensive advanced Courses, on Udemy, about 6 month.
                         </li>
                         <li className="resume__body__education__list__item">
                         *Philosophy, Psyhological, Biology, Neurobiology, Motivation, Anatomy - Courses, books at world wide web, allmost all free time.
                         </li>
                         <li className="resume__body__education__list__item">
                         *Web Application Development Courses on udemy,coursehunter, Official Documentation, about 2 years.
                         </li>
                         <li className="resume__body__education__list__item">
                         *Was studing at Zaporizhya Government Medical University for 4 years.
                          </li>
                        <li className="resume__body__education__list__item">
                        *Finished Zaporizhya Medical College for 2 years.
                         </li>
                        </ul>
               
                       
             </div>
             <span>**this resume constructed by React Components,</span>
        </div>
    )
}

export default ResumeBody;