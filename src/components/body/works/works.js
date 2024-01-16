import { useState } from 'react';
import './works.scss';


const Works = () => {
const [currentSlide, setCurrentSlide] = useState(0);
const [touchStartX, setTouchStartX] = useState(null);

const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

const handleTouchMove = (e) => {
    if (touchStartX === null) return;

    const touchEndX = e.touches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 50) {
      // Swipe right
      prevSlide();
    } else if (deltaX < -50) {
      // Swipe left
      nextSlide();
    }

    setTouchStartX(null);
  };
const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === sliderData.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? sliderData.length - 1 : prevSlide - 1));
  };

const sliderData = [
    {id: 0, title: 'block 0'},
    {id: 1, title: 'block 1'},
    {id: 2, title: 'block 2'},
]


    return (
        <div className="body__content__row__window" id="works" >
            <div className="works__carousel"
                 onTouchStart={handleTouchStart}
                 onTouchMove={handleTouchMove}
                >
                <div className="works__carousel__slide left" onClick={prevSlide}>
                    left
                </div>
                <div className="works__carousel__wrapper">
                <div className={`block block${currentSlide}`} >{sliderData[currentSlide].title}</div>
                   
                </div>
                <div className="works__carousel__slide right" onClick={nextSlide}>
                    right
                </div>
            </div>
        </div>
    )
}



export default Works;