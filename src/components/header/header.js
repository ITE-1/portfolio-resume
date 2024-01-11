import './header.scss';



const Header = () => {




    return (
            <div className="header">
                <div className='header__row'>
                    <div className='header__row__navigation'>
                        <ul className='header__row__navigation__list'>
                            <li className='header__row__navigation__item'><a href='#body'>My Works</a></li>
                            <li className='header__row__navigation__item'><a href='#contacts'>Contacts</a></li>
                            <li className='header__row__navigation__item'><a href='#about'>About Me</a></li>
                        </ul>
                       
                       
                    </div>
                </div>
            </div>
    )
}


export default Header;