import './footer-row.scss';
import { useTheme } from '../../themeContext/themeContext';

const FooterRow = () => {

const {isDarkMode} = useTheme();

    return (
        <div className='footer__row'>
            <div className="">s</div>
        </div>
    )
}

export default FooterRow;