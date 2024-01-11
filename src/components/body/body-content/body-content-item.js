import './body-content-item.scss';

const BodyContentItemWindow = ({id, title, body, activeSliderId}) => {


    return (
        <div className={`body__content__row__window ${activeSliderId === id ? 'active' : ''}`} id={id} style={{backgroundColor: 'navy'}}>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )
}

export default BodyContentItemWindow;