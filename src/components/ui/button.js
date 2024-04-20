import './button.scss';
import {Link} from 'react-router-dom';

export const ButtonEntrance = ({value}) => {


    return (
        <button className="btn" onClick={() => console.log(value)}>
           <Link to='/form'>Enter</Link>
        </button>
    )
}