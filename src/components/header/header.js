import './header.scss';



const Header = () => {

const slideDown = () => {
    window.scrollBy(0, 450);
}


    return (
            <div className="header">
                <div className='header__row'>
                    <button>click</button>
                    <div className='header__row__navigation'>
                        <ul className='header__row__navigation__list'>
                            <li className='header__row__navigation__item'><a href='#body'>My Works</a></li>
                            <li className='header__row__navigation__item'><a href='#contacts'>Contacts</a></li>
                            <li className='header__row__navigation__item'><a href='#about'>About Me</a></li>
                        </ul>
                       
                       
                    </div>
                </div>
                <div className='header__body'>s
                    
                </div>
                <span onClick={slideDown}>slide down</span>
            </div>
    )
}


export default Header;