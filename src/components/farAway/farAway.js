import '../farAway/farAway.scss';
import logo from '../farAway/logo.png';

const Header = () => {


    return (
        <div className='farAway__header'>
            <div className='farAway__header__logo'>
                <img src={logo} alt='logo'/>
            </div>
        </div>
    )
}

const FarAwayForm = () => {

    return (
        <form>
            <h3>What do you need for you trip?</h3>
            <select>
                <option value='1'>1</option>
            </select>
             
        </form>
    )
}
const Navigation = () => {

    return(
        <div className='farAway__navigation'>
           <FarAwayForm />
        </div>
    )
}


export const FarAway = () => {



    return (
        <div className="farAway">
            <Header />
            <Navigation />
        </div>
    )
}