import './header.scss';
import { useTheme } from '../themeContext/themeContext';


const Header = () => {
const {toggleTheme, isDarkMode} = useTheme();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
            <div className='header'>
                <div className='header__row'>
                <button onClick={toggleTheme}>changeTheme</button>
                    <div className='header__row__navigation'>
                        <ul className='header__row__navigation__list'>
                            <li className='header__row__navigation__item'><div onClick={() => scrollToSection('works')}>My Works</div></li>
                            <li className='header__row__navigation__item'><div onClick={() => scrollToSection('contacts')}>Contacts</div></li>
                            <li className='header__row__navigation__item'><div onClick={() => scrollToSection('about')}>About Me</div></li>
                        </ul>
                       
                       
                    </div>
                </div>
                <div className={`header__body ${isDarkMode ? 'dark' : 'light'}`}>
                <div className='header__body__sliderDown' onClick={() => scrollToSection('about')}>slide down</div>
                </div>
                
            </div>
    )
}


export default Header;