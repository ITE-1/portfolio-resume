

const ScrollToTop = () => {

    const showSliderUp = () => {
        const currentYLocation = window.pageYOffset;
      if(currentYLocation >= 350) {
         document.getElementById('scrollToTop').style.display = 'block';
     
      } else {
        document.getElementById('scrollToTop').style.display = 'none';
      
      }
    };
  ////////////////////////////
  
  window.addEventListener('scroll', showSliderUp)
      const slideUp = () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        };

    return (
               
    //     <img id='scrollToTop' 
    //     onClick={() => slideUp()}
    //     className='scrollToTop element-with-pulse' 
    //     width="50" height="50" 
    //     src="https://img.icons8.com/glyph-neue/50/FAB005/double-up.png" 
    //     alt="double-up"
    // />
    <img id='scrollToTop' 
    onClick={() => slideUp()}
    className='scrollToTop element-with-pulse' 
    width="40" height="40" 
    src="https://img.icons8.com/ios-filled/50/FA5252/double-up.png" 
    alt="double-up"/>
    )
}

export default ScrollToTop;