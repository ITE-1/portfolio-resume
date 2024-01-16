import './header.scss';
import { useTheme } from '../themeContext/themeContext';


const Header = () => {
const {toggleTheme, isDarkMode} = useTheme();


const scrollDown = () => {
    const worksSection = document.getElementById('works'); 
    worksSection.scrollIntoView({ behavior: 'smooth' });
  };


    return (
            <div className='header'>
                <div className='header__row'>
                <button onClick={toggleTheme}>changeTheme</button>
                    <div className='header__row__navigation'>
                        <ul className='header__row__navigation__list'>
                            <li className='header__row__navigation__item'><a href='#works'>My Works</a></li>
                            <li className='header__row__navigation__item'><a href='#contacts'>Contacts</a></li>
                            <li className='header__row__navigation__item'><a href='#about'>About Me</a></li>
                        </ul>
                       
                       
                    </div>
                </div>
                <div className={`header__body ${isDarkMode ? 'dark' : 'light'}`}>
                <div className='header__body__sliderDown' onClick={scrollDown}>slide down</div>
                </div>
                
            </div>
    )
}


export default Header;