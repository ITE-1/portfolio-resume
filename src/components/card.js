import '../components/card.scss';
import photo from '../assets/photo.jpg';




const CardProfile = () => {
    const skills = [
    {
        id: 1, skill: 'HTML/CSS', color: 'red',
    }, {
        id: 2, skill: 'React', color: 'orange',
    }, {
        id: 3, skill: 'JavaScript', color: 'blue',
    }, {
        id: 4, skill: 'WebDesign', color: 'violet',
    },
    ]

    return (
        <div className="card">
                <img src={photo} />
                <h1 className='card__title'>Alex Frost</h1>
                <p className='card__descr'>Vi veri veniversum vivus vici</p>
                <div className="card__skills">
                    {skills.map((item) => {
                        return <span className='card__skill' style={{backgroundColor: item.color}}>{item.skill}</span>
                    })}
                </div>
            
        </div>
    )
}

export default  CardProfile;