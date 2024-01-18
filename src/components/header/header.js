import './header.scss';
import { useTheme } from '../themeContext/themeContext';


const Header = () => {
const {toggleTheme, isDarkMode} = useTheme();

const navBar = () => {
    const currentYLocation = window.pageYOffset;
    if(currentYLocation > 250) {
        document.getElementById('headerRow').style.border = '5px solid rgba(255, 255, 255, .34)';
        document.getElementById('headerRow').style.opacity = '1.5';
        document.getElementById('headerRow').style.backgroundColor = 'rgba(38, 79, 120, 0.735)';
    } else {
        document.getElementById('headerRow').style.border = 'none';
        document.getElementById('headerRow').style.opacity = '.8';
        document.getElementById('headerRow').style.transition = 'opacity .4s ease';
    }
}
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
document.addEventListener('scroll', navBar)
    return (
            <div className='header'>
                
                <div className='header__row' id='headerRow'>
                <div className='header__logo'>Logo
                    {/* <button onClick={toggleTheme}>Press Here</button> */}
                </div>
               
                    <div className='header__row__navigation'>
                        <ul className='header__row__navigation__list'>
                            <li className='header__row__navigation__item'><span className='header__row__navigation__item__link' onClick={() => scrollToSection('works')}>Works</span></li>
                            <li className='header__row__navigation__item'><span className='header__row__navigation__item__link' onClick={() => scrollToSection('contacts')}>Contacts</span></li>
                            <li className='header__row__navigation__item'><span className='header__row__navigation__item__link' onClick={() => scrollToSection('about')}>About</span></li>

                        </ul>
                       
                       
                    </div>
                </div>
                <div className='header__body'>
                
                    {/* <img className='header__body__img' src="https://i.ibb.co/T2ZW8BK/your-front-end-developer-using-html-css-react.webp" alt="your-front-end-developer-using-html-css-react" border="0" /> */}
                    
                    <div className='header__body__title' ><h1>Hello, World!</h1></div>
              
                    
                    <div className='header__body__sliderDown' onClick={() => scrollToSection('about')}><img className='element-with-pulse' width="40" height="40" src="https://img.icons8.com/ios-filled/50/FAB005/double-down.png" alt="double-down"/></div>
                </div>
              
                
            </div>
    )
}


export default Header;